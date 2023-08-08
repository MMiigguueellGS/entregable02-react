import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";
import Maps from "./components/Maps";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const backgroundWeather = {
    "01n": "bg-[url('/background/bg01-cieloDespejado.jpg')]",
    "02n": "bg-[url('/background/bg03-pocasNubes.jpg')]",
    "09n": "bg-[url('/background/bg02-lluvia.jpg')]",
    "04n": "bg-[url('/background/bg04-ventoso.jpg')]",
    "11n": "bg-[url('/background/bg05-formentaElectrica.jpg')]",
    "13n": "bg-[url('/background/bg06-nieve.jpg')]",
    "03n": "bg-[url('/background/bg09-probablementeNubaldo.jpg')]",
    "10n": "bg-[url('/background/bg08-aguacero.jpg')]",
    "50n": "bg-[url('/background/bg07-mayormenteNublado.jpg')]",
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

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const APY_KEY = "c54aa9f645fa1212c106954d1048b71c";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APY_KEY}`;
    axios
      .get(url)
      .then(({ data }) => {
        setWeatherInfo(data);
        //setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSusbmitCountry = (e) => {
    e.preventDefault();
    const country = e.target.idCountry.value;
    const APY_KEY = "c54aa9f645fa1212c106954d1048b71c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${APY_KEY}`;
    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
      return window.removeEventListener("load", () => {});
    });
  }, []);

  return (
    <main
      className={`  bg-cover bg-center min-h-screen lightgra flex flex-col justify-evenly items-center px-4 
      ${backgroundWeather[weatherInfo?.weather[0].icon]}`}
    >
      {isLoading && <Loader />}

      <form
        onSubmit={handleSusbmitCountry}
        className="flex rounded-md overflow-hidden max-w-max mx-auto"
      >
        <input
          id="idCountry"
          placeholder="Type your country..."
          className="text-black p-2 text-center"
          type="text"
        />
        <button className="bg-yellow-500 px-4">Search</button>
      </form>

      <Weather weatherInfo={weatherInfo} />

      {weatherInfo && (
        <Maps lat={weatherInfo?.coord.lat} lon={weatherInfo?.coord.lon} />
      )}
    </main>
  );
}

export default App;