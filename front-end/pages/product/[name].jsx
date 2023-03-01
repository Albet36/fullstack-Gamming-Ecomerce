import { TextInput, Checkbox, Button, Group, Box, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getProductByNameApi } from "../api/products/api";
const editProducts = () => {
  const [products, setProducts] = useState("");
  const { product } = useSelector((state) => ({ ...state.product }));
  const router = useRouter();
  const id = router.query;
  const dispatch = useDispatch();
  console.log(id);
  useEffect(() => {
    dispatch(getProductByNameApi(id));
    setProducts(product);
  }, []);
  
  const handleSubmit = (e) => {
    //         dispatch(editProduct({e, toast}));
  };
  const form = useForm({
    initialValues: {
      product: String,
      category: String,
      image: String,
      price: Number,
    },
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sửa thông tin sản phẩm</h1>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="Products"
            value={products.product}
            placeholder="product..."
            {...form.getInputProps("product")}
          />
          <TextInput
            withAsterisk
            label="category"
            value={products.category}
            placeholder="please category..."
            {...form.getInputProps("category")}
          />
          <TextInput
            withAsterisk
            label="image"
            value={products.image}
            placeholder="please parse link image URL..."
            {...form.getInputProps("image")}
          />
          <TextInput
            withAsterisk
            label="Price"
            value={products.price}
            placeholder="please price..."
            {...form.getInputProps("price")}
          />
          <Group position="right" mt="md">
            <Button type="submit">Lưu thông tin sản phẩm</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};
export default editProducts;
