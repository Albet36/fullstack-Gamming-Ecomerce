import { listProduct } from './api';
export const queryListProduct = async() =>{
  
} 


export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = listProducts();
    res.status(200).json(products);
  }
}
