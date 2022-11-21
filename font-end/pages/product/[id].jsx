
import { TextInput, Checkbox, Button, Group, Box, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import { getProduct } from '../../redux/product.slice';
import { useRouter } from 'next/router';
const editProducts = () => {
    const { product } = useSelector((state) => ({ ...state.data }));
    const [products, setproducts] = useState();

    const router = useRouter();
    const id = router.query;
    const handleSubmit = (e) => {
        //         dispatch(editProduct({e, toast}));
    }
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(id);
        dispatch(getProduct(id,toast));
        
      }, []);
      useEffect(() =>{
        if(product){
          setproducts(product)
        }
      },[product])
    const form = useForm({
        initialValues: {
          product: String,
          category: String,
          image:String,
          price:Number
        },      
      });
    
    return (
<div style={{textAlign:'center'}}>
<h1>Sửa thông tin sản phẩm</h1>
<Box sx={{ maxWidth: 300 }} mx="auto">
<form onSubmit={form.onSubmit(handleSubmit)}>
  <TextInput
    withAsterisk
    label="Products" 
    value={product.products}
    placeholder="product..."
    {...form.getInputProps('product')}
  />
  <TextInput
  withAsterisk
  label="category" 
  value={product.category}
  placeholder="please category..."
  {...form.getInputProps('category')}
/>
  <TextInput
  withAsterisk
  label="image" 
  value={product.image}
  placeholder="please parse link image URL..."
  {...form.getInputProps('image')}
/>
<TextInput
withAsterisk
label="Price" 
value={product.price}
placeholder="please price..."
{...form.getInputProps('price')}
/>
  <Group position="right" mt="md">
    <Button type="submit">Lưu thông tin sản phẩm</Button>
  </Group>
</form>
</Box>
</div>
    )
}
export default editProducts;