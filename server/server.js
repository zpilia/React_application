const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const setupProductSocket = require('./sockets/productSocket');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

connectDB().then(r => console.log(r)).catch(e => console.log(e));

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

setupProductSocket(server);