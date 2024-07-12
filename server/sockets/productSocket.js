const WebSocket = require('ws');
const Product = require('../models/productModel');

const setupProductSocket = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('New client connected');

        Product.watch().on('change', (change) => {
            ws.send(JSON.stringify(change));
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
};

module.exports = setupProductSocket;