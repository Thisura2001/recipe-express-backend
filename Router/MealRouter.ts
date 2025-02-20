import express from 'express'
import {addMeal} from "../Database/MealDatabase";
import Meal from "../Model/Meal";

const router = express.Router();

router.post('/add',async (req,res,next)=>{
    console.log(req.body);
    const meal:Meal = req.body;
    try {
        const add = await addMeal(meal);
        res.json(add);
    }catch (err) {
        console.log("Error adding meal ", err)
        res.status(400).send("Error adding meal");
    }
})
export default router;