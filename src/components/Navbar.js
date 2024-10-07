import { Link } from "react-router-dom";

function Navbar({ theme, changeTheme }) {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <button className="toggle-btn">
          <div
            className={`toggle-slider ${
              theme === "light" ? "toggle-slider-left" : "toggle-slider-right"
            }`}
            onClick={changeTheme}
          ></div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
