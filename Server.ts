import express from 'express';
import cors from 'cors';
import MealRouter from "./Router/MealRouter";
import authRoutes, {authenticateToken} from "./Router/auth-routes";

const app = express();
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
}));

app.use('/meal',MealRouter)
app.use('/auth', authRoutes);
console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);

app.use(authenticateToken);
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})