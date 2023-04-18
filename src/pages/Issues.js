import { useState, useEffect } from "react";
import Form from "../components/Form";
import DataDisplay from "../components/DataDisplay";

export default function Issues() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const hashKey = process.env.REACT_APP_HASH_KEY;
  //   const url = ""; may need to keep url in var
  const [issue, setIssue] = useState(null);
  const getIssue = async (searchTerm) => {
    try {
      if (!searchTerm) {
        setIssue(null);
        return;
      }
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?title=${searchTerm}&ts=1&apikey=${apiKey}&hash=${hashKey}`
      );

      //parse json response into js obj
      const data = await response.json();

      //set the issue state to the issue//
      setIssue(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getIssue();
  }, []);

  return (
    <div>
      <h1>Search Issues</h1>
      <Form datasearch={getIssue} />
      <DataDisplay issue={issue} />
    </div>
  );
}
