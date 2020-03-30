import React, { useState } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

const App = () => {
  const [name, setName] = useState("React");

  return (
    <div>
      <Hello name={name} />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};


render(<App />, document.getElementById("root"));
