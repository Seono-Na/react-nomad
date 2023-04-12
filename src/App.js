
import { useState, useEffect } from "react";

function Hello() {
  const destroydFn = () => {
    console.log("destroy..")
  }
  const Hellofn = () => {
    console.log("create Hello!")
    return destroydFn
  }
  useEffect(Hellofn, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello></Hello> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
