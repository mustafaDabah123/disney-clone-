import React from 'react'
import { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setSearch} from '../redux/reduxFeatures/searchSlice';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';


function SearchHeader() {
  const [searchTerm , setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // function handle change input 
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  // set date to global state (search)
  useEffect(() => {
    dispatch(
      setSearch({
        search:searchTerm
       })
    )
  })


    return (
        <Container>
            <Wrap>
                <Overlay/>
                <BoxImg>
                  <img src='./images/slider-badging.jpg' alt='background'/>
                </BoxImg>
                <InputContainer>
                    <SearchInput placeholder="search for favorite disney" value={searchTerm} onChange={handleChange} />
                    <IconContainer>
                        <SearchIcon/>
                    </IconContainer>
                </InputContainer>
            </Wrap>
        </Container>
    )
}
const Container = styled.div ` 
    position: relative;
    top:70px;
    width: 100%;
    margin-bottom: 60px;
    z-index: 1;
`;
const Wrap = styled.div ` 
  cursor: pointer;
  position: relative;
`
const Overlay = styled.div ` 
    position: absolute;
    top: 0px;
    bottom:0px;
    right:0px;
    left:0px;
    background: rgba(0,0,0,0.4);
    z-index: 2;
`
const BoxImg = styled.div ` 
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  display: block;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width:450px) {
      height: 150px;
    }
  }
  
`
const InputContainer = styled.form `
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:20px;
`
const SearchInput = styled.input ` 
  padding:25px 20px;
  max-width: 600px;
  width: 100%;
  background-color: var(--dark-color);
  border:none;
  border-radius: 5px;
  color: var(--white-color);
  ::placeholder {
    color: #b2b2b2;
    font-weight: 200;
    letter-spacing: 2px;
    text-transform: capitalize;
  }

  @media (max-width:768px) {
        width: 100%;
        padding: 15px 10px;
    }
`
const IconContainer = styled.div `
    margin-left: 10px;
    background-color: #13254a;
    border-radius: 5px;
    padding: 17px;
    @media (max-width:768px) {
      padding: 10px;
    }
`

export default SearchHeader
