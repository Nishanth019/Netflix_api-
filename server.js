import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRoutes from './routes/UserRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://nishu:nishu@db.qpsikbe.mongodb.net/?retryWrites=true&w=majority/LikedVideos",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is successful");
}
).catch((err)=>{
    console.log(err);
}
);

app.use('/api/user', UserRoutes);

app.listen(5000,()=>{
    console.log("Serving is working bro")
});