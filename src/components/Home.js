import { useState, useEffect } from "react"


const Home = () => {
    const [ingredients, setIngredients] = useState(null)

    async function getIngredients() {
        const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.meals)
            setIngredients(data.meals)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getIngredients()
    }, [])

    
    return (
        ingredients ?
            <section className="container">
                {ingredients.map((ingredient, index) => (
                    <div className="ingredient" key={index}>
                        <h3>{ingredient.strIngredient}</h3>
                        <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}/>
                    </div>
                ))
                }
            </section> : <p> Loading...</p>
    )
}


export default Home
