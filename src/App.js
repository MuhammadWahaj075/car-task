import "./App.css";
import { useState } from "react";

function App() {
  const [car, setCar] = useState({
    name: "car1",
    brand: "Toyota",
    color: "Red",
    year: 2018,
  });
  const handleClick = () => {
    setCar((previousState) => {
      return {name: "ford", brand: "honda",color: "lemonGreen",  year: 2022,  };
    });
  };

  return (
    <div className="App">
      <h1> {car.name}</h1>
      <h1> {car.brand}</h1>
      <h1> {car.color}</h1>
      <h1> {car.year}</h1>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
