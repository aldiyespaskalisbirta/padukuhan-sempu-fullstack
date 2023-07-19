import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DefaultLayout() {
  return (
    <div className="app relative">
      <Navbar />
      <section className="bg-gray-100">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}
