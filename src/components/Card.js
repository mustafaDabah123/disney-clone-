import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector} from 'react-redux';
import { motion } from "framer-motion";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// variants animation
const containerVariants = {
  visible:{
    y:0,
    opacity:1,
    transition: {
      duration: 1 ,
      ease:'easeInOut',
      type: "tween", 
    }
  },
  hidden:{
    y:'100vw',
    opacity: 0
  },
  exit:{
    x:'-100vw',
    opacity: 0,
    transition: {ease:'easeInOut'}
  }
}

function Card ({movie ,  btnChange  , addMovie , deleteMovie }) {
    // movies data 
    const movies = useSelector(state => state.watchList);

    // function disable to btn watch list 
    const storeMove = movies.movieList.find(item => item.id === movie.id);
    const watchListDisable = storeMove ? true : false ; 

    return (
            <WrapCard 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
                <img src={movie.cardImg} alt="img" />
                <Info>
                   <h3>{movie.title}</h3>
                   <h4>{movie.subTitle}</h4>
                </Info>
                <Controls>
                    <Player>
                      {/* --- btn to go the details  --- */}
                      <Link to={`/details/${movie.id}`}>
                          <PlayArrowIcon/>
                          <span>Details</span>
                      </Link>
                    </Player>
                    {/* ---condition to display btn --- */}
                      {
                        btnChange ? (
                          <WatchListBtn onClick={addMovie} disabled={watchListDisable} >
                            <AddIcon/>
                            <span>Add watchList</span>
                          </WatchListBtn>
                        ):( 
                          <WatchListBtn onClick={deleteMovie}>
                            <DeleteIcon/>
                            <span>delete </span>
                          </WatchListBtn>
                          )
                      }
                </Controls>
            </WrapCard>
    )
}
const WrapCard = styled(motion.div)`
  position: relative;
  background-color: #000621;
  width: 90%;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  display:flex ;
  justify-content: space-between;
  border: 1px solid var(--white-color);
  margin:auto ;
  margin-bottom: 40px;
  img {
    max-width: 350px;
    margin: auto;
    width: 100%;
  }
  @media (max-width:768px) {
    flex-wrap: wrap;
    width: 90%;
    margin-bottom: 50px;
  }
`
const Info = styled.div `
  text-align: center;
  width: 100%;
  h3 {
    font-size: 40px;
  }
`
const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    width: 100%;
`;

const Player = styled.button`
    font-size: 15px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    background: rgb (249, 249, 249);
    border: none;
    width: 50%;
    text-align: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 1.8px;
      text-align: center;
      text-transform: uppercase;
      color: rgb(0, 0, 0);
    }
    span {
        width: 160px;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 10px 0px;
    }
`;
const WatchListBtn = styled.button `
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    background: rgb (249, 249, 249);
    border: none;
    width: 50%;
    text-align: center; 
    span {
        width: 160px;
        letter-spacing: 1.8px;
        text-transform: uppercase;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 10px 0px;
    }
`;

export default Card;
