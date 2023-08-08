import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";
import Maps from "./components/Maps";

function App() {
  // Estados
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pais, setPais] = useState(null)

  // objeto con las rutas de los fondos dependientes del clima
  const backgroundWeather = {
    "01n": "bg-[url('/background/bg01-cieloDespejado-noche.jpg')]",
    "02n": "bg-[url('/background/bg03-pocasNubes-noche.jpg')]",
    "09n": "bg-[url('/background/bg02-lluvia-noche.jpg')]",
    "04n": "bg-[url('/background/bg04-ventoso-noche.gif')]",
    "11n": "bg-[url('/background/bg05-formentaElectrica-noche.jpg')]",
    "13n": "bg-[url('/background/bg06-nieve-noche.jpg')]",
    "03n": "bg-[url('/background/bg09-probablementeNubaldo-noche.jpg')]",
    "10n": "bg-[url('/background/bg08-aguacero-noche.jpg')]",
    "50n": "bg-[url('/background/bg07-mayormenteNublado-noche.jpg')]",
    "01d": "bg-[url('/background/bg01-cieloDespejado.jpg')]",
    "09d": "bg-[url('/background/bg02-lluvia.jpg')]",
    "02d": "bg-[url('/background/bg03-pocasNubes.jpg')]",
    "04d": "bg-[url('/background/bg04-ventoso.jpg')]",
    "11d": "bg-[url('/background/bg05-formentaElectrica.jpg')]",
    "13d": "bg-[url('/background/bg06-nieve.jpg')]",
    "03d": "bg-[url('/background/bg09-probablementeNubaldo.jpg')]",
    "10d": "bg-[url('/background/bg08-aguacero.jpg')]",
    "50d": "bg-[url('/background/bg07-mayormenteNublado.jpg')]",
  };

  //Funciones para manejar los endPoints
  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const APY_KEY = "c54aa9f645fa1212c106954d1048b71c";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APY_KEY}`;
    axios
      .get(url)
      .then(({ data }) => {
        setWeatherInfo(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSusbmitCountry = (e) => {
    e.preventDefault();
    const country = e.target.idCountry.value;
    const APY_KEY = "c54aa9f645fa1212c106954d1048b71c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${APY_KEY}`;
    const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${country}&appid=${APY_KEY}`;
    axios
      .get(url)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
   

    axios
      .get(url1)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
     e.target.reset();

  };
  
  // Efecto para manejar la geolicalizacion del usuario
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     setIsLoading(false);
  //     return window.removeEventListener("load", () => {});
  //   });
  // }, []);

  return (
    <main
      className={`  bg-cover bg-center min-h-screen grid flex-col items-center justify-center px-4 
      ${backgroundWeather[weatherInfo?.weather[0].icon]}`}
    >
      {isLoading && <Loader />}
      <form
        onSubmit={handleSusbmitCountry}
        className="flex rounded-md overflow-hidden max-w-max mx-auto"
      >
        <input
          id="idCountry"
          placeholder="Type your city..."
          className="text-black p-2 text-center font-lato"
          type="text"
        />
        <button className="bg-yellow-500 px-4 font-lato">Search</button>
      </form>

      <Weather weatherInfo={weatherInfo} />

      {weatherInfo && (
        <Maps
          lat={weatherInfo?.coord.lat}
          lon={weatherInfo?.coord.lon}
          city={weatherInfo?.name}
        />
      )}
    </main>
  );
}

export default App;
