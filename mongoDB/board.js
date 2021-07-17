const mongoose = require('mongoose');
const boardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('Board', boardSchema);
