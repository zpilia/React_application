import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { green, yellow, red } from '@mui/material/colors';

function ListProducts() {
    const [products, setProducts] = useState([]);

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

    return (
        <Container>
            <Box mt={4}>
                <Typography variant="h2" gutterBottom>
                    Liste des produits
                </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end" mb={2}>
                <Fab style={{ backgroundColor: green[500], color: 'white' }} aria-label="add">
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
                                        Type : {product.type}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Price : ${product.price}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Rating : {product.rating}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Warranty : {product.warranty_years} years
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Available : {product.available ? 'Yes' : 'No'}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit" onClick={() => console.log(product._id)}>
                                <ModeEditIcon style={{ color: yellow[700] }} />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => console.log(product._id)}>
                                <DeleteIcon style={{ color: red[500] }} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default ListProducts;