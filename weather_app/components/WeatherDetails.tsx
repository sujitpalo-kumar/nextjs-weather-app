interface WeatherDetailsProps {
  data: {
    current?: {
      humidity: number;
      pressure_mb: number;
    };
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  if (!data.current) {
    return null;
  }

  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white italic font-bold">
        Weather Details
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic font-bold">
        <div className="bg-white/50 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full flex p-4 items-center justify-center gap-6">
          <div className="text-2xl">
            <h3>Humidity</h3>
            <h3
              className="text-white bg-black/25 rounded-full mt-1"
              aria-label={`Humidity: ${data.current.humidity}%`}
            >
              {data.current.humidity}%
            </h3>
          </div>
        </div>

        <div className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 bg-white/50 flex p-4 items-center justify-center gap-6 rounded-full">
          <div className="text-2xl">
            <h3>Sunrise</h3>
            <h3
              className="text-white bg-black/25rounded-full mt-1 px-2"
              aria-label={`Sunrise: ${data.forecast?.forecastday[0]?.astro.sunrise}`}
            >
              {data.forecast?.forecastday[0]?.astro.sunrise}
            </h3>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 bg-white/50 flex p-4 items-center justify-center gap-6 rounded-full">
          <div className="text-2xl">
            <h3>Sunset</h3>
            <h3
              className="text-white bg-black/25rounded-full mt-1 px-2"
              aria-label={`Sunset: ${data.forecast?.forecastday[0]?.astro.sunset}`}
            >
              {data.forecast?.forecastday[0]?.astro.sunset}
            </h3>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 bg-white/50 flex p-4 items-center justify-center gap-6 rounded-full">
          <div className="text-2xl">
            <h3>Air Pressure</h3>
            <h3
              className="text-white bg-black/25rounded-full mt-1"
              aria-label={`Air Pressure: ${data.current.pressure_mb} hPa`}
            >
              {data.current.pressure_mb} hPa
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
