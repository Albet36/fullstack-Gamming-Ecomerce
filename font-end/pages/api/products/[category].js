import { listProduct } from './api';

export const getProductsByCategory = async(category) => {
  const values = await listProduct();
const valueObj = values.data.map((product) => {return product});
  const products = valueObj.filter((product) => product.category === category);
  console.log(valueObj);
  return products;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(req.query.category);
    res.status(200).json(products);
  }
}
