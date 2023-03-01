import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/products/ProductCard";
import { listProduct } from "../redux/product.slice";
import styles from "../styles/ShopPage.module.css";
import jwt from 'jsonwebtoken';
const ShopPage = () => {
  const dispatch = useDispatch();
  // const [products,setProducts] = useState();
  const { product } = useSelector((state) => ({ ...state.product }));
  const getAllProduct = async () => {
    dispatch(listProduct());
  };
  // setProducts(product)
  useEffect(() => {
    getAllProduct();
  }, []);
  const handleChange = (e) => {
    const data = e.target.value;
    console.log(data);
    // setProducts(e.target.value);
    // if (data.length != "") {
    //   const valueSearch = product.filter((i) => i.product.match(data));
    //   return setProducts(valueSearch);
    // } else {
    //   return getAllProduct();
    // }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.form}>
        <div>
          <h2>
            <a href="/product/add" className="">Thêm sản phẩm</a>
          </h2>
          <input onChange={handleChange} type="text" />
        </div>
      </div>
      <div className={styles.cards}>
        {product &&
          product.map((produc) => (
            <ProductCard key={produc._id} product={produc} />
          ))}
      </div>
    </div>
  );
};

export default ShopPage;
