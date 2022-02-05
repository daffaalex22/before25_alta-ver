import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import man from "../../assets/images/man.jpg";
import lighthouse from "../../assets/images/lighthouse.jpg";
import './OurStory.css'

const OurStory = () => {
    return (
        <Container
            id="our-story"
            sx={{
                marginTop: '25%',
                minHeight: '57vh',
                // textAlign: 'left',
                padding: 0,
                position: 'relative',
                left: '-2%'
            }}
            maxWidth="xl"
        >
            <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
                columns={20}
            >
                <Grid item xs={19} lg={8} container justifyContent="center">
                    <Grid item >
                        <Typography
                            variant="h1"
                            component="h2"
                            sx={{
                                transform: 'rotate(-6.51deg)',
                                color: '#F8F5E2',
                                marginBottom: '40px'
                            }}
                            fontWeight="bold"
                            id="os"
                            textAlign="center"
                        >
                            Our Story
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={15} lg={7}>
                    <Typography
                        sx={{
                            textAlign: 'justify',
                            marginBottom: '10%',
                        }}
                        color="inherit"
                        variant="h5"
                        fontWeight="regular"
                    >
                        B25 is a youth-led initiative that aims to empower
                        and equip the next generation with new perspectives
                        and life values for them to live their best lives.
                    </Typography>
                </Grid>
                <Grid item xs={19} lg={8} container justifyContent="center">
                    <Grid item>
                        <Typography
                            variant="h1"
                            component="h2"
                            sx={{
                                transform: 'rotate(-6.51deg)',
                                color: '#F8F5E2',
                                marginBottom: '40px'
                            }}
                            fontWeight="bold"
                            id="os"
                        >
                            Mission
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={15} lg={7} >
                    <Typography
                        sx={{
                            textAlign: 'justify',
                            marginBottom: '10%',
                        }}
                        color="inherit"
                        variant="h5"
                        fontWeight="regular"
                    >
                        We see an initiation that gives another perspective and values to this generation.
                    </Typography>
                </Grid>
                <Grid item xs={19} lg={8} container justifyContent="center">
                    <Grid item>
                        <Typography
                            variant="h1"
                            component="h2"
                            sx={{
                                transform: 'rotate(-6.51deg)',
                                color: '#F8F5E2',
                                marginBottom: '40px'
                            }}
                            fontWeight="bold"
                            id="os"
                        >
                            Vision
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={15} lg={7}>
                    <Typography
                        sx={{
                            textAlign: 'justify',
                            marginBottom: '10%',
                        }}
                        color="inherit"
                        variant="h5"
                        fontWeight="regular"
                    >
                        To bring the best out of this generation.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default OurStory;