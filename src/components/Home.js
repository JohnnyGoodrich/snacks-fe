import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Home = () => {
  const [ingredients, setIngredients] = useState(null);
  const [images, setImages] = useState(null)

  async function getIngredients() {
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.meals);
      setIngredients(data.meals);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getIngredients();
  }, []);

//     addDefaultSrc(e){
//     e.target.src = 'www.themealdb.com/images/ingredients/Lime.png'
//   }

  const tempStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  const loaded = () => {
    return (
      <Container style={tempStyles} >
        {ingredients.map((ingredient, index) => {
          return (
            <Link key={index} to={`/list/${ingredient.strIngredient}`}>
              <Card style={{ width: "18rem", margin: ".5rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} onError={(e) =>
                  ((e.target.src ="https://images.emojiterra.com/twitter/v13.1/512px/1f937-2642.png"))}
                />
                <Card.Body>
                  <Card.Title>{ingredient.strIngredient}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </Container>
    );
  };

  const loading = () => {
    return <p>Loading Ingredients...</p>;
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="titleMargin">Search by ingredient above, or choose an ingredient below:</h3>
        </Col>
      </Row>
      <Row>
        <Col>{ingredients ? loaded() : loading()}</Col>
      </Row>
    </Container>
  );
};

export default Home;
