import BlogEntry from "../components/BlogEntry";
import Data from "../data";
import { useState } from "react";
import "../style.css";

export default function Blog({ commentState, dispatch }) {
  const [data, setData] = useState(Data);

  return (
    <div>
      {data.map((entry) => {
        return (
          <div className="blogpost">
            <h1>{entry.title}</h1>
            <img src={entry.img} alt="battleSceneImg" />
            <h4>Posted on: {entry.date}</h4>
            <p>{entry.text}</p>
            <BlogEntry commentState={commentState} dispatch={dispatch} />
          </div>
        );
      })}
    </div>
    // <div>
    //   <BlogEntry data={data} setter={setData} />
    // </div>
  );
}
