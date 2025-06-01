import React from 'react';

const MainInfo = ({ wheather, error }) => {
  let photo;

  if (error) {
    return (
      <div key="error" className="w-[80%] h-[60%] flex flex-col items-center justify-center gap-4">
        <img src="/photos/404.png" className="w-[60%] h-[70%] transition-transform duration-700 ease-in-out transform hover:scale-105" />
        <p className="text-amber-50 font-bold text-4xl">
          ooops ! city not found
        </p>
      </div>
    );
  }

  if (!wheather || !wheather.current || !wheather.location) {
    return <p className="text-white">Enter a city please .....</p>;
  }

  const { temperature, weather_descriptions, weather_icons } = wheather.current;
  const { name, country } = wheather.location;

  const description = weather_descriptions[0].toLowerCase();

  if (description.includes("rain")) {
    photo = "/photos/rain.png";
  } else if (description.includes("cloud")) {
    photo = "/photos/cloud.png";
  } else if (description.includes("sunny") || description.includes("clear")) {
    photo = "/photos/clear.png";
  } else {
    photo = weather_icons[0];
  }

  return (
    <div key={name} className="w-[80%] h-[60%] flex flex-col items-center justify-center gap-4">
      <img src={photo} className="w-[60%] h-[70%] ease-in" alt="Weather icon" />
      <p className="text-amber-50 font-bold text-4xl">
        {name}, {country}
      </p>
      <p className="text-amber-50 font-light text-lg text-center">
        {temperature}°C - {weather_descriptions[0]}
      </p>
    </div>
  );
};

export default MainInfo;
