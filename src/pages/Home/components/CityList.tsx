import { Grid } from "@mui/material"
import { useCustomSelector } from "../../../hooks/useStore"
import { selectListData } from "../../../store/selectors"
import { CityItem } from "./CityItem"

export const CityList = () => {
    const cities = useCustomSelector(selectListData)

    return (
        <Grid 
            container   
            spacing={2}
            sx={{
                mt: '1rem'
            }}
        >
            {cities.map(city => <CityItem key={city.id} weather={city} />)}
        </Grid>
    )
}