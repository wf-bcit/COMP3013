import { useState } from "react";
import { Child } from "./Child";

export function Input({text, setText}) {
//   const [text, setText] = useState("");

  return (
    <div>
        <h4>{text}</h4>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type Something" type="text" />
        {/* <Child text={text} /> */}
    </div>
  );
}

