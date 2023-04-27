import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather, WeatherData, WeatherHoursList } from "../../types/types";

export interface MainInterface {
  weather: WeatherData | null;
  isLoading: boolean;
  response: {
    status: number;
    message: string;
  };
  weatherHours: WeatherHoursList[];
}

const initialState: MainInterface = {
  weather: null,
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
  weatherHours: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse>) {
      state.weather = action.payload.data;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchWeatherHours(state, action: PayloadAction<WeatherHoursList[]>) {
      state.weatherHours = action.payload;
    },
  },
});

export default weatherSlice.reducer;
export const { fetchCurrentWeatherSuccess, fetchWeatherHours } =
  weatherSlice.actions;
