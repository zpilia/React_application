import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    const [products, setProducts] = useState([]);
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

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/products');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

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
        try {
            const newProduct = {
                _id: Number(formValues._id),
                name: formValues.name,
                type: formValues.type,
                price: Number(formValues.price),
                rating: Number(formValues.rating),
                warranty_years: Number(formValues.warranty_years),
                available: formValues.available.toLowerCase() === 'yes'
            };
            if (isEditing) {
                await axios.put(`http://localhost:4000/products/${formValues._id}`, newProduct);
                setProducts((prevProducts) =>
                    prevProducts.map((product) =>
                        product._id === newProduct._id ? newProduct : product
                    )
                );
            } else {
                const response = await axios.post('http://localhost:4000/products', newProduct);
                setProducts((prevProducts) => [...prevProducts, response.data]);
            }
            handleClose();
        } catch (error) {
            console.error("Error adding product:", error);
            console.error("Response data:", error.response.data);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/products/${id}`);
            setProducts((prevProducts) => prevProducts.filter(product => product._id !== id));
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