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
import Box from '@mui/material/Box';

function ListPage() {
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
            <Box mt={4}> {}
                <Typography variant="h2" gutterBottom>
                    Liste des produits
                </Typography>
            </Box>
            <Box mt={4}>
            <List>
                {products.map((product) => (
                    <ListItem key={product._id}>
                        <ListItemText
                            primary={product.name}
                            secondary={`Type: ${product.type}, Price: $${product.price}, Rating: ${product.rating}, Warranty: ${product.warranty_years} years, Available: ${product.available ? 'Yes' : 'No'}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="details">
                                <InfoIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            </Box>
        </Container>
    );
}

export default ListPage;