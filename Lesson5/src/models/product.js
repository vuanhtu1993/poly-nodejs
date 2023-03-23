import mongoose from "mongoose";
const {Schema} = mongoose

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Product", Product)