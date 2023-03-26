import mongoose from "mongoose";
const {Schema} = mongoose

const Image = new Schema({
    base_url: {
        type: String,
        required: true
    },
    is_gallery: Boolean,
    label: String,
    large_url: String
})

const Device = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    original_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [Image]
})