import { PrismaClient } from '@prisma/client';
import Meal from "../Model/Meal";

const prisma = new PrismaClient();

export async function addMeal(meal:Meal) {
    // if (!meal.name || !meal.area || !meal.instructions || !meal.image || !meal.source) {
    //     throw new Error("you must provide all the fields");
    // }
    try {
        const newMeal = await prisma.meal.create({
            data: {
                name: meal.name,
                area: meal.area,
                instructions: meal.instructions,
                image: meal.image,
                source: meal.source
            }
        });
        console.log("Meal.ts added ", newMeal);
        return newMeal;
    } catch (e) {
        console.log("Error adding meal ", e);
    }
}
export async function getAllMeals(){
    try{
        return await prisma.meal.findMany();
    }catch (e) {
        console.log("Error getting all meals ", e);
    }
}