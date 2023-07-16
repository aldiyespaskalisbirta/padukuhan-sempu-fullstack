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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
          {dataImages.map((data, index) => (
              <ImageModal
                key={index}
                title={data.title}
                description={data.description}
                imageUrl={`http://127.0.0.1:5000/images/${data.image}`}
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