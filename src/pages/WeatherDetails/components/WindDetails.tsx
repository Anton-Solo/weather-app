import { Grid, Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { InfoProps } from "./TemperatureDetails";

export const WindDetails = ({info}: InfoProps) => {
    return (
        <Grid 
            item  
            xs={12}
            md={4}
        >
            <Card>
                <Typography variant="h4" align="center" sx={{marginTop: '10px'}}>
                    Wind
                </Typography>
                <Stack direction="column" sx={{alignItems: 'center'}}>
                    <CardMedia 
                        image={'https://openweathermap.org/img/w/' + info.weather[0].icon + '.png'} 
                        component="img"
                        title={info.name}
                        sx={{ height: 55, width: 55}}
                    />
                    <CardContent>
                        <Typography variant="h6" style={{marginRight: 10}}>
                            <span style={{color: '#1976d2'}}>Speed:</span> {info.wind.speed}
                        </Typography>
                        <Typography variant="h6">
                            <span style={{color: '#1976d2'}}>Deg:</span> {info.wind.deg}
                        </Typography>
                        <Typography variant="h6">
                            <span style={{color: '#1976d2'}}>Clouds:</span> {info.clouds.all}
                        </Typography>
                    </CardContent>
                </Stack>
            </Card>
        </Grid>
    )
}