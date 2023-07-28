import { Fade } from "react-awesome-reveal";

const ContentBudaya = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        const isEven = index % 2 === 0;
        const imageOrder = isEven ? "order-first" : "order-last";

        return (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row items-center justify-center mt-8`}
          >
            <div
              className={`w-full p-4 m-2 lg:w-[100vh] flex flex-col justify-center items-center ${
                imageOrder === "order-first" ? "lg:order-2" : ""
              }`}
            >
              <Fade direction="left">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <p className="mb-3 font-base text-gray-700 dark:text-gray-400 text-justify">
                  {item.description}
                </p>
              </Fade>
            </div>
            <Fade direction="right">
              <img
                className={`w-[50vh] object-cover mx-auto rounded-br-[40px] rounded-tl-[40px] lg:w-96 mb-5 ${
                  imageOrder === "order-first" ? "lg:order-1" : ""
                }`}
                src={item.url}
                alt={item.title}
              />
            </Fade>
          </div>
        );
      })}
    </>
  );
};

export default ContentBudaya;
