import React from 'react'
import styled from 'styled-components'

function Soon() {
    return (
        <Container>
            <img src="./images/soon.svg" alt="soon"/>
            <h2>soon new update  mustafa dabah </h2>
        </Container>
    )
}

const Container = styled.div   ` 
    position: relative;
    top: 70px;
    padding: 50px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        max-width: 500px;
        width: 100%;
        margin-bottom: 30px;
    }
    h2 {
        text-transform: capitalize;
        text-align: center;
    }
`

export default Soon
