import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather, WeatherDataHours } from "../types/types";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }

  static getCurrentWeatherForHours(
    city: string
  ): Promise<AxiosResponse<WeatherDataHours>> {
    return api.get<WeatherDataHours>(`/forecast?q=${city}`);
  }
}
