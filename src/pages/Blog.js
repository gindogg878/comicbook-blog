import BlogEntry from "../components/BlogEntry";
import Data from "../data";
import { useState } from "react";

export default function Blog() {
  const [data, setData] = useState(Data);

  return (
    <div>
      <BlogEntry data={data} setter={setData} />
    </div>
  );
}
