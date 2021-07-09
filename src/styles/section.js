import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled(motion.div) ` 
    padding: 30px 0px;
    margin: 40px 0px;
    
    h4 {
        font-size:30px;
        letter-spacing:1.5px;
        font-weight:700;
        text-transform: uppercase;
    }
`;
export const Content = styled.div `
    display: grid;
    grid-gap:25px;
    grid-template-columns: repeat(4 , minmax(0, 1fr));

    @media (max-width:768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;
export const Wrap = styled.div `
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 2px solid #989898;
    
    img {
        width: 100%;
        height: 100%;
        object-fit:contain ;
        border-radius:10px;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border:2px solid var(--white-color);
    }
`