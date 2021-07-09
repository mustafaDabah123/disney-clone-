import React , { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import styled from "styled-components";
import ImgSlider from '../components/ImgSlider';
import NewDisney from '../components/NewDisney';
import Originals from '../components/Originals';
import Recommends from '../components/Recommends';
import Trending from '../components/Trending';
import Viewers from '../components/Viewers';
import useFetch from '../hooks/useFetch';
import { setMovies } from '../redux/reduxFeatures/movieSlice';

function Home()  {
    // fetch data 
    const {data} = useFetch('https://6097f7d8e48ec000178732c4.mockapi.io/api/d/movies');

    let  recommends =[];
    let newDisney = [];
    let originals = [];
    let trending = [];

    const dispatch = useDispatch();
        

      // switch movies   
      function switchMovies() {
        data.forEach((item) => {
            switch(item.type) {
                case "recommend":
                    recommends = [...recommends, {...item}];
                    break;

                case "new": 
                    newDisney = [...newDisney , {...item}] ;
                    break;

                 case "original":
                    originals = [...originals, {...item}];
                    break;
    
                 case "trending":
                    trending = [...trending, {...item}];
                    break;  
                default:     
            }
         })
     }

     switchMovies();

    // set movies to global state 
     useEffect(() => {
        dispatch(
            setMovies({
               allMovies:data,
               recommend:recommends,
               newDisney:newDisney,
               original:originals,
               trending:trending
            })
        )
     })
        
    return (
        <Container>
           <ImgSlider/>
           <Viewers/>
           <Recommends />
           <NewDisney />
           <Originals />
           <Trending />
        </Container>
    )
}

const Container = styled.div ` 
    position: relative;
    top:70px;
    background-image: url('/images/home-background.png');
    min-height : 100vh;
    overflow-x:hidden; 
    background-size:cover;
    padding: 10px 30px;
`; 

export default Home 
