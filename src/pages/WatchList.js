import React , {Fragment} from 'react';
import styled from 'styled-components';
import Card from '../components/Card'
import {useDispatch , useSelector} from 'react-redux';
import { deleteMovie } from '../redux/reduxFeatures/watchListSlice ';


function WatchList() {
    // get movies 
    const movies = useSelector(state => state.watchList);

    const dispatch = useDispatch();

    return (
        <Container>
            {movies.movieList.length > 0 ? (
                movies.movieList.map(movie => {
                    return (
                        <Fragment key={movie.id}>
                           <Card  
                             movie={movie}
                             btnChange={false}
                             deleteMovie={() => dispatch(deleteMovie(movie.id))}
                           />
                             
                        </Fragment>
                        )
                    })
            ): (
                <NoWatchList >there is no watch list </NoWatchList>
            )}
            <FooterWatchList></FooterWatchList>
        </Container>
    )
}
const Container = styled.div ` 
    position: relative;
    height : 100vh;
    background-size:cover;
    padding-top: 50px;
    top:70px
`; 
const NoWatchList = styled.div `
    font-size: 40px;
    text-align: center;
    font-weight: 700;
    margin-top: 50px;
    text-transform: uppercase;
    color: #7d7d7d;
`
const FooterWatchList = styled.div `
    padding: 20px;
    text-align: center;  
    width: 100%;
`

export default WatchList
