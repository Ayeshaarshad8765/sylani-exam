import express from 'express';
const app = express();
//import dotenv from 'dotenv'
const port = process.env.PORT || 8000; 
//import app from './config/app';
import Connection from './database/db.js';
import DefaultData from './default.js'
//dotenv.config()

//const USERNAME= process.env.DB_USERNAME;
//const PASSWORD = process.env.DB_PASSWORD;
Connection();


app.get('/', (req, res) => {
    res.json({message:'hy im connect'})
  })


  //server create
  app.listen(port,()=>{
      console.log(`serve is running at port no ${port}` )
   })

   DefaultData()
   export default app;
   //hanzillah876
   //$ayesha$hanzillah1996