import express from 'express'
import {addMeal, DeleteMeal, getAllMeals} from "../Database/MealDatabase";
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
router.get('/',async (req,res,next)=>{
    try {
        const meal = await getAllMeals();
        res.json(meal)
    }catch (err) {
        console.log("Error getting meal ", err)
    }
})
router.delete('/delete/:name',async (req,res,next)=>{
    const name = req.params.name;
    try {
        const meal = await DeleteMeal(name);
        res.json(meal)
    }catch (err) {
        console.log("Error deleting meal ", err)
    }
})
export default router;