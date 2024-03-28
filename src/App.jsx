import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Project from "./Components/Project";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Project />
      <SocialLinks />
    </>
  );
}

export default App;
