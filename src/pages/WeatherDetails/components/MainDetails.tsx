import { Grid, Card, CardActions, CardContent, CardMedia, Typography, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { useCustomDispatch } from "../../../hooks/useStore";
import { addCity, removeCity } from "../../../store/slices/listSlice";
import { WeatherData } from "../../../types/types";

interface InfoProps {
    info: WeatherData
    favorite: boolean | null
}

export const MainDetails = ({info, favorite}: InfoProps) => {
    let navigate = useNavigate();
    const dispatch = useCustomDispatch();

    const removeCityHandler = () => {
        dispatch(removeCity(info))
        navigate('/');
    }

    const addCityHandle = () => {
        dispatch(addCity(info));
    }

    return (
        <Grid 
            item  
            xs={12}
        >
            <Card>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <Typography variant="h4" align="center" sx={{marginTop: '10px'}}>
                            Main Information
                        </Typography>
                        <Stack direction="row" sx={{alignItems: 'center'}}>
                            <CardMedia 
                                image={'https://openweathermap.org/img/w/' + info.weather[0].icon + '.png'} 
                                component="img"
                                title={info.name}
                                sx={{ height: 55, width: 55, marginLeft: '15px'}}
                            />
                        <CardContent>
                            <Typography variant="h6">
                                {info.name}
                            </Typography>
                            <Typography variant="h5" sx={{color: '#1976d2'}}>
                                {String(info.main.temp)[0] === '-' ? Math.floor(info.main.temp) : '+' + Math.floor(info.main.temp)}
                            </Typography>
                            <Typography variant="h6">
                                {info.weather[0].description}
                            </Typography>
                        </CardContent>
                    </Stack>
                    <CardActions>
                        {favorite ? 
                            <Button 
                                variant="contained"
                                onClick={() => addCityHandle()}
                            >
                                Add to favorite
                            </Button> :
                            <Button 
                                variant="contained"
                                onClick={() => removeCityHandler()}
                            >
                                Delete
                            </Button> 
                        }
                    </CardActions>
                </Box>
                <CardMedia 
                    image="https://www.vmcdn.ca/f/files/sudbury/uploadedImages/news/localNews/2021/06/090621_sunrise.jpg;w=960"
                    component="img"
                    title='surise"'
                    sx={{ height: 240, flex: '0 1 425px', display: {xs: 'none', sm: 'block'}}}
                />
                </Box>
            </Card>
        </Grid>
    )
}