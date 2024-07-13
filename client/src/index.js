import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { store } from './store';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}> {}
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <App />
                </Router>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();