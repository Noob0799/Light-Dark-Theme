import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import About from "./pages/About.js";
import Error from "./pages/Error.js";
import Navbar from "./components/Navbar.js";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const appTheme = localStorage.getItem("theme");

    if (!appTheme) {
      localStorage.setItem("theme", theme);
    } else {
      setTheme(appTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    let newTheme = "light",
      sliderStyle = "toggle-slider-right",
      $toggleSlider = document.querySelector(".toggle-slider");

    $toggleSlider.classList.remove("toggle-slider-left", "toggle-slider-right");
    if (theme === "light") {
      newTheme = "dark";
      sliderStyle = "toggle-slider-right";
    } else {
      newTheme = "light";
      sliderStyle = "toggle-slider-left";
    }
    $toggleSlider.classList.add(sliderStyle);
    setTheme(newTheme);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar theme={theme} changeTheme={handleToggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
