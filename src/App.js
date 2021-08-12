import { useState } from "react";
import "./styles.css";

const flagsDictionary = {
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇦🇺": "Australia",
  "🇦🇷": "Argentina",
  "🇦🇿": "Azerbaijan",
  "🇧🇴": "bolivia",
  "🇨🇦": "Canada",
  "🇮🇳": "India",
  "🇺🇸": "United States of America",
  "🇻🇳": "Vietnam",
  "🇿🇦": "South Africa",
  "🇵🇱": "Poland",
  "🇬🇧": "United Kingdom"
};

var flagsWeKnow = Object.keys(flagsDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function flagsInputHandler(event) {
    var userInput = event.target.value;

    var meaning = flagsDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Oops! this flag is not available in our database";
    }
    setMeaning(meaning);
  }

  function flagsClickHandler(flag) {
    var meaning = flagsDictionary[flag];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        flag<span style={{ color: "blue" }}>finder</span>
      </h1>
      <input
        placeholder="Paste flag here to identify the country it belongs to"
        style={{
          width: "40rem",
          height: "3rem",
          border: "1px solid black",
          marginTop: "5rem"
        }}
        onChange={flagsInputHandler}
      />

      <h2>{meaning}</h2>
      <h3 style={{ marginTop: "5rem" }}>flags we know</h3>
      {flagsWeKnow.map(function (flag) {
        return (
          <span
            onClick={() => flagsClickHandler(flag)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={flag}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
