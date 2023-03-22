import mongoose, {Schema} from "mongoose";

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Product", Product)