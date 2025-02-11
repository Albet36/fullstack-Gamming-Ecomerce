import Cart from "./cart.models.js";

export const  saveCart = async(req,res) => {
    try {
        const { items } = req.body;
        const cart = new Cart({ items });
        const savedCart = await cart.save();
        res.json(savedCart);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}