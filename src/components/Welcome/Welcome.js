import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import HomeSidebar from '../HomeSidebar/HomeSidebar'


const Welcome = () => {
    return (
        <Container
            sx={{
                marginTop: '10vh',
                height: '90vh',
                textAlign: 'center'
            }}
            id="welcome"
        >
            <Grid
                container
                spacing={3}
            >
                <Grid item xs={11}>
                    <Typography
                        sx={{
                            position: 'relative',
                            top: '13vh',
                            fontWeight: 500,
                            transform: 'rotate(-6.51deg)',
                            fontSize: '12vmax'
                        }}
                        variant="h1"
                    >
                        Welcome!
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                position: 'relative',
                                top: '185px',
                                textAlign: 'justify',
                                maxWidth: '60vw'
                            }}
                        >
                            "Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Box>
                </Grid>
                <HomeSidebar />
            </Grid>
        </Container>
    );
}

export default Welcome;