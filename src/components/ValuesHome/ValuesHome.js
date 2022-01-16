import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
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
                height: '90vh',
            }}
            id="values"
        >
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Paper
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 0,
                        }}
                        elevation={0}
                    >
                        <Typography
                            variant="h4"
                            fontSize="30px"
                            sx={{
                                textDecoration: 'underline'
                            }}
                        >
                            Growth mindset
                        </Typography>
                    </Paper>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </Container >

    );
}

export default ValuesHome;