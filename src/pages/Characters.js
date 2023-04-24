import { useState, useEffect } from "react";
import Form from "../components/Form";
import CharDisplay from "../components/CharDisplay";

export default function Characters() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const hashKey = process.env.REACT_APP_HASH_KEY;
  //   const url = ""; may need to keep url in var
  const [characters, setCharacters] = useState([]);
  const getChar = async (searchTerm) => {
    try {
      if (!searchTerm) {
        setCharacters(null);
        return;
      }
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?name=${searchTerm}&ts=1&apikey=${apiKey}&hash=${hashKey}`
      );

      //parse json response into js obj
      const data = await response.json();

      //set the data to characters state //
      setCharacters(data.data.results);
      console.log(characters);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getChar();
  }, []);

  return (
    <div className="char-pg">
      <h1>Search Characters</h1>
      <Form datasearch={getChar} />
      <CharDisplay charSearch={characters} />
    </div>
  );
}
