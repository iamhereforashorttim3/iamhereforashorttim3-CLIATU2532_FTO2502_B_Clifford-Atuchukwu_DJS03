import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [podcastData, setPodcastData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://podcast-api.netlify.app");
      const data = await response.json();

      setPodcastData(data);
    }
    fetchData();
  }, []);

  return <></>;
}

export default App;
