import { alpha, Container, styled, Switch } from "@mui/material";
import { grey } from "@mui/material/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Definations from "./Defination/Definations";
import Header from "./Header/Header";
import "./Home.css"

function Home() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [found, setFound] = useState(true)
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    dictionaryApi();
  }, [word]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setFound(true)
      setMeanings(data.data);
    } catch (err) {
      setMeanings([])
      setFound(false)
      console.error(err);
    }
  };
  const ThemeChanger = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: grey[600],
      "&:hover": {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: grey[600],
    },
  }));
  return (
    <div>
      <Container maxWidth="l"
        className={
          lightMode ? "container lightContainer" : "container darkContainer"
        }
      >
        <div className={lightMode ? "light theamSwitch" : "theamSwitch dark"}>
          <span>{lightMode ? "Light Mode" : "Dark Mode"}</span>
          <ThemeChanger
            defaultChecked
            checked={!lightMode}
            onChange={() => {
              setLightMode(!lightMode);
            }}
          />
        </div>
        <Header word={word} setWord={setWord} lightMode={lightMode} />
        {meanings && (
          <Definations
            word={word}
            found={found}
            meanings={meanings}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default Home;
