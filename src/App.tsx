import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/tsx/Header";
import HomeSection from "./components/tsx/HomeSection";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
        <HomeSection />
      </div>
    </>
  );
}

export default App;
