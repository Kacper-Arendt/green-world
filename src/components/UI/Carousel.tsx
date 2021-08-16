import styled from "styled-components";
import {IProduct} from "../../Models/IProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Product} from "../Products/Product";

const StyledCarousel = styled.div`
  width: 90%;
  height: 100%;


`

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: grid;
    place-items: center;
    margin: auto;
  }
  
  .slick-list{
    margin: 1rem;
  }
  
  .slick-prev{
    left: -5px;
    z-index: 1000;

  }
  .slick-next{
    right: -5px;
    z-index: 1000;
  }

  .slick-prev:before,
  .slick-next:before {
    color: green;
    font-size: 2.5rem;
  }
  
  
`

interface CarouselProps {
    array: Array<IProduct>,
}

export const Carousel = (props: CarouselProps) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <StyledCarousel>
            <StyledSlider {...settings}>
                {props.array.map(el => {
                    return (
                        <Product
                            id={el.id}
                            name={el.name}
                            alt={el.alt}
                            img={el.img}
                            price={el.price}
                            per={el.per}
                            newPrice={el.newPrice}
                        />
                    )
                })}
            </StyledSlider>
        </StyledCarousel>
    )
}