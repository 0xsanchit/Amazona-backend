import express from 'express';
//import data from './data.js';
import User from './models/userModel.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazona',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

/*app.get('/api/products/:id',(req,res) => {
    //console.log(req.params.id);
    const product = data.products.find((x) => x._id === parseInt(req.params.id));
    //console.log(product);
    if(product)
    {
        //console.log("sent");
        res.send(product);
    }
    else{
       // res.send({message: "Hello"});
        res.status(404).send({message: "Product Not Found"});
    }
})*/

/*app.get('/api/products', (req,res)=>{
    res.send(data.products);
});*/


app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
//app.get('/api/users',userRouter);
/*app.get('/api/users/seed',async(req,res) =>{
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
    console.log("/seed");
});*/

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
})

app.get('/', (req,res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${5000}`);
});