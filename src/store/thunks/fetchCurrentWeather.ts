import { WeatherService } from "../../services/WeatherService";
import { weatherSlice } from '../slices/weatherSlice';
import { AppDispatch } from "../store";

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(weatherSlice.actions.fetchCurrentWeather);
        const res = await WeatherService.getCurrentWeather(payload);
        if (res.status === 200) {
            dispatch(weatherSlice.actions.fetchCurrentWeatherSuccess(res))
        } else {
            dispatch(weatherSlice.actions.fetchCurrentWeatherError(res))
        }
    } catch (error: any) {
       dispatch(weatherSlice.actions.fetchCurrentWeatherError(error.response))
    }
}