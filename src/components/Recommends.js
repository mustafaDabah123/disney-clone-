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
function Recommends() {

    const recommends = useSelector((state) => state.movies.recommend)

    return (
        <Container  
            variants={containerVariants}
            animate="visible"
            initial="hidden"
        >
            <h4>Recommends for you </h4>
            <Content>
                {recommends && recommends.map(item => {
                    return (
                        <Wrap key={item.id}>
                            <Link to={`/details/${item.id}`} >
                                    <img src={item.cardImg} alt='' />
                            </Link> 
                        </Wrap>
                    )
                })}
            </Content>
        </Container>
    )
}
export default Recommends
