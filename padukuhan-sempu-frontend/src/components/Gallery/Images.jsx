import { useEffect, useState, useContext } from "react";
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
    <main>
      <div className="grid max-w-sm grid-cols-2 md:grid-cols-4 gap-4">
        {dataImages.map((data) => (
          <div key={data.uuid} className="flex flex-col items-center">
            <ImageModal
              title={data.name}
              description={data.description}
              imageUrl={data.url}
              imageId={data.uuid}
            />
            <p className="text-center">{data.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Images;
