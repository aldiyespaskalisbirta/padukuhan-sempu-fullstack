import { Fade, JackInTheBox } from "react-awesome-reveal";

const MapLink = ({ destination }) => {
  const handleClick = () => {
    const url = `https://www.google.com/maps/dir//${destination}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="text-start">
          {/* icon pointer */}
          <div>
            <div className="flex flex-col jusity-center space-y-6">
              <div className="flex jusity-center items-center">
                <JackInTheBox delay={300}>
                  <svg
                    className="w-5 h-5 text-red-600 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  {/* alamat dan no tlpn*/}
                  <div className="flex flex-col ml-2">
                    <button
                      className="font-semibold text-gray-900 text-justify"
                      onClick={handleClick}
                    >
                      Sempu, Pringombo, Rongkop, Gunung Kidul, Yogyakarta
                    </button>
                    <span className="text-gray-600">Event Addres</span>
                  </div>
                </JackInTheBox>
              </div>
              <div className="flex jusity-center items-center">
                <JackInTheBox delay={500}>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 19 18"
                    >
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                    <div className="flex flex-col ml-2">
                      <button className="font-semibold text-gray-900 text-justify">
                        {" "}
                        08757575264628{" "}
                      </button>
                      <span className="text-gray-600">Phone Number</span>
                    </div>
                  </div>
                </JackInTheBox>
              </div>
            </div>
          </div>
        </div>
        {/* map */}
        <Fade cascade delay={300}>
          <div className="flex flex-col justify-center items-center space-y-2 mb-16">
            <iframe
              className="border-2 rounded-md border-sky-500 h-auto sm:h-[50vh] sm:w-[50vh]"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kadus%20Sempu%20Eko,%20VPGQ+24V,%20Sempu,%20Pringombo,%20Kec.%20Rongkop,%20Kabupaten%20Gunung%20Kidul,%20Daerah%20Istimewa%20Yogyakarta%2055883+(Sempu,%20Pringombo,%20Kec.%20Rongkop,%20Kabupaten%20Gunung%20Kidul,%20Daerah%20Istimewa%20Yogyakarta)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <button
              onClick={handleClick}
              className="btn rounded-full p-2 bg-[#80A08D] hover:bg-green-500"
            >
              Lihat Rute di Google Maps
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MapLink;
