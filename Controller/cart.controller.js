import cartModel from "../Model/cart.model.js";

export async function addToCart(req, res) {
    try {
        const newItem = new cartModel(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ error: "Server error" });
    }
}

export async function updateCartItem(req, res) {
    try {
        const id = req.params.id;
        const updatedItem = await cartModel.findOneAndUpdate(
            { id: parseInt(id) },
            req.body,
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        console.error("Error updating cart item:", error);
        res.status(500).json({ error: "Server error" });
    }
}

export async function removeFromCart(req, res) {
    try {
        const id = req.params.id;
        const deletedItem = await cartModel.findOneAndDelete({ id: parseInt(id) });

        if (!deletedItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        res.status(200).json({ message: "Cart item removed successfully" });
    } catch (error) {
        console.error("Error removing cart item:", error);
        res.status(500).json({ error: "Server error" });
    }
}