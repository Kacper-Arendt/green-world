import styled from "styled-components";
import {IProduct} from "../../Models/IProduct";
import {useState} from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {Product} from "../Products/Product";

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Arrow = styled.span`
  position: absolute;
  top: 50%;
  font-size: 2.5rem;

  :first-of-type {
    right: -2rem;
  }

  :last-of-type {
    left: -2rem;
  }
`

interface CarouselProps {
    array: Array<IProduct>,
}

export const Carousel = (props: CarouselProps) => {
    const [current, setCurrent] = useState(0);
    const length = props.array.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <StyledSlider>
            <Arrow onClick={prevSlide}><AiOutlineArrowRight/></Arrow>
            {props.array.map(el => {
                return (
                    <div key={el.id}>
                        {el.id === current && (
                            <Product
                                id={el.id}
                                name={el.name}
                                alt={el.alt}
                                img={el.img}
                                price={el.price}
                                per={el.per}/>
                        )}
                    </div>
                )
            })}

            <Arrow onClick={nextSlide}><AiOutlineArrowLeft/></Arrow>
        </StyledSlider>
    )
}