import React from "react";
import "./Definations.css";

function Definations({ word, meanings, found }) {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subtitle">Start by typing a word</span>
      ) : !found ? (
        <span className="subtitle">Not Found</span>
      ) : (
        <div>
          <div>
            <audio controls id="voice">
              <source
                src={ meanings[0] && meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                type="audio/mp3"
              />
              Your browser does not support the audio tag.
            </audio>
          </div>
          {meanings.map((i) =>
            i.meanings.map((item) =>
              item.definitions.map((def) => (
                <div className="single">
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
          )}
        </div>
        // "j"
      )}
    </div>
  );
}

export default Definations;
