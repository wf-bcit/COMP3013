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
      {/* <Input text={text} setText={setText} />
      <Input text={text} setText={setText} /> */}
      {/* <Input /> */}
    </div>
  );
}

export default App;