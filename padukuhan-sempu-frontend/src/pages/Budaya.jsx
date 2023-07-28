import { useEffect, useState } from "react";
import ContentBudaya from "../components/Budaya/contentBudaya";
import axios from "axios";

const Budaya = () => {
  // const data = [
  //   {
  //     judul: "Rasulan",
  //     gambar:
  //       "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770",
  //     deskripsi: `Di Padukuhan Sempu, Kalurahan Pringombo, Kapanewon Rongkop, Kabupaten Gunungkidul, ada tradisi Bersih Dusun yang dilaksanakan setiap tahun. Tradisi ini mencakup berbagai kegiatan seperti kenduri, pengiriman sesaji, dan pertunjukan seni tradisional seperti wayang, khetoprak, jathilan, dan tari-tarian. Sebelum kenduri dilaksanakan, warga melakukan kirap budaya adat tradisi memetri bumi. Upacara adat ini memiliki tujuan membersihkan roh-roh jahat yang dianggap mengganggu. Bersih Dusun dihadiri oleh Bupati Gunungkidul dan Panewu Rongkop, dengan harapan menjaga kerukunan dan melestarikan tradisi Jawa.
  //     Tradisi Bersih Dusun memiliki makna spiritual, yakni ungkapan syukur kepada Tuhan atas hasil panen yang diperoleh. Selain itu, upacara ini juga dimaksudkan untuk memohon perlindungan dari hal-hal negatif dalam kehidupan sehari-hari.
  //     Dengan demikian, Bersih Dusun merupakan sebuah upacara adat yang melibatkan kenduri, pengiriman sesaji, dan pertunjukan seni tradisional. Tujuan utamanya adalah menyampaikan rasa syukur kepada Tuhan atas hasil panen dan memohon perlindungan dari hal-hal negatif dalam kehidupan sehari-hari.`,
  //   },
  //   {
  //     judul: "Gumbregan",
  //     gambar:
  //       "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770",
  //     deskripsi: `Sand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
  //   },
  //   {
  //     judul: "Kenduri",
  //     gambar:
  //       "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770",
  //     deskripsi: `Sand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
  //   },
  //   {
  //     judul: "Kirab Budaya",
  //     gambar:
  //       "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770",
  //     deskripsi: `Sand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
  //   },
  // ];

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
    <main className="budaya">
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <p className="mb-8 text-lg font-black text-gray-100 lg:text-xl sm:px-16 lg:px-48 uppercase">
            Kegiatan masyarakat sempu
          </p>
        </div>
      </section>
      {/* KONTEN */}

      {/* kenduri */}
      <div className="">
        <ContentBudaya data={culture} />
      </section>
    </main>
  );
};

export default Budaya;
