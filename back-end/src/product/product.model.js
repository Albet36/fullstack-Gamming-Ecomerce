import mongoose, { Schema } from 'mongoose';
const productSchema =  mongoose.Schema(
{
    // idAccount: Number,
    product: String,
    category: String,
    image:String,
    price: Number,
  
   
}
)
const product = mongoose.model('product',productSchema);
export default product;