import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css'
import "./HomeCarousel.css";
import { Scrollbar } from "swiper";
import welcomeSection from '../../assets/images/WELCOME_SECT.png';
import Box from '@mui/material/Box';
import { Container } from "@mui/material";

export default function App() {
    return (
        <Container maxWidth="xl" className="home-carousel">
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src={welcomeSection}
                        alt="Welcoming Words"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={welcomeSection}
                        alt="Welcoming Words"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={welcomeSection}
                        alt="Welcoming Words"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={welcomeSection}
                        alt="Welcoming Words"
                    />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}