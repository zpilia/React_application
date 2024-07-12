const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    type: String,
    price: Number,
    rating: Number,
    warranty_years: Number,
    available: Boolean
});

productSchema.plugin(AutoIncrement, { id: 'product_seq', inc_field: '_id' });
module.exports = mongoose.model('Product', productSchema);