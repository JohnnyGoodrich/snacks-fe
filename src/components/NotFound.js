import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Componenent function.
const NotFound = () => 
{

// State variables.
    const [notFound , setNotFound] = useState(null)
    
// Fetches API and stores it as json in state at page load.
  useEffect(() => 
  {
      const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
      fetch(url)
      .then((response) => response.json())
      .then((json) => 
      {
        setNotFound(json)
      })
      .catch(console.error) 
    }, []);

// Conditional return.
  return ( notFound ?
    <div>
      {notFound.meals.map((notFoundMap,notFoundIdx) => 
        {
          return (
            <div className='containerNotFound' key={notFoundIdx}>
              <h1>404 - Not Found</h1>
              <h1>
                <Link className='randomLink' to={`/mealDetails/${notFoundMap.idMeal}`} > Try this Meal suggestion!
                </Link>
              </h1>
            </div>
                )
        })
      } 
    </div>
  :
    <p> loading .. </p>
       )
}

export default NotFound