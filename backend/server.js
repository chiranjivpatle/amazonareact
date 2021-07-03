import express from 'express';
import data from './data';
// import dotenv from 'dotenv'
// import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
 import productRoute from './routes/productRoute'


const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


const mongodbUrl = "mongodb+srv://chiranjiv:chiranjivpatle@cluster0.y7jx4.mongodb.net/amazonaa?retryWrites=true&w=majority";
mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex: true,
    
})
.then(()=>console.log("connection succesful"))
.catch (error => console.log(error.reason));

app.use('/api/users', userRoute);
 app.use('/api/products', productRoute);



// app.get('/api/products/:id', (req,res)=>{
//     const productId = req.params.id;
//     const product = data.products.find(x=>x._id === productId)
//     if(product)
//         res.send(product);
//         else 
//         res.send(404).send({msg: "Product Not Found"})
// })
// app.get('/api/products', (req,res)=>{
//     res.send(data.products);
// })

app.listen(5000, ()=>{console.log("server started at http://localhost:5000")})