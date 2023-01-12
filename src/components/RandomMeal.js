import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

// Componenent function.
const RandomMeal = () => {
  // State variables.
  const [refreshPage] = useState(false);
  const [randomMeal, setRandomMeal] = useState(null);

  // Function that refreshes the state, thus re rendering the useEffect.
  const refreshPageFunction = () => {
    refreshPage((current) => !current);
    setTimeout(function () {
      refreshPage((current) => !current);
    }, 1);
  };

  // Fetches API and stores it as json in state at page load.
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setRandomMeal(json);
      })
      .catch(console.error);
  }, []);

  // Conditional return
  return randomMeal ? (
    <>
      {randomMeal.meals.map((randomMealMap, randomMealIdx) => {
        return (
          <div className="random" key={randomMealIdx}>
            <Link
              to={`/details/${randomMealMap.idMeal}`}
              onClick={refreshPageFunction}
            >
              {/* <img height={48} src="https://imgur.com/Qhx44CE.png" />
              <p>Random</p> */}
              <Button variant="light">
                <FontAwesomeIcon icon={faRandom} />
              </Button>
            </Link>
          </div>
        );
      })}
    </>
  ) : (
    <p> </p>
  );
};

export default RandomMeal;
