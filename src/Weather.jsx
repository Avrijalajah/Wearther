function Weather({ weather, loading }) {
  if (loading) {
    return (
      <p className="mt-3 text-blue-500 font-semibold animate-pulse">
        Loading...
      </p>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="mt-5 p-6 rounded-2xl bg-gradient-to-br from-blue-400 via-sky-300 to-indigo-500 shadow-lg text-white text-center">
      
      <h2 className="text-2xl font-bold">
        {weather.name}
      </h2>

      <p className="capitalize text-lg opacity-90">
        {weather.weather[0].main}
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />

      <p className="text-4xl font-extrabold">
        {weather.main.temp}°C
      </p>

    </div>
  );
}

export default Weather;