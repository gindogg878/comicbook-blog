import { Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";
import commentReducer from "./reducer/commentReducer";
import "./App.css";
import Nav from "./components/Nav";
import Blog from "./pages/Blog";
import Issues from "./pages/Issues";
import Characters from "./pages/Characters";
import About from "./pages/About";

function App() {
  const [commentState, dispatch] = useReducer(commentReducer, []);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    console.log(savedComments);
    if (
      savedComments &&
      savedComments !== "undefined" &&
      savedComments !== "null"
    ) {
      dispatch({ type: "setComments", payload: JSON.parse(savedComments) });
    }
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Blog commentState={commentState} dispatch={dispatch} />}
        />
        <Route path="/issues/" element={<Issues />} />
        <Route path="/characters/" element={<Characters />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
