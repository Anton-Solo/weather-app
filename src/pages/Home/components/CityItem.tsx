import { 
    Card, 
    Button, 
    CardMedia, 
    CardContent, 
    Grid, 
    Typography, 
    CardActions, 
    Box 
} from "@mui/material"
import { Link } from "react-router-dom";

import api from "../../../axios";
import { useCustomDispatch } from "../../../hooks/useStore";
import { removeCity, updateCity } from "../../../store/slices/listSlice";
import { WeatherData } from "../../../types/types"

interface WeatherProps {
    weather: WeatherData;
}

export const CityItem = ({weather}: WeatherProps) => {
    const dispatch = useCustomDispatch();

    const removeCityHandler = () => {
        dispatch(removeCity(weather))
    }

    const updateWeather = async (name: string) => {
        const updatedWeather = await api.get(`/weather?q=${name}`);
        dispatch(updateCity(updatedWeather.data))
    }

    return (
        <Grid 
            item  
            xs={12}
            sm={6}
            md={4}
        >
            <Card>
                <Link to={weather.name} style={{textDecoration: 'none', color: '#000'}}>
                    <Box sx={{display:'flex', alignItems: 'center'}}>
                        <CardMedia 
                            image={'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png'} 
                            component="img"
                            title={weather.name}
                            sx={{ height: 55, width: 55, marginLeft: '15px'}}
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6">
                                {weather.name}
                            </Typography>
                            <Typography variant="h5" sx={{color: '#1976d2'}}>
                                {String(weather.main.temp)[0] === '-' ? Math.floor(weather.main.temp) : '+' + Math.floor(weather.main.temp)}
                            </Typography>
                            <Typography variant="h6">
                                {weather.weather[0].description}
                            </Typography>
                        </CardContent>
                    </Box>
                </Link>
                
                <CardActions>
                    <Button onClick={() => updateWeather(weather.name)}>
                        Update
                    </Button>
                    <Button onClick={() => removeCityHandler()}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}