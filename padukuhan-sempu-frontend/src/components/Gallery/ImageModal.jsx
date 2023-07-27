import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContextProvider";

const ImageModal = ({ imageUrl, title, description, imageId, role }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { token } = useContext(AuthContext);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteImage = (uuid) => {
    axios
      .delete(`${process.env.BASE_URL}/images/${uuid}`)
      .then(function (response) {
        alert(response.data);
        window.location.reload();
      });
  };

  return (
    <div className="">
      <img
        src={imageUrl}
        alt={title}
        className="cursor-pointer h-auto max-w-full rounded-lg"
        onClick={openModal}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="flex flex-col absolute max-w-2xl mx-auto bg-white p-4 rounded-lg drop-shadow-lg justify-center items-center w-full">
            <img src={imageUrl} alt={title} className="max-h-96" />
            <div className="description pt-5 w-full left-0 relative">
              <h1 className="font-bold text-xl break-words">{title}</h1>
              <p className="text-gray-500 mb-5 max-w-full break-words">
                {description}
              </p>
            </div>
            <div className="action flex gap-5">
              {token && (
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ease-in-out"
                  onClick={() => deleteImage(imageId)}
                >
                  Delete
                </button>
              )}

              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ease-in-out"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
