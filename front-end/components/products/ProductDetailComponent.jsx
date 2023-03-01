 const ProductDetailComponent = ({ product, category, image, price }) => {
  
  return (
    <div>
      <h1>{product}</h1>
      <p>{product}</p>
      <p>{category}</p>
      <img src={image} />
      <p>{price}</p>
    </div>
  );
};
export default ProductDetailComponent;