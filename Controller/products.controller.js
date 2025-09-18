import productModel from "../Model/Products.model.js";
import mongoose from "mongoose";


// Fetch all products
export async function fetchProducts(req, resp) {
    try {
        const data = await productModel.find();
        if (!data || data.length === 0) {
            return resp.status(404).json({ message: "No products found" });
        }
        resp.status(200).json(data);
    } catch (error) {
        console.error("Error fetching products:", error);
        resp.status(500).json({ error: "Server error" });
    }
}

// Fetch product by ID
// export async function fetchProductById(req, resp) {
//     try {
//         const id = req.params.id;  
//         const data = await productModel.find((p)=> p.id === ProductId);

//         if (!data) {
//             return resp.status(404).json({ message: "Product not found" });
//         }
//         resp.status(200).json(data);
//     } catch (error) {
//         console.error("Error fetching product:", error);
//         resp.status(500).json({ error: "Server error" });
//     }
// }

export async function fetchProductById(req, resp) {
    try {
        const id = req.params.id;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return resp.status(400).json({ message: "Invalid product ID" });
        }

        const data = await productModel.findById(id); 

        if (!data) {
            return resp.status(404).json({ message: "Product not found" });
        }

        resp.status(200).json(data);
    } catch (error) {
        console.error("Error fetching product:", error);
        resp.status(500).json({ error: "Server error" });
    }
}