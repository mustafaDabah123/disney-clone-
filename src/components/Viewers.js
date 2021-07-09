import React from 'react';
import styled from "styled-components";

function Viewers() {

    return (
        <Container>
            <Wrap>
                <img src='./images/viewers-disney.png' alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='./videos/1564674844-disney.mp4' type='video/mp4'/>
                </video>
            </Wrap>
            <Wrap>
                <img src='./images/viewers-marvel.png' alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='./videos/1564676115-marvel.mp4' type='video/mp4'/>
                </video>
            </Wrap>
            <Wrap>
                <img src='./images/viewers-national.png' alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='./videos/1564676296-national-geographic.mp4' type='video/mp4'/>
                </video>
            </Wrap>
            <Wrap>
                <img src='./images/viewers-pixar.png' alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='./videos/1564676714-pixar.mp4' type='video/mp4'/>
                </video>
            </Wrap>
            <Wrap>
                <img src='./images/viewers-starwars.png' alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src='./videos/1608229455-star-wars.mp4' type='video/mp4'/>
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div ` 
    position: relative;
    padding-top: 30px;
    margin-top: 40px;
    display: grid;
    grid-gap:25px;
    grid-template-columns: repeat(5 , minmax(0, 1fr));

    @media (max-width:768px) {
        grid-template-columns: repeat(1 , minmax(0, 1fr));
    }
`;
const Wrap = styled.div ` 
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 2px solid #989898;

    img {
        inset:0px;
        opacity: 1;
        width: 100%;
        height: 100%;
        object-fit:contain; 
        z-index:1;
        transition:all .5s ease-in-out 0s ; 
        display: block;
        position: absolute;
    };
    video {
        opacity: 0;
        z-index:0;
        width:100%;
        height: 100%;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border:2px solid var(--white-color);
        img {
            opacity: 0;
        }
        video {
            opacity: 1;
        }
    }
`


export default Viewers
