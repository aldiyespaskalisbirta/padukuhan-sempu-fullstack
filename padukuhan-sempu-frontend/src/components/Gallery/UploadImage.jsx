import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { AuthContext } from "../../contex/authContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadImage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [imagePath, setImagePath] = useState("");

  const navigate = useNavigate();

  
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("imagePath", imagePath);

    try {
      await axios.post("http://localhost:5000/images", formData, {
        "Content-type": "multipart/form-data",
      });
      navigate("../images");
    } catch (err) {
      setMessage(err);
      alert(message);
    }
  };
  async function handleSubmit(e) {
    e.preventDefault();
    await uploadImage();
  }

  function loadImage(e) {
    const image = e.target.files[0];
    setImagePath(image);
  }

  return (
    <div className="w-2/3 flex flex-col bg-gray-300 rounded-2xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="w-full justify-start font-semibold">
            Judul gambar
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input w-full"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="w-full justify-start font-semibold"
          >
            Deskripsi Gambar
          </label>
          <textarea
            name="description"
            id="description"
            cols="10"
            rows="5"
            className="textarea text-wrap w-full resize-none relative"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="w-full justify-start font-semibold">
            Gambar
          </label>
          <input
            type="file"
            name="imagePath"
            id="imagePath"
            className="w-full bg-white rounded-md"
            onChange={loadImage}
          />
        </div>
        <div className="flex md:flex-row items-center justify-center gap-3 flex-col">
          <button
            type="submit"
            className="submit btn bg-green-500 text-white font-semibold hover:bg-green-600 w-[100px] h-[50px]"
          >
            Tambahkan
          </button>
          <button
            type="reset"
            className="submit btn bg-green-500 text-white font-semibold hover:bg-green-600 w-[100px] h-[50px]"
          >
            RESET
          </button>
          <button
            onClick={() => (window.location.href = "/gallery/images")}
            type="button"
            className="submit btn bg-green-500 text-white font-semibold hover:bg-green-600 w-[100px] h-[50px]"
          >
            kembali
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
