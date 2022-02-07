import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
// import from "@mui/system/";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SwiperCore, { Navigation, Pagination, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css'
import './ValuesHome.css'

SwiperCore.use([Navigation, Pagination, FreeMode])

const ValuesHome = () => {
    return (
        <Container
            sx={{
                marginTop: '300px',
                minHeight: '90vh',
            }}
            id="values"
        >
            <Typography
                variant="h1"
                component="h2"
                sx={{
                    transform: 'rotate(-6.51deg)',
                    color: '#F8F5E2',
                    marginBottom: '170px'
                }}
                fontWeight="bold"
                id="os"
                textAlign="left"
            >
                Our Values
            </Typography>
            <Grid
                container
                spacing={2}
                columns={16}
                justifyContent="center"
            >
                <Grid
                    item
                    xs={15}
                    md={5}
                >
                    <Box
                        sx={{
                            border: '2px solid black',
                            padding: '30px 35px 90px 35px',
                            maxWidth: '80%',
                            minHeight: '245px'

                        }}
                    >
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    // textDecoration: 'underline',
                                    display: 'block',
                                }}
                                fontWeight="bold"
                                textAlign="left"
                            >
                                Growth mindset
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    marginTop: '35px'
                                }}
                                textAlign="left"
                            >
                                Which is a kind of thinking that wants
                                to develop and learn; the thought to
                                strive for the best in him who believes
                                that everything is possible.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={15}
                    md={5}
                >
                    <Box
                        sx={{
                            border: '2px solid black',
                            padding: '30px 35px 90px 35px',
                            maxWidth: '80%',
                            minHeight: '245px'
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    // textDecoration: 'underline',
                                    display: 'block',
                                }}
                                fontWeight="bold"
                                textAlign="left"
                            >
                                Excellent
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    marginTop: '35px'
                                }}
                                textAlign="left"
                            >
                                Which is the value to continue providing the best
                                (not perfect, but the best) in every aspect and
                                in every process.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={15}
                    md={5}
                >
                    <Box
                        sx={{
                            border: '2px solid black',
                            padding: '30px 35px 90px 35px',
                            maxWidth: '80%',
                            minHeight: '245px',
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    // textDecoration: 'underline',
                                    display: 'block',
                                }}
                                fontWeight="bold"
                                textAlign="left"
                            >
                                Pay it Forward
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    marginTop: '35px'
                                }}
                                textAlign="left"
                            >
                                Which is the value of having a heart
                                to share and to give impact. For the
                                awareness that is obtained or owned
                                is a blessing that has been entrusted
                                to be given to others.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container >

    );
}

export default ValuesHome;