import React from "react";

const Loader = () => {
  return (
    <section className="z-[1000] fixed  left-0 h-screen w-screen  bg-black/95 flex justify-center items-center ">
      <section className="grid gap-4">
        {/* imagen de la nuve */}
        <div className="flex justify-center">
          <div>
            <img src="/loader/img01.png" alt="" />
          </div>
        </div>

        {/* texto del loader */}
        <h2 className="text-white text-center efect__loader font-lato">
          Weather app
        </h2>

        {/* Iconos de los climas */}
        <div className="grid  grid-cols-6 rounded-2xl  bg-white justify-around items-center w-[260px] ">
          <div className="bg-black/40 bg-white animate-bg-change1 rounded-tl-lg rounded-bl-lg">
            <img src="/loader/img1.png" alt="" />
          </div>
          <div className="bg-white animate-bg-change2 ">
            <img src="/loader/img2.png" alt="" />
          </div>
          <div className="bg-white animate-bg-change3">
            <img src="/loader/img3.png" alt="" />
          </div>
          <div className="bg-white animate-bg-change4">
            <img src="/loader/img4.png" alt="" />
          </div>
          <div className="bg-white animate-bg-change5">
            <img src="/loader/img5.png" alt="" />
          </div>
          <div className="bg-white animate-bg-change6 rounded-tr-lg rounded-tl-lg">
            <img src="/loader/img6.png" alt="" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Loader;
