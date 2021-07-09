import React, { Fragment , useState  } from 'react';
import useFetch from '../hooks/useFetch';
import Card from './Card';
import styled from 'styled-components';
import { addMovie  } from '../redux/reduxFeatures/watchListSlice ';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import  Modal from './Model'

function CardList() {
    const [showModal , setShowModal] = useState(false);

    // fetch data 
    const {data} = useFetch('https://6097f7d8e48ec000178732c4.mockapi.io/api/d/movies');


    const dispatch = useDispatch();
    // get data from redux 
    const search = useSelector(state => state.search.search);
    const userName = useSelector(state => state.user.name);
    

    // function set movie to watch list 
    const setMovie = (movie) => {
        if (userName) {
            dispatch(
                addMovie(movie)
            )
            setShowModal(false);
        }else {
            setShowModal(true);
        }
    } 

    // search filter 
    const filter = data.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Container>
            {showModal ? <Modal showModal={showModal} setShowModal={setShowModal} ></Modal> : false }
            {data && filter.map(movie => {
                return (
                    <Fragment key={movie.id}>
                        <Card 
                        movie={movie}
                        btnChange={true}
                        addMovie={() => setMovie(movie)}
                        />
                    </Fragment>
                )
            })}
        </Container>
    )
}

const Container = styled.div `
  position: relative;
  padding: 10px 30px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0px;
  left: 0px;
`

export default CardList;
