import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked!")}>
        Roy's Button
      </Button>
    </div>
  );
}
export default App;
