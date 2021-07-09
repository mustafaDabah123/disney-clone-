import React from 'react';
import styled from 'styled-components';
import SearchHeader from '../components/SearchHeader';
import CardList from '../components/CardList';


function Search() {

    return (
       <Container>
         <SearchHeader/>
         <CardList/>
       </Container>
    )
}
const Container = styled.div ` 
    position: relative;
    background-image: url('/images/home-background.png');
    height : 100vh;
    overflow-x:hidden; 
    background-size:cover;
`; 
export default Search
