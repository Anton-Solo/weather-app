import { Grid, Container } from "@mui/material";
import { useParams } from "react-router";
import { useCustomDispatch, useCustomSelector } from "../../hooks/useStore";
import { selectListItemData, selectWeatherData } from "../../store/selectors";
import { RootState } from "../../store/store";
import { InfoDetails } from "./components/InfoDetails";
import { MainDetails } from "./components/MainDetails";
import { TemperatureDetails } from "./components/TemperatureDetails";
import { WindDetails } from "./components/WindDetails";
import { useEffect } from "react";
import { fetchCurrentWeatherForHours } from "../../store/thunks/fetchCurrentWeather";
import { GrafikHours } from "./components/GrafikHours";

export const City = () => {
  const { name } = useParams();
  const dispatch = useCustomDispatch();

  const weatherFromList = useCustomSelector((state: RootState) =>
    selectListItemData(state, name)
  )[0];
  const weatherFromSearch = useCustomSelector(selectWeatherData).weather;

  useEffect(() => {
    dispatch(fetchCurrentWeatherForHours(name as string));
  }, []);

  let weather = weatherFromList || weatherFromSearch;
  let fromSearch = weatherFromSearch && !weatherFromList;

  return (
    <Container>
      <GrafikHours />
      <Grid
        container
        spacing={2}
        sx={{
          mt: "1rem",
        }}
      >
        <MainDetails info={weather} favorite={fromSearch} />
        <TemperatureDetails info={weather} />
        <InfoDetails info={weather} />
        <WindDetails info={weather} />
      </Grid>
    </Container>
  );
};
