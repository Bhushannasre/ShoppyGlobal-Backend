import { addToCart, removeFromCart, updateCartItem } from "../Controller/cart.controller.js"; 
import verifyToken from "../Middleware/verifyToken.js";
export function cartRoutes(app){
 app.post("/api/cart",verifyToken,addToCart);
 app.put("/api/cart/:id",verifyToken,updateCartItem);
 app.delete("/api/cart/:id",verifyToken,removeFromCart);
 
 }