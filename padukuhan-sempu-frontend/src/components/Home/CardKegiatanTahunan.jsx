import { useNavigate } from "react-router-dom";
const CardKegiatanTahunan = ({ url, judul, deskripsi }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl ">
        <figure>
          <img className="h-60" src={url} alt={judul} />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{judul}</h1>
          <p className="text-justify line-clamp-3">{deskripsi}</p>
          <div className="card-actions">
            <button
              className="btn bg-[#80A08D]"
              onClick={() => navigate("/budaya")}
            >
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardKegiatanTahunan;
