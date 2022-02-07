import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import OurStory from '../../../components/OurStory/OurStory'
import Welcome from '../../../components/Welcome/Welcome'
import VisionMission from '../../../components/VisionMission/VisionMission'
import ValuesHome from '../../../components/ValuesHome/ValuesHome'
import HomeSidebar from '../../../components/HomeSidebar/HomeSidebar'
import HomeCarousel from '../../../components/HomeCarousel/HomeCarousel'
import Contacts from "../../../components/Contacts/Contacts";
import Footer from "../../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Container maxWidth="xl" sx={{ marginBottom: '200px' }}>
                <Welcome />
                <OurStory />
                <ValuesHome />
                <Contacts />
                {/* <Footer /> */}
            </Container>

        </>
    );
}

export default Home;