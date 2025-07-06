import "./App.css";
import React, { useState, useEffect } from "react";
import { genres } from "./Components/data.js";
import PodcastPreviews from "./Components/podcastPreview.jsx";
import { formatDistanceToNow } from "date-fns";

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

  const getGenres = (genreIds) => {
    return genreIds.map((id) => {
      const found = genres.find((genre) => genre.id === id);
      return found ? found.title : "Unknown";
    });
  };

  return (
    <div>
      {podcastData.map((podcast) => (
        <PodcastPreviews
          key={podcast.id}
          podcasts={{
            img: podcast.image,
            title: podcast.title,
            description: podcast.description,
            seasons: podcast.seasons,
            genres: getGenres(podcast.genres),
            updated: formatDistanceToNow(new Date(podcast.updated), {
              addSuffix: true,
            }),
          }}
        />
      ))}
    </div>
  );
}

export default App;
