import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useCustomDispatch, useCustomSelector } from "../../../hooks/useStore";
import { Weather, WeatherData } from "../../../types/types";
import { addCity, updateCity } from "../../../store/slices/listSlice";
import { selectListData } from "../../../store/selectors";
import { Link } from "react-router-dom";

export const SearchItem = ({ weather }: { weather: WeatherData }) => {
  const dispatch = useCustomDispatch();
  const list = useCustomSelector(selectListData);

  const addCityHandle = () => {
    if (list.length === 0) {
      dispatch(addCity(weather));
    } else if (list.every((item) => item.id !== weather.id)) {
      dispatch(addCity(weather));
    } else {
      dispatch(updateCity(weather));
    }
  };

  return (
    <Card>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <CardMedia
          image={
            "https://openweathermap.org/img/w/" +
            weather.weather[0].icon +
            ".png"
          }
          component="img"
          title={weather.name}
          sx={{ height: 55, width: 55, marginLeft: "15px", marginTop: "6px" }}
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">
            {String(weather.main.temp)[0] === "-"
              ? Math.floor(weather.main.temp)
              : "+" + Math.floor(weather.main.temp)}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">
            <span style={{ color: "#1976d2" }}>City:</span> {weather.name}
          </Typography>
          <Typography variant="h6">
            <span style={{ color: "#1976d2" }}>About:</span>{" "}
            {weather.weather[0].description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">
            <span style={{ color: "#1976d2" }}>Max:</span>{" "}
            {String(weather.main.temp)[0] === "-"
              ? Math.floor(weather.main.temp_max)
              : "+" + Math.floor(weather.main.temp_max)}
          </Typography>
          <Typography variant="h6">
            <span style={{ color: "#1976d2" }}>Min:</span>{" "}
            {String(weather.main.temp)[0] === "-"
              ? Math.floor(weather.main.temp_min)
              : "+" + Math.floor(weather.main.temp_min)}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">
            <span style={{ color: "#1976d2" }}>Wind speed:</span>{" "}
            {Math.floor(weather.wind.speed)}
          </Typography>
          <Typography variant="h6">
            <span style={{ color: "#1976d2" }}>Wind deg:</span>{" "}
            {Math.floor(weather.wind.deg)}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button onClick={() => addCityHandle()}>Add to favorites</Button>
        <Button>
          <Link
            to={weather.name}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Show more
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};
