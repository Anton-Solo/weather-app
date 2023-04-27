import { WeatherService } from "../../services/WeatherService";
import { WeatherDataHours } from "../../types/types";
import { fetchWeatherHours, weatherSlice } from "../slices/weatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(weatherSlice.actions.fetchCurrentWeather);
      const res = await WeatherService.getCurrentWeather(payload);
      if (res.status === 200) {
        dispatch(weatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(weatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error: any) {
      dispatch(weatherSlice.actions.fetchCurrentWeatherError(error.response));
    }
  };

export const fetchCurrentWeatherForHours =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(weatherSlice.actions.fetchCurrentWeather);
      const res = await WeatherService.getCurrentWeatherForHours(payload);
      if (res.status === 200) {
        const hourlyData = res?.data?.list.slice(0, 24);
        const sortedData = hourlyData?.sort((a, b) => {
          let dateA = new Date(a.dt_txt).getTime();
          let dateB = new Date(b.dt_txt).getTime();
          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
          return 0;
        });
        dispatch(fetchWeatherHours(sortedData));
      } else {
        throw new Error(res.statusText);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
