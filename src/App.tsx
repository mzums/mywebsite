import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <Button color="primary" onClick={() => setVisible(true)}>
          My Button
        </Button>
      </div>
      {visible ? (
        <div>
          <Alert onClose={() => setVisible(false)}>Hello World</Alert>
        </div>
      ) : null}
    </>
  );
}

export default App;
