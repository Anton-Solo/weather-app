import { Container } from '@mui/system';

import { CityList } from "./components/CityList"
import { Search } from "./components/Search"

export const Home = () => {
    return (
        <Container 
            sx={{
                mt: '1rem'
            }}
        >
            <Search />
            <CityList />
        </Container>
    )
}