
import { fetchProducts, fetchProductById } from "../Controller/products.controller.js";


export function productRoutes(app){
app.get("/api/products", fetchProducts);         // GET /api/products
app.get("/api/products/:id", fetchProductById);   // GET /api/products/:id
}




