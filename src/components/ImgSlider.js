import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    // settings carousel 
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
            <Carousel {...settings}>
              <Wrap>
                <BoxImg>
                  <img src='./images/slider-badag.jpg' alt='background'/>
                </BoxImg>
              </Wrap>
              <Wrap>
                <BoxImg>
                  <img src='./images/slider-badging.jpg' alt='background'/>
                </BoxImg>
              </Wrap>
              <Wrap>
                <BoxImg>
                  <img src='./images/slider-scale.jpg' alt='background'/>
                </BoxImg>
              </Wrap>
              <Wrap>
                <BoxImg>
                  <img src='./images/slider-scales.jpg' alt='background'/>
                </BoxImg>
              </Wrap>
            </Carousel>
    )
};

const Carousel = styled(Slider) ` 
     & > button {
        opacity: 0;
        height: 100%;
        z-index:1;
        &:hover {
          opacity: 1;
          transition:all 0.5s ease-in-out ;
        }
     }
     ul {
       margin-bottom: -10px;
     }
     ul li button {
       &:before {
         font-size:10px;
         color: var(--white-color)
       }
     }
     li.slick-active button:before {
       color: #fff;
     }
     .slick-list {
       overflow: initial;
     }
     slick-prev {
      left: -75px;
    }
`
const Wrap = styled.div ` 
  cursor: pointer;
  position: relative;
`
const BoxImg = styled.div ` 
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  display: block;
  position: relative;
  padding: 4px;
  img {
    width: 100%;
    height: 100%;
    // height: 150px;
    // object-fit: cover;
  }
  &:hover {
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration: 300ms;
  }
`

export default ImgSlider
