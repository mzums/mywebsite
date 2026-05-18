import ListGroup from './components/ListGroup';

function App() {
  let items = ["a", "b", "c", "d", "e"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading="abc" onSelectItem={handleSelectItem} /></div>
}

export default App;