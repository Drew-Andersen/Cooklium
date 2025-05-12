const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema =new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    ingredients: [{
        name: String,
        quantity: String
    }],
    steps: {
        type: [String]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;