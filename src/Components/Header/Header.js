import React from "react";
import './Header.css'
import { useNavigate } from "react-router-dom";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="Header">
            <div className="Header__left">Chairs.</div>
            <div className="Header__center">
                <div
                    className={window.location.pathname === '/' ? "Header__center__nav__selected" : "Header__center__nav"}
                    onClick={() => { navigate('/') }}
                >
                    HOME
                </div>
                <div className="Header__center__line"></div>
                <div
                    className={window.location.pathname === '/about' ? "Header__center__nav__selected" : "Header__center__nav"}
                    onClick={() => { navigate('/about') }}
                >
                    ABOUT US
                </div>
                <div className="Header__center__line"></div>
                <div
                    className={window.location.pathname === '/shop' ? "Header__center__nav__selected" : "Header__center__nav"}
                    onClick={() => { navigate('/shop') }}
                >
                    SHOP
                </div>
                <div className="Header__center__line"></div>
                <div
                    className={window.location.pathname === '/blog' ? "Header__center__nav__selected" : "Header__center__nav"}
                    onClick={() => { navigate('/blog') }}
                >
                    BLOG
                </div>
                <div className="Header__center__line"></div>
                <div
                    className={window.location.pathname === '/contact' ? "Header__center__nav__selected" : "Header__center__nav"}
                    onClick={() => { navigate('/contact') }}
                >
                    CONTACT
                </div>
            </div>
            <div className="Header__right">
                <div className="Header__right__icon">
                    <SearchRoundedIcon sx={{ fontSize: "30px" }} />
                </div>
                <div className="Header__right__icon">
                    <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
                    <span className="Header__right__icon__number">2</span>
                </div>
                <PrimaryButton title={"Login"} fontSize={"small"} width={"90px"} height={"35px"} />
            </div>
        </div>
    )
}

export default Header;