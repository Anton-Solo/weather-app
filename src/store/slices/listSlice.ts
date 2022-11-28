import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../types/types";

type CitySlice = {
    list: WeatherData[]
}

const initialState: CitySlice = {
    list: []
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addCity(state, action: PayloadAction<WeatherData>) {
            state.list = [...state.list, action.payload];
                
        },
        removeCity(state, action: PayloadAction<WeatherData>) {
            state.list = state.list.filter(item => item.id !== action.payload.id);
        },
        updateCity(state, action: PayloadAction<WeatherData>) {
            state.list = state.list.map(item => item.id === action.payload.id ?  item = action.payload : item);
        }
    }
})

export default listSlice.reducer;
export const { addCity, removeCity, updateCity } = listSlice.actions;