import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>

      {/* main content */}
      <div>
        <Outlet></Outlet>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Main;
