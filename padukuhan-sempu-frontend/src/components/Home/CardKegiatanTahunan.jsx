import { useNavigate } from "react-router-dom";
const CardKegiatanTahunan = ({ url, judul, deskripsi }) => {
<<<<<<< HEAD
    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl ">
                <figure><img src={url} alt="kegiatan tahunan" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{judul}</h2>
                    <p className="text-justify">{deskripsi}</p>
                    <div className="card-actions">
                        <button className="btn bg-[#80A08D]" onClick={() => window.location.href = '/budaya'}>Baca Selengkapnya</button>
                    </div>
                </div>
            </div>
        </>
    )
}
=======
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
>>>>>>> 0b087268effc4ef26282159fad5972dfcddf21ce

export default CardKegiatanTahunan;
