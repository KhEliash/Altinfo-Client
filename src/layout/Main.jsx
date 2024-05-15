import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
    <div className="container mx-auto">
      {/* navbar */}
      <Navbar></Navbar>

      {/* main content */}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

  
    </div>
        {/* footer */}
        <Footer />
    </div>
  );
};

export default Main;
