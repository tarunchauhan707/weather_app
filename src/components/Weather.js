'use client'
import {Button} from "@heroui/button";
import {Card, CardBody,CardHeader} from "@heroui/card";
import { Input } from "@heroui/input";
import {Alert} from "@heroui/alert";
import {Spacer} from "@heroui/spacer";
import {Image} from "@heroui/image";

import axios from "axios";
import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found or error with API");
    }
    setLoading(false);
  };
  const getWeatherImage = (weatherCondition) => {
    switch (weatherCondition) {
      case "clear sky":
        return "/images/clear-sky.jpg";
      case "rain":
        return "/images/rain.png";
      case "snow":
        return "/images/snow.jpg";
      case "few clouds":
        return "/images/fewclouds.jpg";
      case "mist":
        return "/images/mist.jpg";
      case "thunderstorm":
        return "/images/thunderstorm.jpg";
      case "shower rain":
        return "/images/showerrain.jpg";
      case "broken clouds":
        return "/images/brokenclouds.jpg";
      default:
        return " ";
    }
  };

  return (
    <div className="p-8 flex justify-center items-center">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[1000px] w-full p-6"
        shadow="lg"
        >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start items-center">
        <h1 className="font-bold text-large">Weather App</h1>
      </CardHeader>
      <CardBody>
        <div className="mb-4">
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            aria-label="City"
          />
        </div>

        <Button onClick={handleSearch} isLoading={loading} color="secondary">
          Get Weather
        </Button>

        {error && (
          <>
            <Spacer y={1} />
            <Alert variant="danger">{error}</Alert>
          </>
        )}

        {weatherData && (
          <Card className="py-4 mt-4 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Weather Info</p>
            <h4 className="font-bold text-large">Current Weather</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h3>{weatherData.name}</h3>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <Image
              alt="Weather Image"
              className="object-cover rounded-xl"
              src={getWeatherImage(weatherData.weather[0].main)}
              width={270}
            />
            {console.log(getWeatherImage(weatherData.weather[0].main))}
            </CardBody>
         </Card>
        )}
      </CardBody>
    </Card>
    </div>
  );
}
