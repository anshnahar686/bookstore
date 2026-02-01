import express, { response } from 'express'
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './mothers/bookmodel.js';
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.get('/', (res, req) => {
    console.log(req)
    return req.status(234).send("hello from the server");
})
app.use(cors());
app.use('/books',bookRoute)
mongoose.connect(mongoDBURL).then(() => {
    console.log('app is connected to database')
}).catch((e) => {
    console.log(e)
    console.log("app is not connected");
})
app.listen(PORT, () => {
    console.log(`app is listening to the port${PORT}`);
})