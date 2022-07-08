import "./styles.css";
import { useState } from "react";
import Axios from "axios";

export default function App() {
  const [artist, setartist] = useState("");
  const [song, setsong] = useState("");
  const [lyrics, setlyrics] = useState("");

  function searchlyrics() {
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      setlyrics(res.data.lyrics);
    });
  }

  return (
    <div className="App">
      <h1>Lyrics Finder</h1>
      <input
        onChange={(e) => {
          setartist(e.target.value);
        }}
        type="text"
        placeholder="Artist name"
      ></input>
      <input
        onChange={(e) => {
          setsong(e.target.value);
        }}
        type="text"
        placeholder="Song name"
      ></input>
      <button onClick={() => searchlyrics()}>search</button>
      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
}
