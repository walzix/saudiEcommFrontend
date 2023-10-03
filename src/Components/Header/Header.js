import React from "react";
import './Header.css'
import { AccessAlarm } from '@mui/icons-material';
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function Header() {
    return (
        <div className="Header">
            <div className="Header__left">Chairs.</div>
            <div className="Header__center">
                <div className="Header__center__nav">HOME</div>
                <div className="Header__center__line"></div>
                <div className="Header__center__nav">ABOUT US</div>
                <div className="Header__center__line"></div>
                <div className="Header__center__nav">SHOP</div>
                <div className="Header__center__line"></div>
                <div className="Header__center__nav">BLOG</div>
                <div className="Header__center__line"></div>
                <div className="Header__center__nav">CONTACT</div>
            </div>
            <div className="Header__right">
                <div className="Header__right__icon">
                    <AccessAlarm sx={{ fontSize: "30px" }} />
                </div>
                <div className="Header__right__icon">
                    <AccessAlarm sx={{ fontSize: "30px" }} />
                    <span className="Header__right__icon__number">2</span>
                </div>
                <PrimaryButton title={"Login"} fontSize={"small"} width={"90px"} height={"35px"}/>
            </div>
        </div>
    )
}

export default Header;