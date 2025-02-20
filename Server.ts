import express from 'express';
import cors from 'cors';
import MealRouter from "./Router/MealRouter";

const app = express();
app.use(express.json())
app.use(cors())

app.use('/meal',MealRouter)

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})