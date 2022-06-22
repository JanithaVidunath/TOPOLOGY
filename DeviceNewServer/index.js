
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './route.js'


const PORT = process.env.PORT || 9000;



const app = express();
app.use(express.json());
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/',routes)



const server = http.createServer(app)



mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then(
() => server.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
)
.catch((error) => console.log(`${error} did not connect`));
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;


export {db};