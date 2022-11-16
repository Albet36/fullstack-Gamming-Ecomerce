import product from "./product.model.js";


export const listProduct = async(req,res) => {
    try {
        const listProductItem = await product.find();
         res.status(200).json(listProductItem);
    } catch (error) {
        res.status(500).json({message:'lay list that bai'});
    }
}
export const createProduct = async (req,res) => {
    try {
     const products = new product(req.body);   
     await products.save();
     res.status(200).json({message:'them san pham thanh cong'})
    } catch (error) {
        res.status(500).json({message:'them san pham that bai'})
    }
}
export const editProduct = async(req,res) => {
    try {
        await product.updateOne({_id :req.params.id},req.body);
        res.status(200).json({message:'sua san pham thanh cong'});
    } catch (error) {
        res.status(500).json({message:'sua san pham that bai'});
    }
}
export const deleteProduct = async(req,res) => {
    try {
        await product.remove({_id: req.params.id});
        res.status(200).json({message:'xoa san pham thanh cong'});
    } catch (error) {
        res.status(500).json({message:'xoa san pham that bai'});
    }
}
export const getProduct = async(req,res) => {
    try {
        const productItem = await product.findById({_id: req.params.id});
        res.status(200).json(productItem);
    } catch (error) {
        res.status(500).json('failed get product');
    }
}
export const searchProduct = async (req,res) => {
    try {
        const productItem = await product.find(req.body);
        res.status(200).json(productItem);
    } catch (error) {
        res.status(500).json('search failed product');
    }
}