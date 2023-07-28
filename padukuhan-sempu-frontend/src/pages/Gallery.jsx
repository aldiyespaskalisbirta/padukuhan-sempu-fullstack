import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContextProvider";

const Gallery = () => {
  const { token } = useContext(AuthContext);
  const isLoggedIn = token;

  return (
    <div className="pt-10 md:pt-16">
      <div className="flex justify-between text-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold tracking-tight text-[#424242]">
          GALLERY FOTO
        </h1>

        {isLoggedIn && (
          <Link
            to="/gallery/add-image"
            className="hover:bg-gray-50 text-gray-900 font-semibold shadow rounded px-4 py-2 my-auto text-center"
          >
            add image
          </Link>
        )}
      </div>
      <main className="min-h-screen">
        <div className="flex justify-center items-center mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Gallery;
