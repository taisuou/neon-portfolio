import React, { VFC } from 'react';
import styled from '@emotion/styled';
import {color, zIndex, media} from '../../utils/style'

export const Header: VFC = () => {
	return (
		<Container>
            <Logo><img src="images/header_logo.svg" alt="electrode" width={105}/></Logo>
            <MenuContainer>
                <Menu>WORKS</Menu>
                <Menu>ABOUT</Menu>
                <Menu>CONTACT</Menu>
            </MenuContainer>
            <Slidemenu>
                <input id="h-menu_checkbox" className="h-menuCheckbox" type="checkbox"></input>
                <label className="h-menu_icon" htmlFor="h-menu_checkbox">
                    <span className="hamburger-icon"></span>
                </label>
                <label id="h-menu_black" className="h-menuCheckbox" htmlFor="h-menu_checkbox">
                </label>
            </Slidemenu>
		</Container>
	)
}

const Logo = styled.a`
`
const Slidemenu = styled.div`
& input{
    display:none;
}
.h-menu_icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.hamburger-icon, .hamburger-icon::before, .hamburger-icon::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 100;
    top:0;
    bottom:0;
    width: 30px;
    height: 1px;
    background: white;
    cursor: pointer;
}
.hamburger-icon:before {
    top: 10px;
}
.hamburger-icon:after {
    top: 20px;
}
#h-menu_black {
    display: none;
    position: fixed;
    z-index: 98;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: .7s ease-in-out;
}
#h-menu_content {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    max-width: 320px;
    height: 100vh;
    padding: 53px 16px 16px;
    background: #1f2c37;
    overflow: auto;
    transition: .3s ease-in-out;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}

input:checked ~ .h-menu_icon .hamburger-icon{
    background: transparent;
}
input:checked ~ .h-menu_icon .hamburger-icon::before{
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top:10px;
    z-index:999;
}
input:checked ~ .h-menu_icon .hamburger-icon::after{
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    top:10px;
    z-index:999;
}
input:checked ~ #h-menu_black {
    display: block;/*カバーを表示*/
    opacity: .8;
}
#h-menu_checkbox:checked ~ #h-menu_content {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
.h-menu_icon .hamburger-icon, .h-menu_icon .hamburger-icon::before, .h-menu_icon .hamburger-icon::after, #h-menu_black, #h-menu_content{
    -webkit-transition: all .3s ;
    transition: all .3s ;}

#h-menu_content ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
#h-menu_content ul li{
    border-bottom: solid 1px white;
}
#h-menu_content li a {
    display: block;
    color: white;
    font-size: 14px;
    padding: 24px;
    text-decoration: none;
    transition-duration: 0.2s;
}
#h-menu_content li a:hover {
    background: #455b6d;
}
`
const Container = styled.div`
    max-width:1108px;
    margin:0 auto;
    top:0;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 36px;
    z-index:${zIndex.elevation.ev4};
    background:#1d1d1d;
    color:#fff;
    font-size:14px;
`
const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    max-width: 320px;
    height: 100vh;
    padding: 53px 16px 16px;
    background: #1f2c37;
    overflow: auto;
    transition: .3s ease-in-out;
    -webkit-transform: translateX(-105%);
    transform: translateX(-105%);
`

const Menu = styled.p`
    color:${color.content.HighEmphasis};
    margin-right:12px;
`
