import List from "./components/List";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState<string[]>([
    "apple",
    "banana",
    "orange",
  ]);

  const handleDelete = (itemToDelete: string) => {
    setItems(items.filter((item) => item !== itemToDelete));
  };

  return (
    <>
      <List items={items} onDelete={handleDelete} />
    </>
  );
}

export default App;