import { Button, Table } from '@mantine/core';
import { useState,useEffect } from 'react';
import styles from '../../styles/ShopPage.module.css';
import { deleteProduct, listProduct } from '../api/products/api';
// import { listProduct } from './api/products/api';

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
  <h2><a href="/product/add">Thêm sản phẩm</a></h2>
   <input onChange={handleChange}   type="text"/>
   </div>

    </div>
    <Table>
    <thead>
      <tr>
        <th>Element position</th>
        <th>Element name</th>
        <th>Symbol</th>
        <th>Atomic mass</th>
      </tr>
    </thead>
    <tbody>  
     {products && products.map((product) => (
        <tr key={product.product}>
        <td>{product.product}</td>
        <td>{product.category}</td>
        <td>{product.image}</td>
        <td>{product.price}</td>
        <td><a  href={`/product/${product._id}`} style={{marginRight:5}}>Sửa</a>
        <Button onClick={() => deleteProduct(product._id)}  style={{marginRight:5}}>Xoá</Button></td>
      </tr>
     ))}
  </tbody>
  </Table>
      
     
   
    </div>
  );
};

export default ShopPage;


