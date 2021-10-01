import styled from 'styled-components';
import {Product} from "../Products/Product";
import {ProductsData} from "../Products/ProductsData";
import {Wrapper} from '../UI/WrapperEl';
import {Carousel} from "../UI/Carousel";

const WrapperEl = styled(Wrapper)`
  h2 {
    color: black;
    font-size: 4rem;
  }
`

export const BestBuys = () => {
    return (
        <WrapperEl>
            <h2>Best Buys</h2>
            <Carousel autoplay={true} slidesToScroll={1}>
                {ProductsData.map((el) => {
                    if (!el.newPrice) {
                        return (
                            <Product
                                key={el.id}
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