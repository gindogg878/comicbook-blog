import { Link } from "react-router-dom";
import "../style.css";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Gino's Blogs</div>
      </Link>
      <Link to="/issues">
        <div>Issues</div>
      </Link>

      <Link to="/characters">
        <div>Characters</div>
      </Link>

      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
}
