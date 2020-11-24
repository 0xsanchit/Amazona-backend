import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import data from '../data.js';

const productRouter = express.Router();

productRouter.get('/',expressAsyncHandler(async(req,res)=>{
    const products  = await Product.find({});
    res.send(products);
}));

productRouter.get('/seed',expressAsyncHandler(async(req,res) => {
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
}));

productRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
    const product = await Product.find({_id: req.params.id});
    if(product)
    {
        console.log(product);
        res.send(product[0]);
    }
    else
    {
        res.status(404).send({message: "Product Not Found"});
    }
}));

export default productRouter;