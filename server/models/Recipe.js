const { Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    ingredient: {
        type: String,
        required: true,

    },
    cuisine:{
        type: String,
        required: true,
    },
    instruction: {
        type: String,
        required: true,
    },
    calories: {
        type: Number
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    }
},
{
    toJSON: {
        getters:true
    }
}
);

const Recipe = model('Recipe', recipeSchema);
module.exports = Recipe;