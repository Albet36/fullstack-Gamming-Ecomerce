import { Button, Table } from '@mantine/core';
import { useState,useEffect } from 'react';
import styles from '../../styles/ShopPage.module.css';
import { deleteProduct, listProduct, listProductApi } from '../api/products/api';
// import { listProduct } from './api/products/api';

const ShopPage = () => {
  const [products,setProducts]= useState("");

  const getAllProduct = async () => {
    let response = await listProductApi();
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
    <div className={`${styles.container}, px-48`}>
    <h1 className='text-center text-2xl'>Danh sách sản phẩm</h1>
    <div className={styles.form}>
   <div>
  <h2><a href="/product/add">Thêm sản phẩm</a></h2>
   <input onChange={handleChange}   type="text"/>
   </div>

    </div>
    <Table>
    <thead>
      <tr>
        <th>Tên sản phẩm</th>
        <th>Thể loại</th>
        <th>URL ảnh</th>
        <th>Giá tiền</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>  
     {products && products.map((product) => (
        <tr key={product.product}>
        <td>{product.product}</td>
        <td>{product.category}</td>
        <td>{product.image}</td>
        <td>{product.price}</td>
        <td><a  href={`/product/${product.product}`} className="bg-black text-white p-2 rounded-lg" style={{marginRight:5}}>Sửa</a>
        <Button onClick={() => deleteProduct(product._id)} className="bg-black text-white" style={{marginRight:5}}>Xoá</Button></td>
      </tr>
     ))}
  </tbody>
  </Table>
      
     
   
    </div>
  );
};

export default ShopPage;


