const mongoose = require('mongoose');
const Product = require('./models/productModel');
require('dotenv').config();

const products = [
    { "_id": 1, "name": "AC1 Phone1", "type": "phone", "price": 200.05, "rating": 3.8, "warranty_years": 1, "available": true },
    { "_id": 2, "name": "AC2 Phone2", "type": "phone", "price": 147.21, "rating": 1, "warranty_years": 3, "available": false },
    { "_id": 3, "name": "AC3 Phone3", "type": "phone", "price": 150, "rating": 2, "warranty_years": 1, "available": true },
    { "_id": 4, "name": "AC4 Phone4", "type": "phone", "price": 50.20, "rating": 3, "warranty_years": 2, "available": true }
];

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected...');
        return Product.insertMany(products);
    })
    .then(() => {
        console.log('Data inserted');
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error:', err);
        mongoose.disconnect();
    });