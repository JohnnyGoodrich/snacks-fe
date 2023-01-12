import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import MealList from "./components/MealList";

function App() {

  return (
    <div className="App">
      <Header />
      <h1>hi</h1>
      <Routes>
        <Route path="/" />
        <Route path="/list" element={<MealList />} />
        <Route path="/details" />
      </Routes>
    </div>
  );
}

export default App;
