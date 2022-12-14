import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather } from "../../types/types";

const initialState = {
    weather: null,
    isLoading: false,
    response: {
        status: 0,
        message: '',
    }
}

export const weatherSlice = createSlice({
    name: 'weather',
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
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})

export default weatherSlice.reducer;
export const { fetchCurrentWeatherSuccess } = weatherSlice.actions;