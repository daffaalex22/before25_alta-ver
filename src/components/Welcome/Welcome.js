import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import HomeSidebar from '../HomeSidebar/HomeSidebar';
import HomeCarousel from '../HomeCarousel/HomeCarousel';


const Welcome = () => {
    return (
        <Container
            sx={{
                marginTop: '120px',
                maxHeight: '80vh',
                textAlign: 'center'
            }}
            id="welcome"
            maxWidth="xl"
        >
            <Grid
                container
                spacing={0}
                columns={20}
            >
                <Grid
                    item
                    xs={19}
                    container
                    spacing={0}
                    justifyContent="center"
                >
                    <Grid
                        item
                        md={14}
                        xs={19}
                        sx={{
                            position: 'relative',
                            left: '2%'
                        }}
                    >
                        <HomeCarousel />
                    </Grid>
                </Grid>
                <HomeSidebar />
            </Grid>
        </Container>
    );
}

export default Welcome;