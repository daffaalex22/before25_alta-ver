import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import OurStory from '../../../components/OurStory/OurStory'
import Welcome from '../../../components/Welcome/Welcome'
import HomeSidebar from '../../../components/HomeSidebar/HomeSidebar'

const Home = () => {
    return (
        <Container sx={{ padding: 0 }}>
            <Welcome />
            <OurStory />
        </Container>
    );
}

export default Home;