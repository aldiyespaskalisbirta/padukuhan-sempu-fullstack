import { useEffect, useState, useContext } from "react";
import ImageModal from "./ImageModal";
import axios from "axios";
import { AuthContext } from "../../contex/authContextProvider";

const Images = () => {
  const [dataImages, setDataImages] = useState([]);

  async function getImages() {
    const response = await axios.get("http://localhost:5000/images");
    setDataImages(response.data);
  }

  useEffect(() => {
    getImages();
  }, []);

  const { currentUser } = useContext(AuthContext);

  return (
    <main>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dataImages.map((data, index) => (
          <div key={index} className="flex flex-col items-center">
            <ImageModal
              title={data.title}
              description={data.description}
              imageUrl={data.url}
              imageId={data.id}
              role={currentUser.role}
            />
            <p className="text-center">{data.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Images;
