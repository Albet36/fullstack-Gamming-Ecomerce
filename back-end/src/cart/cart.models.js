import mongoose from 'mongoose'
const cartSchema = new mongoose.Schema({
  items: [
    {
      product: { type: String},
      price: { type: Number},
      quantity: { type: Number},
      image: {type:String}
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;