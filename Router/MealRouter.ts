import express from 'express'
import {addMeal, getAllMeals} from "../Database/MealDatabase";
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
router.get('/view',async (req,res,next)=>{
    try {
        const meal = await getAllMeals();
        res.json(meal)
    }catch (err) {
        console.log("Error getting meal ", err)
    }
})
export default router;