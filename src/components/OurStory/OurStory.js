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
                marginTop: '200px',
                height: '90vh',
                textAlign: 'left',
                padding: 0
            }}
            maxWidth="xl"
        >
            <Grid
                container
            >
                <Grid item xs={5}>
                    <Typography
                        variant="h1"
                        component="h2"
                        sx={{
                            transform: 'rotate(-6.51deg)',
                        }}
                        fontWeight="bold"
                        fontSize="85px"
                    >
                        Our Story
                    </Typography>
                    <Typography
                        sx={{
                            position: 'relative',
                            top: '150px',
                            width: '40vw',
                            textAlign: 'justify',
                            padding: '30px 45px 30px 45px',
                            '&:hover': {
                                backgroundColor: 'white',
                                transition: 'all 0.5s ease-in-out',
                                border: '2px solid black'
                            }
                        }}
                        color="inherit"
                        variant="h4"
                        fontWeight="light"
                    >
                        B25 is a youth-led initiative that aims to empower
                        and equip the next generation with new perspectives
                        and life values for them to live their best lives.
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