import ListGroup from "./components/ListGroup";
import "./App.css";
function App() {
  let items = ["New Delhi", "Berlin", "London", "Rome", "Canberra"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
