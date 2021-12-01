import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import man from "../../assets/images/man.jpg"
import lighthouse from "../../assets/images/lighthouse.jpg"

const OurStory = () => {
    return (
        <Container
            id="our-story"
            sx={{
                marginTop: '10vh',
                height: '90vh',
                textAlign: 'left',
                padding: 0
            }}
        >
            <Grid
                container
            // spacing={1}
            >
                <Grid item xs={5}>
                    <Typography
                        variant="h1"
                        component="h2"
                        sx={{
                            fontWeight: 500,
                            transform: 'rotate(-6.51deg)',
                            fontSize: '5vmax'
                        }}

                    >
                        Our Story
                    </Typography>
                    <Typography
                        sx={{
                            position: 'absolute',
                            top: '130vh',
                            width: '40vw',
                            textAlign: 'justify'
                        }}
                        color="inherit"
                    >
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Typography>
                    <Typography
                        sx={{
                            position: 'absolute',
                            top: '150vh',
                            width: '40vw',
                            textAlign: 'justify',
                            padding: '10px 15px 10px 0',
                            '&:hover': {
                                backgroundColor: 'white',
                                transition: 'all 0.3s ease'
                            }
                        }}
                        color="inherit"
                    >
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={lighthouse}
                        style={{
                            width: '90%',
                            marginLeft: '42px'
                        }}
                    />
                </Grid>

            </Grid>
        </Container>
    );
}

export default OurStory;