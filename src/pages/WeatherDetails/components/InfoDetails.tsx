import { Grid, Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { InfoProps } from "./TemperatureDetails";

export const InfoDetails = ({info}: InfoProps) => {
    return (
        <Grid 
            item  
            xs={12}
            md={4}
        >
            <Card>
                <Typography variant="h4" align="center" sx={{marginTop: '10px'}}>
                    Info
                </Typography>
                <Stack direction="column" sx={{alignItems: 'center'}}>
                    <CardMedia 
                        image={'https://openweathermap.org/img/w/' + info.weather[0].icon + '.png'} 
                        component="img"
                        title={info.name}
                        sx={{ height: 55, width: 55 }}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography variant="h6" sx={{marginRight: 10}}>
                            <span style={{color: '#1976d2'}}>Humidity:</span> {info.main.humidity}
                        </Typography>
                        <Typography variant="h6">
                            <span style={{color: '#1976d2'}}>Pressure:</span> {info.main.pressure}
                        </Typography>
                        <Typography variant="h6">
                            <span style={{color: '#1976d2'}}>Feels like:</span> {info.main.feels_like}
                        </Typography>
                    </CardContent>
                </Stack>
            </Card>
        </Grid>
    )
}