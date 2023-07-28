import { Fade, Slide } from "react-awesome-reveal";
import line from "../image/Line.png";
import Card from "../components/Home/CardKegiatanTahunan";
import MapLink from "../components/Home/MapLink";
import { Carousel } from "flowbite-react";
import awan from "../image/awan.png";

const Home = () => {
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
    <main>
      {/* slide */}
      <section className="sticky">
        <div className="md:h-[100vh] h-[60vh] relative">
          <Carousel slideInterval={3000}>
            <img src={Slide1} />
            <img src={Slide2} />
            <img src={Slide3} />
          </Carousel>
        </div>
        <div>
          awan
          <img
            className="top-3/4 lg:top-3/4 absolute h-[20vh] md:h-[40vh] w-screen"
            src={awan}
            alt=""
          />
        </div>
      </div>

      <Fade cascade>
        {/* tentang padukuhan */}
        <div className="flex flex-col sm:flex-row items-center justify-center h-auto p-4 md:mt-16">
          <div className=" text-center">
            <Fade direction="left" delay={300}>
              <div>
                <h4 className="font-sans font-black text-xl w-full">
                  TENTANG PADUKUHAN SEMPU KALURAHAN PRINGOMBO
                </h4>
              </div>
            </Fade>
          </div>
          <hr className="w-80 h-1 mx-auto m-4 bg-gray-900 block sm:hidden"></hr>
          <div className="mr-10 ml-12 hidden sm:block">
            <img className="" src={line} />
          </div>
          <div className="text-center w-[90%] md:w-[50%]">
            <Fade direction="right" delay={300}>
              <p className="font-sans text-justify">
                Padukuhan Sempu adalah sebuah padukuhan yang terletak di
                Kalurahan Pringombo, Kecamatan Rongkop, Kabupaten Gunungkidul,
                di Provinsi Daerah Istimewa Yogyakarta, Indonesia. Kabupaten
                Gunungkidul terletak di bagian selatan Pulau Jawa dan terkenal
                dengan keindahan alamnya, terutama pantai-pantai yang
                menakjubkan. Sempu adalah salah satu dari beberapa padukuhan di
                Kalurahan Pringombo, yang terdiri dari beberapa rumah penduduk.
                Padukuhan ini berada di kawasan pedesaan yang didominasi oleh
                pertanian, terutama penghasilan padi, jagung, dan tanaman
                lainnya.
              </p>
            </Fade>
          </div>
        </div>
        {/* Kegiatan Masyarakat */}
      </Fade>
      <section className="bg-[#B4B8AE] space-y-6 py-6 px-4">
        <Fade delay={300}>
          <div>
            {/* <p className="uppercase font-sans font-black md:text-2xl text-lg mb-10"> */}
            <h4 className="text-center font-sans font-black text-xl w-full border-b-2 md:border-b-0">
              KEGIATAN MASYARAKAT SEMPU
            </h4>
          </div>
        </Fade>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Fade direction="down">
              {/* BUAT TITIK TIGA (...) PAKAI TAILWIND LINE-CLAMP */}
              {/* https://tailwindcss.com/docs/line-clamp */}

              {culture.map((data) => (
                <Card
                  key={data.uuid}
                  url={data.url}
                  judul={data.name}
                  deskripsi={data.description}
                />
              ))}
            </Fade>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <section className="space-y-6 py-6 px-4">
        <Slide>
          <h4 className="font-sans font-black text-xl w-full text-center">
            LOKASI DAN KONTAK
          </h4>
        </Slide>
        <div>
          <MapLink
            destination={
              "Kadus Sempu Eko, VPGQ+24V, Sempu, Pringombo, Kec. Rongkop, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta 55883"
            }
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
