import { useState } from "react";
import "./App.css";
import { Input } from "./Input";
import { ListGroup } from "./ListGroup";

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Hello Homepage</h1>
      <ListGroup />
    </div>
  );
}

export default App;