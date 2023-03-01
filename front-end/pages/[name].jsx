import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart.slice";

import { listProduct } from "../redux/product.slice";
const productDetail = () => {
  const { product } = useSelector((state) => ({ ...state.product }));
  const dispatch = useDispatch();
  const getProduct = async () => {
    dispatch(listProduct());
  };
  // setProducts(product)
  useEffect(() => {
    getProduct();
  }, []);

  const router = useRouter();
  const { name } = router.query;
  return (
    <>
    {product &&
        product
        .filter((proc) => proc.product === name)
        // .splice(2,3)
        .map((pro) => {
            return (
                <div>
                <h1 className="text-4xl text-center my-10">Chi tiết sản phẩm</h1>
                <div className="flex gap-10 px-48">
                  <div>
                  <img src={pro.image} className="w-[450px] h-[450px]" />
               
                  </div>
                  <div className="space-y-5">
                    <h2 className="font-bold">{pro.product}</h2>
                    <p>Category : {pro.category}</p>
                    <p>Price : {pro.price}</p>
                    <div className="flex gap-2 mt-10">
                    <button onClick={() => dispatch(addToCart(product))} className="px-8 py-2 border">Add To Card</button>
                    <button className="px-8 py-2 border">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};
export default productDetail;
