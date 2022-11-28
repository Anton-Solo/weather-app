import { Grid, Container } from "@mui/material";
import { useParams } from "react-router"
import { useCustomSelector } from "../../hooks/useStore";
import { selectListItemData, selectWeatherData } from "../../store/selectors";
import { RootState } from "../../store/store";
import { InfoDetails } from "./components/InfoDetails";
import { MainDetails } from "./components/MainDetails";
import { TemperatureDetails } from "./components/TemperatureDetails";
import { WindDetails } from "./components/WindDetails";

export const City = () => {
    const {name} = useParams();

    const weatherFromList = useCustomSelector((state: RootState) => selectListItemData(state, name))[0];
    const weatherFromSearch = useCustomSelector(selectWeatherData).weather;

    let weather = weatherFromList || weatherFromSearch;
    let fromSearch = weatherFromSearch && !weatherFromList;

    return (
        <Container>
            <Grid 
                container   
                spacing={2}
                sx={{
                    mt: '1rem'
                }}
            >
                <MainDetails info={weather} favorite={fromSearch}/>
                <TemperatureDetails info={weather} />
                <InfoDetails info={weather} />
                <WindDetails info={weather}/>
            </Grid>
        </Container>
    )
}