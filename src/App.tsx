import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Roy's Alert.</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Roy's Button
      </Button>
    </div>
  );
}
export default App;
