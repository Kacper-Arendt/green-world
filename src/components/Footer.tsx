import styled from "styled-components";
import {AiOutlineFacebook, AiOutlineYoutube, AiOutlineInstagram} from "react-icons/ai";

const StyledFooter = styled.footer`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-evenly;
  background-color: #574659;
  margin-top: auto;
`

const ContactData = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin: 0 .5rem;
    font-size: 1.5rem;
    color: white;
    white-space: nowrap;
  }
`

const Line = styled.div`
  width: 95%;
  height: .2rem;
  border-bottom: 1px solid #C5C5C5;
`
const Social = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  svg {
    font-size: 3rem;
    margin: 0 1rem;
    color: white;
  }
`


export const Footer = () => {
    return (
        <StyledFooter>
            <ContactData>
                <p>About Us</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>Help</p>
            </ContactData>
            <Line/>
            <Social>
                <p><AiOutlineFacebook/></p>
                <p><AiOutlineInstagram/></p>
                <p><AiOutlineYoutube/></p>
            </Social>
        </StyledFooter>
    )
}