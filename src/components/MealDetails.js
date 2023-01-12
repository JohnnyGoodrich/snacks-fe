import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import { Link } from "react-router-dom";

function MealDetails(){
    const id = useParams()
    const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id.id}`
    const [drinkDetails, setDrinkDetails]=useState(null)
    useEffect( ()=> {
        fetch(url)
            .then((response)=>response.json())
            .then((json)=> {
                setDrinkDetails(json)
          
        })
            .catch(console.error)
    }, [])
    return (

        drinkDetails ?
        <div>

        </div> :<p>Loading...</p>

      )
      
}
export default MealDetails