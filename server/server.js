import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";



import Connection from "./database/db.js";
import  Routes from "./routes/route.js";

const app=express();

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/",Routes);

const PORT=process.env.PORT || 8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${username}:${password}@crud-app-shard-00-00.hqj3q.mongodb.net:27017,crud-app-shard-00-01.hqj3q.mongodb.net:27017,crud-app-shard-00-02.hqj3q.mongodb.net:27017/CRUD_APP?ssl=true&replicaSet=atlas-xn7dl4-shard-0&authSource=admin&retryWrites=true&w=majority`;



Connection(URL);

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
}

app.listen(PORT,()=>{
    console.log(`Server is successfully running on port ${PORT}`)
});


