import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import NasaMedia from "./components/NasaMedia";
import Title from "./components/Title";

function App() {
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=bIUvX7E3fljMaeRzCp0Fp8HhHbLtIXnFJmTAE3p6&date=2021-07-14")
    .then(res => {
      setMediaUrl(res.data.url);
      setDate(res.data.date);
      setMediaType(res.data.media_type);
    })
    .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Title date={date} />
      <NasaMedia url={mediaUrl} type={mediaType} />
    </div>
  );
}

export default App;
