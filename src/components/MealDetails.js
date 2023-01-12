import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import { Link } from "react-router-dom";

function MealDetails(){
    const id = useParams()
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.id}`
    const [mealDetails, setMealDetails]=useState(null)
    useEffect( ()=> {
        fetch(url)
            .then((response)=>response.json())
            .then((json)=> {
                setMealDetails(json)
          
        })
            .catch(console.error)
    }, [])
    return (
        mealDetails ?
        <div>
            <h2>{mealDetails.meals[0].strMeal}</h2>
            <img src={mealDetails.meals[0].strMealThumb} height="300px"/>

            <div>
                    <p>{mealDetails.meals[0].strMeasure1}  {mealDetails.meals[0].strIngredient1}</p>  
                    <p>{mealDetails.meals[0].strMeasure2} {mealDetails.meals[0].strIngredient2}</p>  
                    <p>{mealDetails.meals[0].strMeasure3} {mealDetails.meals[0].strIngredient3}</p>  
                    <p>{mealDetails.meals[0].strMeasure4} {mealDetails.meals[0].strIngredient4}</p>  
                    <p>{mealDetails.meals[0].strMeasure5} {mealDetails.meals[0].strIngredient5}</p>  
                    <p>{mealDetails.meals[0].strMeasure6} {mealDetails.meals[0].strIngredient6}</p>  
                    <p>{mealDetails.meals[0].strMeasure7} {mealDetails.meals[0].strIngredient7}</p>  
                    <p>{mealDetails.meals[0].strMeasure8} {mealDetails.meals[0].strIngredient8}</p>  
                    <p>{mealDetails.meals[0].strMeasure9} {mealDetails.meals[0].strIngredient9}</p>  
                    <p>{mealDetails.meals[0].strMeasure10} {mealDetails.meals[0].strIngredient10}</p>  
            </div>
            <div>
                <h3>Instructions:</h3>
                <p>{mealDetails.meals[0].strInstructions}</p>
            </div>
        </div> : <p>Loading...</p>
)
      
}
export default MealDetails