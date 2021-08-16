import styled from "styled-components";
import {IProduct} from "../../Models/IProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Product} from "../Products/Product";
import {useEffect, useState} from "react";

const StyledCarousel = styled.div`
  width: 90%;
  height: 100%;
  max-width: 130rem;
`

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: grid;
    place-items: center;
    margin: auto;
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-prev {
    left: -5px;
    z-index: 1000;

  }

  .slick-next {
    right: -5px;
    z-index: 1000;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 2.5rem;
  }
`

interface CarouselProps {
    children: any,
    autoplay: boolean,
    slidesToScroll: number
}

export const Carousel = ({children, autoplay, slidesToScroll}: CarouselProps) => {
    const settings = {
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: slidesToScroll,
        initialSlide: 0,
        autoplay: autoplay,
        infinite: true,
        autoplaySpeed: 3000,
        dots: true,

        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    autoplay: false,
                    speed: 500,

                }
            },
        ]
    };

    return (
        <StyledCarousel>
            <StyledSlider {...settings}>
                {children}
            </StyledSlider>

        </StyledCarousel>
    )
}