"use client";
import Head from "next/head";
import React, { useState } from "react";
import Current from "@/components/Current";
import WeekForecast from "@/components/WeekForecast";
import WeatherDetails from "@/components/WeatherDetails";
import Input from "@/components/Input";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const apiKey = "98f7ba78521d405ebea151602232207";

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-black text-left h-screen mt-[2rem] ml-[5em]">
        <h2 className="text-3xl font-semibold ms-4">
          Welcome to the Weather App
        </h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-black text-center h-screen mt-[2rem] ml-[2em]">
        <h2 className="text-3xl font-semibold mb-4 text-black ">
          City not found
        </h2>
        <p className="text-xl">Please enter a valid city name</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] gap-10">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Head>
          <title>Weather App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <div className="bg-cover  h-fit bg-gradient-to-r from-green-400 to-red-500 hover:from-pink-500 hover:to-yellow-500">
          <div className="bg-white/10 w-full rounded-sm flex flex-col h-fit">
            <div className="ltr me-5 flex flex-col md:flex-row justify-between items-center p-12">
              <Input handleSearch={handleSearch} setLocation={setLocation} />
            </div>
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
