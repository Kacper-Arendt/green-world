import styled from "styled-components";
import {Wrapper} from "../UI/WrapperEl";
import {ProductsData} from "../Products/ProductsData";
import {Carousel} from "../UI/Carousel";
import {Product} from "../Products/Product";

const WrapperEl = styled(Wrapper)`
  margin: 2rem 0;

  h2 {
    color: black;
    font-size: 4rem;
  }
`

export const Discounts = () => {
    return (
        <WrapperEl>
            <h2>Discounts</h2>
            <Carousel autoplay={false} slidesToScroll={2}>
                {ProductsData.map((el, key ) => {
                    if (el.newPrice) {
                        return (
                                <Product
                                    key={key}
                                    id={el.id}
                                         name={el.name}
                                         alt={el.alt}
                                         img={el.img}
                                         price={el.price}
                                         per={el.per}
                                         newPrice={el.newPrice}
                                />
                        )
                    } else {
                        return null
                    }
                })}
            </Carousel>
        </WrapperEl>
    )
}