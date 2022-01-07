import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const VisionMission = () => {
    return (
        <Container
            sx={{
                marginTop: '300px',
                height: '90vh',
            }}
            id="vision-mission"
        >
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    xs={11}
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Paper
                            sx={{
                                borderRadius: 0,
                                border: '2px solid black',
                                height: '200px',
                                textAlign: 'justify',
                                padding: '50px 40px 0 40px'
                            }}
                        >
                            <Typography
                                variant="h1"
                                fontWeight="bold"
                                fontSize="85px"
                                letterSpacing={1}
                                sx={{
                                    transform: 'rotate(-6.51deg)',
                                    position: 'relative',
                                    bottom: '110px'
                                }}
                            >
                                Vision
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    position: 'relative',
                                    bottom: '65px'
                                }}
                                fontStyle="italic"
                            >
                                "We see an initiation that gives
                                another perspective and values to
                                this generation."
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Paper
                            sx={{
                                borderRadius: 0,
                                border: '2px solid black',
                                height: '200px',
                                textAlign: 'justify',
                                padding: '50px 40px 0 40px',
                                position: 'relative',
                                top: '130px'
                            }}
                        >
                            <Typography
                                variant="h1"
                                fontWeight="bold"
                                fontSize="85px"
                                letterSpacing={1}
                                sx={{
                                    transform: 'rotate(-6.51deg)',
                                    position: 'relative',
                                    bottom: '110px'
                                }}
                            >
                                Mission
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    position: 'relative',
                                    bottom: '50px'
                                }}
                                fontStyle="italic"
                            >
                                "To bring the best out of this generation."
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default VisionMission;