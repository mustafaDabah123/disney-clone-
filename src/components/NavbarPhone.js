import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useSelector} from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import MovieIcon from '@material-ui/icons/Movie';
import PersonIcon from '@material-ui/icons/Person';

function NavbarPhone() {
    // watch list data 
    const movies = useSelector(state => state.watchList);
    return (
        <NavPhone>
            <NavLink to='/home' activeClassName="selected">
                <HomeIcon />
                <p>home</p>
            </NavLink>    
            <NavLink to='/search' activeClassName="selected">
                <SearchIcon/>
                <p>search</p>
            </NavLink>
            <NavLink to='/watchList' activeClassName="selected">
                {/* --- length watch list  --- */}
                {movies.movieList.length ? <span></span> : false}
                <AddIcon/>
                <p>watchlist</p>
            </NavLink>
            <NavLink to='/soon' activeClassName="selected">
                <MovieIcon/>
                <p>movies</p>
            </NavLink>
            <NavLink exact={true} to='' activeClassName="selected">
                <PersonIcon/>
                <p>login</p>
            </NavLink>
        </NavPhone>
    )
}
const NavPhone = styled.div `
    display: none;
    @media (max-width:768px) {
        display: flex;
        justify-content:space-around;
        align-items:center;
        width: 100%;
        position: fixed;
        right: 0px;
        bottom: 0px;
        height: 60px;
        z-index:1111111; 
        background-color:#090b13;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        z-index:555 ;
        margin-top: 50px;
       
        a {
            transition: all .3s ease ;
            padding: 5px;
            text-align:center;  
            margin-top:10px ;
        }
        p {
            font-size: 12px;
            font-weight: 200;
            text-transform: capitalize;
            margin-top: 0px;
        }
        span {
            background-color:red;
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 100%;
            padding: 2px;
        }

     }
    
`

export default NavbarPhone
