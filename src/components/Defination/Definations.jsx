import React from "react";
import "./Definations.css";

function Definations({ word, meanings }) {
  return (
    <div className="meanings">
      {/* {
        // console.log(meanings)
        meanings[0] && word && (
          <audio
            // className="audio"
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            controls
          >
            {console.log(
              "bhvkgjvkhgck",
              meanings[0].phonetics[0] && meanings[0].phonetics[0].audio
            )}
            {console.log("meanings", meanings)}
            Your Browser does not support audio playback
          </audio>
        )
      } */}

      {word === "" ? (
        <span className="subtitle">Start by typing a word</span>
      ) : (
        meanings.map((i) =>
          i.meanings.map((item) =>
            item.definitions.map((def) => (
              <div className="single">
                {/* {console.log("def", def)} */}
                <b>{def.definition}</b>

                {def.example && (
                  <div>
                    <hr style={{ color: "black" }} />
                    <b>Example: </b> {def.example}
                  </div>
                )}
              </div>
            ))
          )
        )
        // "j"
      )}
    </div>
  );
}

export default Definations;
