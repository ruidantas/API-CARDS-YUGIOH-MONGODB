const mongoose = require('mongoose');
const cards = new mongoose.Schema({
    id: {type:String, required:true},
    category: {type:String, required:true},
    atributte: {type:String, required:true},
    effect: {type:String, required:true},
    image: {type:String, required:true},
    atk: {type:String, required:true},
    def: {type:String, required:true}
})

const model = mongoose.model("Cards", cards)

module.exports = model
