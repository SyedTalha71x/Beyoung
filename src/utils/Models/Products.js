import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    availableqty: { type: Number, required: true },
    category: {type: String, required: true},
})

export default mongoose.models.nproducts || mongoose.model('nproducts', ProductSchema);