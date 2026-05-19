import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [inputValue, setInputValue] = useState('');

  const [items, setItems] = useState<string[]>([
    "apple",
    "banana",
    "orange",
  ]);

  const handleDelete = (idxToDelete: number) => {
    setItems(items.filter((_, idx) => idx !== idxToDelete));
  };

  const handleAdd = (inputValue: string) => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleSelectItem = (item: string) => {
    console.log("Selected:", item);
  };

  const handleEditItem = (index: number, newValue: string) => {
    const updated = [...items];
    updated[index] = newValue;
    setItems(updated);
  };

  return (
    <>
      <List
        items={items}
        onDelete={handleDelete}
        onSelectItem={handleSelectItem}
        onEditItem={handleEditItem}
      />
      <input
        name="myInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAdd(inputValue);
          }
        }}
      />
      <Button children="+" onClick={() => handleAdd(inputValue)}></Button >
    </>
  );
}

export default App; 