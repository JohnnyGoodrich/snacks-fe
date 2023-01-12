import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const MealList = ({ ingredientName, isSearch }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // URL for Search Bar
  const searchURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`;

  // URL for HomePage
  // const homeURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`;
  const homeURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`;

  const getMealListData = async () => {
    try {
      const response = await fetch(isSearch ? searchURL : homeURL);
      const data = await response.json();
      console.log(data.meals);
      setData(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMealListData();
  }, [isSearch]);

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
            <Link to={`/details/${meal.idMeal}`} key={idx}>
              <Card style={{ width: "18rem", margin: ".5rem" }}>
                <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body>
                  <Card.Title>{meal.strMeal}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </Container>
    );
  };

  const loading = () => {
    return <p>Preparing Meals...</p>;
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Meal List Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>{data ? loaded() : loading()}</Col>
      </Row>
    </Container>
  );
};

export default MealList;
