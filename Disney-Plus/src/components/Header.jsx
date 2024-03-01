import React from 'react'
import styled from 'styled-components'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setUserLoginDetails } from '../features/users/userSlice';

const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
const db = getFirestore(app);
const storage = getStorage(app);

function Header() {
    const dispatch = useDispatch()
    // const history = useHistory()
    const username = useSelector(selectUserName)
    const userphoto = useSelector(selectUserPhoto)

    const handleAuth = () => {
        signInWithPopup(auth, googleAuthProvider)
        .then(result => setUser(result.user))
        .catch(err => console.log(err))
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
        
    }

    return (
        <Nav>
            <Logo><img src="/images/logo.svg" alt="Disney+" /></Logo>
            <NavMenu>
                <a href="#"><img src="/images/home-icon.svg" alt="HOME" /><span>HOME</span></a>
                <a href="#"><img src="/images/search-icon.svg" alt="HOME" /><span>SEARCH</span></a>
                <a href="#"><img src="/images/watchlist-icon.svg" alt="HOME" /><span>WATCHLIST</span></a>
                <a href="#"><img src="/images/original-icon.svg" alt="HOME" /><span>ORIGINALS</span></a>
                <a href="#"><img src="/images/movie-icon.svg" alt="HOME" /><span>MOVIES</span></a>
                <a href="#"><img src="/images/series-icon.svg" alt="HOME" /><span>SERIES</span></a>
            </NavMenu>
            <Login onClick={handleAuth}>Login</Login>
        </Nav>
    )
}

const Nav = styled.div`
    background-color: #090b13;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
    padding: 4px 36px;
`
const Logo = styled.a`
    width: 100px;
    max-height: 70px;
    display: inline-block;
    cursor: pointer;
    img {
        display: block;
        width: 100%;
    }
`
const NavMenu = styled.div`
    align-items: center;
    // display: flex;
    display: none;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a {
        display:  flex;
        align-items: center;
        padding: 0 19px;
        img{
            height: 20px;
            z-index: auto;
            padding: 0px 5px;
        }
        span {
            color: rgb(249, 249, 249);
            font-size: 15px;
            letter-spacing: 1.4px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;
            margin-top: 5.5px;
            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: '';   
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visiblity: hidden;
                width: auto;
            }
        }
        &:hover {
            span:before {
                transform: scaleX(1);
                visiblity: visible;
                opacity: 1 !important;
            }
        }
    }
    @media (max-width: 768px) {
        display: none;
    }   
`
const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    letter-spacing: 2px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

export default Header