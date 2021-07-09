import React from 'react';
import {Container , Content , Wrap } from '../styles/section';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

// variants animation
const containerVariants = {
    visible:{
      x:0,
      opacity:1,
      transition: {
        duration: 1.3 ,
        ease:'easeInOut',
        type: "tween", 
      }
    },
    hidden:{
      x:'-100vw',
      opacity: 0
    },
}

function Originals () {
    // get data from redux 
    const originals = useSelector(state => state.movies.original);

    return (
        <Container 
            variants={containerVariants}
            animate="visible"
            initial="hidden"
        >
            <h4>Originals </h4>
            <Content>
            {originals && originals.map(item => {
                    return (
                        <Wrap key={item.id}>
                            <Link to={`/details/${item.id}`}>
                                    <img src={item.cardImg} alt='' />
                            </Link> 
                        </Wrap>
                    )
                })}
            </Content>
        </Container>
    )
}

export default Originals 
