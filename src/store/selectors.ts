import { RootState } from "./store";

export const selectWeatherData = (state: RootState) => state.weatherSlice;
export const HoursList = (state: RootState) => state.weatherSlice.weatherHours;

export const selectListData = (state: RootState) => state.listSlice.list;
export const selectListItemData = (state: RootState, name = "") =>
  state.listSlice.list.filter((item) => item.name == name);

