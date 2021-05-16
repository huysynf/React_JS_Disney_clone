import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {

  const handleAuth = () => {

  }

  return (
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt=""/>
        </Logo>

        <NavMenu>
          <Link to={'/home'}>
            <img src={'/images/home-icon.svg'} alt={''}/>
            <span>Home</span>
          </Link>

          <Link to={'/home'}>
            <img src={'/images/search-icon.svg'} alt={''}/>
            <span>Search</span>
          </Link>

          <Link to={'/home'}>
            <img src={'/images/home-icon.svg'} alt={''}/>
            <span>Home</span>
          </Link>

          <Link to={'/home'}>
            <img src={'/images/watchlist-icon.svg'} alt={''}/>
            <span>WatchList</span>
          </Link>

          <Link to={'/home'}>
            <img src={'/images/original-icon.svg'} alt={''}/>
            <span>Original</span>
          </Link>

          <Link to={'/home'}>
            <img src={'/images/movie-icon.svg'} alt={''}/>
            <span>Movies</span>
          </Link>
        </NavMenu>
        <Login>Login</Login>
      </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  transition: opacity .5s ease-out;
  letter-spacing: 16px;
  color: #fff;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  transition: all .2s ease-out 9s;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0 auto 0 25px;
  padding: 0;
  position: relative;


  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 349, 359);
      font-size: 13px;
      letter-spacing: 1.42px;
      margin-left: 8px;
      line-height: 1.08;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -4px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transition: all 500ms cubic-bezier(0.25, 0.45, .45, .94);
        visibility: hidden;
        width: 0;
      }
    }

    &:hover {
      span {
        &:before {
          visibility: visible;
          opacity: 1 !important;
          width: 100% !important;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(8, 0, 0, 8, .6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 4px;
  border: 1px solid #f9f9f9;
  transition: all .2s ease;
  cursor: pointer;
  color: #fff;
  box-shadow:0 0 54px 5px  #282c34;
  
  &:hover {
    background-color: #f9f9f9 !important;
    color: #000 !important;
    border-color: transparent !important;
  }
`;
export default Header;
