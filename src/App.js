import "./App.css";
import React, { useState } from "react";

import ReactPlayer from "react-player";
function App() {
  const [url, setUrl] = useState("a");
  const [play, setPlay] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlay(url);
  };

  return (
    <div className="App">
      <h1>Testing React Player</h1>
      <div className="buttons">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="enter URL"
          ></input>
          <button>Play</button>
        </form>
      </div>
      <br></br>
      <br></br>

      <div className="player">
        <ReactPlayer
          widht="720px"
          height="480px"
          controls
          url={play}
          onReady={() => console.log("ready")}
          onPause={() => console.log("Paused")}
          onEnded={() => console.log("Ended")}
          onStart={() => console.log("Started")}
          onPlay={() => console.log("Played")}
          onSeek={() => console.log("Seeked")}
        />
      </div>
    </div>
  );
}

export default App;
