import { Grid, Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { WeatherData } from "../../../types/types";

export interface InfoProps {
    info: WeatherData
}

export const TemperatureDetails = ({info}: InfoProps) => {
    return (
        <Grid 
            item  
            xs={12}
            md={4}
        >
            <Card>
                <Typography variant="h4" align="center" sx={{marginTop: '10px'}}>
                    Temperature
                </Typography>
                <Stack direction="column" sx={{alignItems: 'center'}}>
                    <CardContent>
                        <Typography variant="h5" sx={{color: '#1976d2'}}>
                            {String(info.main.temp)[0] === '-' ? Math.floor(info.main.temp) : '+' + Math.floor(info.main.temp)}
                        </Typography>
                    </CardContent>
                    <CardMedia 
                        image={'https://openweathermap.org/img/w/' + info.weather[0].icon + '.png'} 
                        component="img"
                        title={info.name}
                        sx={{ height: 55, width: 55 }}
                    >
                    </CardMedia>
                    <CardContent>
                        <Stack direction="row" sx={{alignItems: 'center'}}>
                            <Typography variant="h6" sx={{marginRight: 10}}>
                                <span style={{color: '#1976d2'}}>Min:</span> {String(info.main.temp)[0] === '-' ? Math.floor(info.main.temp_min) : '+' + Math.floor(info.main.temp_min)}
                            </Typography>
                            <Typography variant="h6">
                                <span style={{color: '#1976d2'}}>Max:</span> {String(info.main.temp)[0] === '-' ? Math.floor(info.main.temp_max) : '+' + Math.floor(info.main.temp_max)}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Stack>
            </Card>
        </Grid>
    )
}