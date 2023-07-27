import React, { useEffect, useState } from "react";
import ContentBudaya from "../components/Budaya/contentBudaya";
import axios from "axios";

const Budaya = () => {

  const [culture, setCulture] = useState([]);
  const [error, setError] = useState("");
  async function getCulture() {
    try {
      const response = await axios.get("http://localhost:5000/culture");
      setCulture(response.data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getCulture();
  }, []);

  return (
    <main className="">
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <p className="mb-8 text-lg font-black text-gray-100 lg:text-xl sm:px-16 lg:px-48 uppercase">
            Kegiatan masyarakat sempu
          </p>
        </div>
      </section>
      {/* KONTEN */}
      <div className="">
        <ContentBudaya data={culture} />
      </div>
    </main>
  );
};

export default Budaya;
