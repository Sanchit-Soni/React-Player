import "./App.css";
import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

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

      <div className="parent">
        <div className="col-1">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              // src="https://image.freepik.com/free-vector/illustration-concept-with-person-relaxing-home_52683-30923.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={() => setPlay("https://youtu.be/YykjpeuMNEk")}>
                play
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              // src="https://image.freepik.com/free-vector/illustration-concept-with-person-relaxing-home_52683-30923.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={() => setPlay("https://youtu.be/AXnqkVTFUqY")}>
                play
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              // src="https://image.freepik.com/free-vector/illustration-concept-with-person-relaxing-home_52683-30923.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={() =>
                  setPlay(
                    "https://youtube.com/playlist?list=PLFD44486C45E50283"
                  )
                }
              >
                play
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-2">
          <div className="player">
            <ReactPlayer
              widht="auto"
              height="480px"
              controls
              url={play || "sad"}
              onReady={() => console.log("ready")}
              onPause={() => console.log("Paused")}
              onEnded={() => console.log("Ended")}
              onStart={() => console.log("Started")}
              onPlay={() => console.log("Played")}
              onSeek={() => console.log("Seeked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
