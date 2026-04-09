import { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "093c0046005a9d9dcdfe763bb3895e64";

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      alert("Kota gak ketemu");
      setWeather(null);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex justify-center items-center">
      
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl w-80 text-center">

        <h1 className="text-2xl font-bold mb-4 text-gray-800">
           Weather App
        </h1>

        <input
          type="text"
          placeholder="Masukkan kota..."
          className="border p-2 w-full rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />

        <button
          onClick={getWeather}
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg w-full"
        >
          Cari
        </button>

        {/* panggil component */}
        <Weather weather={weather} loading={loading} />

      </div>
    </div>
  );
}

export default App;