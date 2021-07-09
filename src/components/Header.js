import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {useSelector , useDispatch} from 'react-redux';
import {selectUserName  , selectUserPhoto , setUserLoginDetails, setSignOutState } from '../redux/reduxFeatures/userSlice';
import { auth, provider } from '../firebase';
import NavbarPhone from './NavbarPhone';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import MovieIcon from '@material-ui/icons/Movie';
import PersonIcon from '@material-ui/icons/Person';

function Header() { 
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    // watch list data 
    const movies = useSelector(state => state.watchList);


    // handle Auth 
    async function handleAuth () {
        if (!userName) {
            await auth.signInWithPopup(provider).then( res => {
                setUser(res.user)
            }).catch(err => {
                alert(err.message )
            })
        }else if (userName) {
            await auth.signOut().then(() => {
                dispatch(setSignOutState());
            }).catch(err => {
                alert(err.message)
            })
        }
    }
    // on Auth change 
    useEffect(() => {
       async function onAuthChange () {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    setUser(user);
                }
            })
        }
        onAuthChange();
    })
    // set user 
    const setUser = user => {
        dispatch(
            setUserLoginDetails({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            })
        )
    }
    return (
    <>
        <Nav>
            <Logo>
                <Link to='/home'>
                    <img src='./images/logo.svg' alt='disney' />
                </Link>
            </Logo>
            <NavMenu>
                <Link to='/home'>
                    <HomeIcon fontSize="small" />
                    <span>Home</span>
                </Link>
                <Link to='/search'>
                    <SearchIcon/>
                    <span>search</span>
                </Link>
                <Link to='/watchList'>
                    <AddIcon/>
                    {/* ---watch list length -- */}
                    <span>watchList {movies.movieList.length} </span>
                </Link>
                <Link to='/soon'>
                    <MovieIcon/>
                    <span>originals</span>
                </Link>
                <Link to='/'>
                    <PersonIcon/>
                    <span>series</span>
                </Link>
            </NavMenu>
            {/* --- condition the display btn --- */}
            {!userName ? (<LoginBtn onClick={handleAuth} >Login</LoginBtn>) : (
                <ContainerSignOut>
                    <UserPhoto>
                        <img  src={userPhoto} alt={userName} />
                    </UserPhoto>
                    <span>{userName}</span>
                    <DropDown>
                        <span onClick={handleAuth} >sign out </span>
                    </DropDown>
                </ContainerSignOut>
            )}
        </Nav>
        {/* ---navbar phone --- */}
        <NavbarPhone/>
    </>
    )
}

const Nav = styled.nav ` 
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 70px;
    background-color:#090b13;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 0px 30px;
    z-index:5555
`;
const Logo = styled.div ` 
    width: 80px;
    padding: 0px;
    max-height:80px;
    img {
        width: 100%
    }
` ;
const NavMenu = styled.div `
    display: flex;
    flex-flow:row nowrap;
    align-items:center;
    justify-content:flex-end;
    position: relative;
    margin-right:auto;
    margin-left:25px;
    height: 100%;

    a {
        display: flex ;
        align-items:center;
        padding: 0px 15px;
    }
    span {
        font-size:14px;
        position: relative;
        white-space:nowrap;
        letter-spacing:1.2px;
        cursor: pointer;
        text-transform:uppercase;
        width: auto;
        margin-left: 5px;
        &:before {
            content:'';
            background: rgba(249,249,249,0.9);
            position: absolute;
            bottom: -6px;
            height: 2px;
            right:0;
            left:0;
            transform-origin:left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
        } 
        &:hover:before {
            transform: scaleX(1);
            visibility: visible;
        }     
    }
    @media (max-width:768px) {
        display: none 
    }
 `;
const LoginBtn = styled.a ` 
        background: rgba(0,0,0,0.6);
        padding: 10px 20px;
        text-transform: upperCase;
        letter-spacing: 1.5px;
        border: 1px solid var(--white-color);
        cursor: pointer;
        border-radius:5px;
        transition: all 0.2s ease; 

    &:hover {
        background: var(--white-color);
        color: var(--dark-color);
        border: transparent;
    }
`;
const DropDown = styled.div ` 
        position: absolute;
        top: 50px;
        background: rgb(19, 19, 19);
        border: 1px solid rgba(151, 151, 151, 0.34);
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
        padding: 10px;
        font-size: 14px;
        letter-spacing: 3px;
        width: 100px;
        opacity: 0;
        cursor: pointer;
        transition:all 1.5s ease-in-out;
`;
const UserPhoto = styled.div ` 
        img {    
            height: 32px;
            width: 32px;
            border-radius:50%;
            margin-right: 7px;
        };
    
`;
const ContainerSignOut = styled.div ` 
        display: flex;
        align-items:center;
        position: relative;
        cursor: pointer;
        &:hover  {
            ${DropDown} {
                opacity: 1 ;
                transition-duration: 0.2s 
            }
        }
`;


export default Header
