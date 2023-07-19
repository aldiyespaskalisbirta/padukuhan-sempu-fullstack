"use client";
import { Fade, Slide } from "react-awesome-reveal";
import line from "../image/Line.png";
import Card from "../components/Home/CardKegiatanTahunan";
import MapLink from "../components/Home/MapLink";
import { Carousel } from "flowbite-react";
import awan from "../image/awan.png";

const Home = () => {
  return (
    <main>
      {/* slide */}
      <div className="sticky">
        <div className="md:h-[100vh] h-[60vh] relative">
          <Carousel slideInterval={3000}>
            <img src="https://scontent.fsrg6-1.fna.fbcdn.net/v/t39.30808-6/353807308_2230421623834378_1964256921282244413_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGo0vYEBw4-sRrPTOCiSsB1DUglFndXty0NSCUWd1e3LQktXgbK-TmqmLg_gbIYKY1MOXNd4zuwsa6VYipVqTql&_nc_ohc=l5G5GIOUqnoAX8KvTme&_nc_ht=scontent.fsrg6-1.fna&oh=00_AfAKHukYO7vj8GK2w_QMQbARm9l47KzYQ5kr0JKOlxux1w&oe=64B51DD7" />
            <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/352176188_1477494953024570_508954860456811740_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHWfSunNarHHZ6fb2t1daxW_cwBZz3all79zAFnPdqWXp-WnboeJt3ja0nw95OE5KuWAwYTDtZ4GwLPdXT-UUM9&_nc_ohc=_M7gr0hS6hgAX-j1RPy&_nc_ht=scontent-xsp1-3.xx&oh=00_AfC132ylkwEVq7VX5IKIscWuRIuMQgOk8N9GK4kDsX3_MA&oe=64BB335F" />
            <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t31.18172-8/18920926_1968890720011527_3968093283761144001_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFJJrDFaSXjUhUCv-6zuJNXJI43RhKnvEYkjjdGEqe8RnSmwgn3R3L0_fbyveBsDfxXCwdCYF7ubW9zWPoRspTO&_nc_ohc=XoaqGDAd0kcAX_cxbpl&_nc_ht=scontent-xsp1-2.xx&oh=00_AfDjgroAv8T9lHI8xTBIjKGtqDy8x9Dd0RZkABBeb5LlyA&oe=64DCA675" />
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
          <div className=" text-center w-[30%]">
            <Fade direction="left" delay={300}>
              <div className="font-sans font-black text-lg md:text-xl w-full ">
                <p> TENTANG PADUKUHAN </p>
                <hr />
                <p>SEMPU KALURAHAN</p>
                <hr />
                <p>PRINGOMBO</p>
              </div>
            </Fade>
          </div>
          <hr className="w-80 h-1 mx-auto m-4 bg-gray-900 block sm:hidden"></hr>
          <div className="mr-10 ml-12 hidden sm:block">
            <img className="" src={line} />
          </div>
          <div className="text-center w-[90%] md:w-[50%]">
            <Fade direction="right" delay={300}>
              <p className="font-sans ">
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
      <div className="bg-[#B4B8AE] pt-16 pb-16">
        <Fade delay={300}>
          <div className="text-center">
            <p className="uppercase font-sans font-black md:text-2xl text-lg mb-10">
              Kegiatan masyarakat sempu
            </p>
          </div>
        </Fade>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Fade direction="down">
              <Card
                url={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}
                judul={"Rasulan"}
                deskripsi={
                  "Di Padukuhan Sempu, Kalurahan Pringombo, Kapanewon Rongkop, Kabupaten Gunungkidul, ada tradisi Bersih Dusun yang dilaksanakan setiap tahun. Tradisi ini mencakup berbagai kegiatan seperti kenduri, pengiriman sesaji, dan pertunjukan seni tradisional..."
                }
              />
              <Card
                url={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}
                judul={"Gumbregan"}
                deskripsi={
                  "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                }
              />
              <Card
                url={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}
                judul={"Kenduri"}
                deskripsi={
                  "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                }
              />
              <Card
                url={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}
                judul={"Kirab Budaya"}
                deskripsi={
                  "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                }
              />
            </Fade>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="text-center mt-16 mr-16 ">
        <div>
          <Slide>
            <p className="font-sans font-black md:text-2xl text-base mb-10 uppercase">
              lokasi dan kontak
            </p>
          </Slide>
        </div>
        <div>
          <MapLink
            destination={
              "Kadus Sempu Eko, VPGQ+24V, Sempu, Pringombo, Kec. Rongkop, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta 55883"
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
