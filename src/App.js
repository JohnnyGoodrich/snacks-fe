import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home.js";
import MealList from "./components/MealList.js";
import MealDetails from "./components/MealDetails.js";
import RandomMeal from "./components/RandomMeal";
import NotFound from "./components/NotFound";

function App() {
  const [searchBarItem, setSearchBarItem] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  // Event handler for setting the search bar input to an event and saving that event to state.
  const handleItemChange = (e) => {
    const newSearchItem = e.target.value;
    setSearchBarItem(newSearchItem);
  };

  // Function to change state and reset state to false after click search by name.
  const onClick = () => {
    setIsSearch((current) => !current);
    if (setIsSearch) {
      setTimeout(function () {
        setIsSearch((current) => !current);
      }, 1);
    } else {
    }
  };

  return (
    <div className="App">
      <div className="searchBar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <RandomMeal />
        <input
          type="text"
          id="myInput"
          value={searchBarItem}
          onChange={handleItemChange}
          placeholder="Search.."
        />
        <Link to={`/list/${searchBarItem}`}>
          <button onClick={onClick} className="searchName">
            {" "}
            by ingredient{" "}
          </button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:id" element={ <MealList ingredientName={searchBarItem} isSearch={isSearch} />} />
        <Route path="/details/:id" element={<MealDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
