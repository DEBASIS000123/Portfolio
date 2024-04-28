import "./App.css";
import NavBar from "../Components/NavBar/NavBar.jsx";
import AppstoreProvider from "../Store/AppstoreProvider";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer.jsx";

function App() {
  return (
    <AppstoreProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </AppstoreProvider>
  );
}

export default App;
