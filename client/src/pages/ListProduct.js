import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../slices/productsSlice';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { green, yellow, red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ListProducts() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productStatus = useSelector((state) => state.products.status);
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        _id: '',
        name: '',
        type: '',
        price: '',
        rating: '',
        warranty_years: '',
        available: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);

    const handleClickOpen = () => {
        setFormValues({
            _id: '',
            name: '',
            type: '',
            price: '',
            rating: '',
            warranty_years: '',
            available: ''
        });
        setIsEditing(false);
        setError('');
        setOpen(true);
    };

    const handleEditClickOpen = (product) => {
        setFormValues({
            _id: product._id,
            name: product.name,
            type: product.type,
            price: product.price,
            rating: product.rating,
            warranty_years: product.warranty_years,
            available: product.available ? 'Yes' : 'No'
        });
        setIsEditing(true);
        setError('');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        // Vérification de l'unicité de l'ID côté client
        if (!isEditing && products.some(product => product._id === Number(formValues._id))) {
            setError('ID already exists. Please choose a different ID.');
            return;
        }

        if (isEditing && products.some(product => product._id === Number(formValues._id) && product._id !== Number(formValues._id))) {
            setError('ID already exists. Please choose a different ID.');
            return;
        }

        const newProduct = {
            _id: Number(formValues._id),
            name: formValues.name,
            type: formValues.type,
            price: Number(formValues.price),
            rating: Number(formValues.rating),
            warranty_years: Number(formValues.warranty_years),
            available: formValues.available.toLowerCase() === 'yes'
        };

        try {
            if (isEditing) {
                await dispatch(updateProduct(newProduct));
            } else {
                await dispatch(addProduct(newProduct));
            }
            handleClose();
        } catch (error) {
            console.error("Error adding product:", error);
            console.error("Response data:", error.response.data);
        }
    };

    const handleDelete = async (id) => {
        try {
            await dispatch(deleteProduct(id));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <Container>
            <Box mt={4}>
                <Typography variant="h2" gutterBottom>
                    Liste des produits
                </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end" mb={2}>
                <Fab style={{ backgroundColor: green[500], color: 'white' }} aria-label="add" onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
            </Box>
            <List>
                {products.map((product) => (
                    <ListItem key={product._id}>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Type: {product.type}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Price: ${product.price}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Rating: {product.rating}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Warranty: {product.warranty_years} years
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Available: {product.available ? 'Yes' : 'No'}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit" onClick={() => handleEditClickOpen(product)}>
                                <ModeEditIcon style={{ color: yellow[700] }} />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product._id)}>
                                <DeleteIcon style={{ color: red[500] }} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{isEditing ? 'Edit Product' : 'Add Product'}</DialogTitle>
                <DialogContent>
                    <form id="add-product-form" onSubmit={handleSubmit}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="_id"
                            label="Product ID"
                            type="number"
                            fullWidth
                            value={formValues._id}
                            onChange={handleChange}
                            required
                            disabled={isEditing} // Empêche la modification de l'ID lors de l'édition
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Product Name"
                            type="text"
                            fullWidth
                            value={formValues.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            id="type"
                            label="Product Type"
                            type="text"
                            fullWidth
                            value={formValues.type}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            id="price"
                            label="Product Price"
                            type="number"
                            fullWidth
                            value={formValues.price}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            id="rating"
                            label="Product Rating"
                            type="number"
                            fullWidth
                            value={formValues.rating}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            id="warranty_years"
                            label="Warranty Years"
                            type="number"
                            fullWidth
                            value={formValues.warranty_years}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            id="available"
                            label="Available"
                            type="text"
                            fullWidth
                            value={formValues.available}
                            onChange={handleChange}
                            required
                        />
                    </form>
                    {error && <Typography color="error">{error}</Typography>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button form="add-product-form" type="submit" color="primary">
                        {isEditing ? 'Update' : 'Add'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default ListProducts;