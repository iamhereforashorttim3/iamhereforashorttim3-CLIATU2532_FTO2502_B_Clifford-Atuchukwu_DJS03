import "./App.css";
import { useState, useEffect } from "react";

fetch("https://podcast-api.netlify.app")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function App() {
  return (
    <>
      <div>
        <h1>This is meant to appear with the list</h1>
        <p></p>
      </div>
    </>
  );
}

export default App;
