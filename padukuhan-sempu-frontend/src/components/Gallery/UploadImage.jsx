import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div className="mx-2 md:w-2/3 flex flex-col bg-gray-300 rounded-2xl  shadow-2xl px-4 md:px-8">
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
          />
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
        <div className="flex items-center justify-center gap-3">
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
            onClick={() => navigate("/gallery/images")}
            type="button"
            className="submit btn bg-blue-500 text-white font-semibold hover:bg-green-600 w-[100px] h-[50px]"
          >
            kembali
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
