import axios from "axios";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useState, useEffect } from "react";
import "./App.css";
import NasaMedia from "./components/NasaMedia";
import Title from "./components/Title";

function App() {
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [date, setDate] = useState("2021-07-14");

  dayjs.extend(customParseFormat);
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=bIUvX7E3fljMaeRzCp0Fp8HhHbLtIXnFJmTAE3p6&date=${date}`)
    .then(res => {
      setMediaUrl(res.data.url);
      setDate(res.data.date);
      setMediaType(res.data.media_type);
    })
    .catch(err => console.log(err));
  }, [date]);

  const decDate = () => {
    const day = dayjs(date, 'YYYY-MM-DD');
    const dayMinusOne = day.subtract(1, 'day');
    const newDate = dayMinusOne.format('YYYY-MM-DD');
    setDate(newDate);
  };

  const incDate = () => {
    const day = dayjs(date, 'YYYY-MM-DD');
    const now = dayjs();

    if (day.add(1, 'day').isBefore(now)) {
      const dayPlusOne = day.add(1, 'day');
      const newDate = dayPlusOne.format('YYYY-MM-DD');
      setDate(newDate);
    } else {
      alert("You can't travel into the future");
    }
  };

  return (
    <div className="App">
      <Title date={date} decDate={decDate} incDate={incDate} />
      <NasaMedia url={mediaUrl} type={mediaType} />
    </div>
  );
}

export default App;
