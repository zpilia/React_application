import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        h2: {
            fontFamily: '"Georgia", Gadget, sans-serif',
            fontWeight: 'bold',
            color: '#0d66c2'
        }
    }
});

export default theme;