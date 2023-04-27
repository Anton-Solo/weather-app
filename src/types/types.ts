type Response = {
  status: number;
  message: string;
};

export interface Weather {
  weather: WeatherData[];
  isLoading: boolean;
  response: Response;
}

export interface WeatherInfo {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: WeatherInfo[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherHoursList {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  visibility: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: 1.72; deg: 32; gust: 2.8 };
}

export interface WeatherDataHours {
  city: {
    coord: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: WeatherHoursList[];
  message: number;
}
