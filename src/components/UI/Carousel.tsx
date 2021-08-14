import styled from "styled-components";
import {Product} from "../Products/Product";
import {ProductsData} from "../Products/ProductsData";
import {IProduct} from "../../Models/IProduct";

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Arrow = styled.span`
  position: absolute;
  top: 50%;
  font-size: 2rem;

  :first-of-type {
    right: 20px;
  }

  :last-of-type {
    left: 20px;
  }
`

interface CarouselProps {
    array: Array<IProduct>
    objects: Array<any>
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
            <Arrow onClick={prevSlide}></Arrow>
            {props.objects}
            <Arrow onClick={nextSlide}></Arrow>
        </StyledSlider>
    )
}

function useState(arg0: number): [any, any] {
    throw new Error("Function not implemented.");
}
