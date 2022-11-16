import { useState,useEffect } from 'react';
import ProductCard from '../components/products/ProductCard';
import styles from '../styles/ShopPage.module.css';
import { listProduct } from './api/products/api';

const ShopPage = () => {
  const [products,setProducts]= useState("");

  const getAllProduct = async () => {
    let response = await listProduct();
     setProducts(response.data);
  }
  useEffect(() => {
    getAllProduct();
   
  },[])
   const handleChange = (e) => {
    const data = e.target.value;
    console.log(data);
    // setProducts(e.target.value);
    if(data.length !=""){
     const  valueSearch= products.filter((i) => i.product.match(data));
     return setProducts(valueSearch);
    }
    else{
     return getAllProduct();
    }
   }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
    <div className={styles.form}>

   <div>
  
   <input onChange={handleChange}   type="text"/>
   </div>

    </div>
      <div className={styles.cards}>
         {products && products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))} 
      </div>
    </div>
  );
};

export default ShopPage;


