import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MealList = () => {
  const [data, setData] = useState([]);
  const URL =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  const getMealListData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data.meals);
      setData(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMealListData();
  }, []);

  const tempStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  const loaded = () => {
    return (
      <Container style={tempStyles}>
        {data.map((meal, idx) => {
          return (
            <Card key={idx} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={meal.strMealThumb} />
              <Card.Body>
                <Card.Title>{meal.strMeal}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  };

  const loading = () => {
    return <p>Preparing Meals...</p>;
  };

  return (
    <div>
      <h1>Meal List Page</h1>
      {data ? loaded() : loading()}
    </div>
  );
};

export default MealList;
