import { useState,useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import styles from '../styles/ShopPage.module.css';
import { listProduct } from './api/products/api';

const ShopPage = () => {
  const [products,setProducts]= useState();

  const getAllProduct = async () => {
    let response = await listProduct();
     setProducts(response.data);
  }
  useEffect(() => {
    getAllProduct();
  },[])
   console.log(products);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
         {products && products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))} 
      </div>
    </div>
  );
};

export default ShopPage;


