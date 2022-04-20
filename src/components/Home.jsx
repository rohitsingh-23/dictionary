import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Definations from "./Defination/Definations";
import Header from "./Header/Header";

function Home() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    dictionaryApi();
  }, [word]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeanings(data.data);
    //   console.log("inside", meanings, word);
    } catch (err) {
      console.error(err);
    }
  };
//   console.log("ouside",meanings, word);
  return (
    <div>
      <Container>
        <Header word={word} setWord={setWord} />
        {meanings && <Definations word={word} meanings={meanings} />}
      </Container>
    </div>
  );
}

export default Home;
