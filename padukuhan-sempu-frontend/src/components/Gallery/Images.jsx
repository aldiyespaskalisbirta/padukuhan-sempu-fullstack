import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import axios from "axios";

const Images = () => {
  const [dataImages, setDataImages] = useState([]);

  async function getImages() {
    const response = await axios.get("http://localhost:5000/images");
    setDataImages(response.data);
  }


  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <main>
        {/* Your content */}
        <div className="container">
          <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
            {dataImages?.map((data, index) => (
              <ImageModal
                key={index}
                title={data.name}
                description={data.description}
                imageUrl={data.url}
                imageId={data.id}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Images;