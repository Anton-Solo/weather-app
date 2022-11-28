import { RootState } from "./store";

export const selectWeatherData = (state: RootState) => state.weatherSlice;

export const selectListData = (state: RootState) => state.listSlice.list;
export const selectListItemData = (state: RootState, name = '') => state.listSlice.list.filter(item => item.name == name)