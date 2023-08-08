import React, { useState } from "react";

const Weather = ({ weatherInfo }) => {
  // Estados
  const [isCelsius, setIsCelsius] = useState(true);

  // Funciones
  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(0);
  };
  const kelvinToFahrenheit = (x) => {
    return (((x - 273.15) * 9) / 5 + 32).toFixed(0);
  };
  const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius);
  };

  // Variable que muestra un resultado dependiendo del estado  "isCelsius"
  const resultConvertion = isCelsius
    ? kelvinToCelsius(weatherInfo?.main.temp)
    : kelvinToFahrenheit(weatherInfo?.main.temp);

  return (
    <section className="grid place-items-center gap-8">
      
      {/* Nonmbre de la ciudad  y el pais*/}
      <h2 className="text-white font-semibold text-2xl">
        {weatherInfo?.name}, {weatherInfo?.sys.country}
      </h2>

      <section className="grid gap-4 sm:grid-cols-[auto_auto]">
        {/* seccion superio */}
        <section className="grid grid-cols-2 items-center bg-white/60 py-4 px-3 rounded-2xl mb-2 opacity-60">
          <h4 className="col-span-2 text-center text-zinc-950 font-lato">
            {weatherInfo?.weather[0].description}
          </h4>
          <span className="text-6xl font-light text-center text-[#050505] ">
            {resultConvertion}°{isCelsius ? "C" : "F"}
          </span>
          <div className="flex justify-center">
            {weatherInfo && (
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`}
                alt=""
              />
            )}
          </div>
        </section>

        {/* seccion inferior */}
        <section className="bg-white/60 p-3 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
          <article className="flex gap-2 items-center justify-center">
            <div className="w-[18px]">
              <img src={"/images/viento.png"} alt="" />
            </div>
            <span className="text-zinc-950">{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className="flex gap-2 items-center justify-center">
            <div className="w-[18px]">
              <img src={"/images/humidity.png"} alt="" />
            </div>
            <span className="text-zinc-950">{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 items-center justify-center">
            <div className="w-[18px]">
              <img src={"/images/pressure.png"} alt="" />
            </div>
            <span className="text-zinc-950">{weatherInfo?.main.pressure}hPa</span>
          </article>
        </section>
      </section>

      <button
        onClick={handleChangeUnitTemp}
        className="bg-white/60 mt-4 bg-white rounded-2xl flex items-center justify-center mx-auto px-4 text-blue-700 font-bold"
      >
        Change to °{isCelsius ? "F" : "C"}
      </button>
    </section>
  );
};

export default Weather;
