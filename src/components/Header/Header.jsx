import { createTheme, TextField, ThemeProvider} from "@mui/material";
import React from "react";
import "./Header.css";

function Header({ word, setWord }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">{word ? word : "Search"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            label="Search a word..."
            variant="standard"
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
