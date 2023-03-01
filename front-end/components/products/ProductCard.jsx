import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import styles from "../../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={product.image} className="w-[220px] h-[330px]"  alt="My Image"/>
      <a href={`/${product.product}`} className={`${styles.title}`}>
        {product.product}
      </a>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <div className="flex justify-between gap-5">
        <button
          onClick={() => dispatch(addToCart(product))}
          className={styles.button}>
          Add to Cart
        </button>
        <button
          onClick={() => dispatch(addToCart(product))}
          className={styles.button}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
