import "./App.css";
import NavBar from "../Components/NavBar/NavBar.jsx";
import AppstoreProvider from "../Store/AppstoreProvider";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer.jsx";
import SocialLinks from "../Components/SocialLinks.jsx";

function App() {
  return (
    <AppstoreProvider>
      <NavBar />
      <SocialLinks />
      <Outlet />
      <Footer />
    </AppstoreProvider>
  );
}

export default App;
