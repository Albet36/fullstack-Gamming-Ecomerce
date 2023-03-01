
import { TextInput, Checkbox, Button, Group, Box, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify';
import { addProduct } from '../../redux/product.slice';
const addProducts = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
            dispatch(addProduct({e, toast}));
    }
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
<h1>Thêm sản phẩm</h1>
<Box sx={{ maxWidth: 300 }} mx="auto">
<form onSubmit={form.onSubmit(handleSubmit)}>
  <TextInput
    withAsterisk
    label="Products"
    placeholder="product..."
    {...form.getInputProps('product')}
  />
  <TextInput
  withAsterisk
  label="category"
  placeholder="please category..."
  {...form.getInputProps('category')}
/>
  <TextInput
  withAsterisk
  label="image"
  placeholder="please parse link image URL..."
  {...form.getInputProps('image')}
/>
<TextInput
withAsterisk
label="Price"
placeholder="please price..."
{...form.getInputProps('price')}
/>
  <Group position="right" mt="md">
    <Button type="submit" className='bg-black text-white'>Submit</Button>
  </Group>
</form>
</Box>
</div>
    )
}
export default addProducts;