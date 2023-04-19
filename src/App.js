import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Blog from "./pages/Blog";
import Landing from "./pages/Landing";
import Issues from "./pages/Issues";
import Characters from "./pages/Characters";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/issues/" element={<Issues />} />
        <Route path="/characters/" element={<Characters />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
