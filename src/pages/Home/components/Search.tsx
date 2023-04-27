import { TextField } from "@mui/material";
import { useCustomDispatch, useCustomSelector } from "../../../hooks/useStore";
import { selectWeatherData } from "../../../store/selectors";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import { SearchItem } from "./SearchItem";

export const Search = () => {
  const dispatch = useCustomDispatch();

  const handleSearch: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    dispatch(fetchCurrentWeather(e.currentTarget.value));
  };

  const { weather, isLoading, response } = useCustomSelector(selectWeatherData);

  return (
    <>
      <TextField
        label="search"
        type="search"
        fullWidth
        onChange={(e) => handleSearch(e)}
        sx={{ marginBottom: "1rem" }}
        data-testid="search-input"
      />
      {isLoading && <span>Loading...</span>}

      {weather && response.status === 200 ? (
        <SearchItem weather={weather} />
      ) : (
        <h2>not found</h2>
      )}
    </>
  );
};
