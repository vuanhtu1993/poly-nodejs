import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: String,
    description: {
        type: String
    },
    thumbnail: {
        type: String
    },
    price: {
        type: Number
    },
    brandId: {
        type: Schema.ObjectId,
        ref: "brand"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

productSchema.index({
    name: "text",
    description: "text"
})

export default mongoose.model("product", productSchema)