import React from 'react';

export const Weather = ({ data }) => {
  if (!data) {
    return (
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  const { name, main, weather } = data;

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex items-center">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt={weather[0].description}
        />
        <p className="text-4xl">{main.temp.toFixed(0)}°F</p>
      </div>
      <p>{weather[0].main}</p>
      <p>
        H: {main.temp_max.toFixed(0)}° L: {main.temp_min.toFixed(0)}°
      </p>
    </div>
  );
};
