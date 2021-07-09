import React from 'react';
import {motion , AnimatePresence} from 'framer-motion';
import styled from 'styled-components';

// variants animation
const backdropVariants = {
    visible:{opacity:1 , x:0},
    hidden:{opacity:0 , x:'100vw'},
    exit:{x:'100vw' , opacity: 0  ,  transaction:{delay:2}}
}


function Modal ({ showModal , setShowModal }) {
    // close modal 
    setTimeout(() => {
        setShowModal(false);
    } , 2000)

    return (
        <AnimatePresence existBeforeEnter > 
            {showModal && (
                <Backdrop className="backdrop" 
                  variants={backdropVariants}
                  animate="visible"
                  initial="hidden"
                  exit="exit"  
                >
                    please logIn 
                </Backdrop>
            )}
        </AnimatePresence>
    )
}

const Backdrop =  styled(motion.div) ` 
    background-color: #d9dcec;
    padding: 20px;
    border-radius: 10px;
    color:var(--dark-color);
    text-align:center;
    position: fixed;
    bottom: 10%;
    right: 30px;
    z-index: 22222;
    width: 250px;
    font-weight: bold;
    letter-spacing: 2px;
    &::before {
      content:'';  
      width: 0;
      height: 0;
      border-top: 15px solid transparent;
      border-left: 15px solid #d9dcec;
      border-bottom: 15px solid transparent;
      position: absolute;
      right: -10px;
      top: 12px;
    }
`


export default Modal
