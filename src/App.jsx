import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    alert(`Введене значення: ${inputValue}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Мій базовий React проєкт</h1>
      <Input placeholder="Введіть текст" onChange={handleInputChange} />
      <Button text="Показати значення" onClick={handleClick} />
    </div>
  );
}

export default App;
