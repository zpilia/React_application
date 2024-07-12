import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ListPage from './pages/ListProduct';
import './App.css';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/listProduct');
    };

    return (
        <Container>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                textAlign="center"
            >
                <div>
                    <Typography variant="h1" className="title" gutterBottom>
                        Bienvenue dans mon application React avec Material UI
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Listes des produits
                    </Button>
                </div>
            </Box>
        </Container>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listProduct" element={<ListPage />} />
        </Routes>
    );
}

export default App;