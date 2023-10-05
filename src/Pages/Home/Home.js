import React from "react";
import './Home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton";

function Home() {
    return (
        <div className="Home">
            <Header />
            <div
                className="Home__banner"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1597218868981-1b68e15f0065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)` }}
            >
                <div className="Home__banner__body">
                    <div className="Home__banner__body__head">Modern<br /> Interior Design</div>
                    <div className="Home__banner__body__button"><SecondaryButton title={"SHOP NOW"} fontSize={"medium"} width={"160px"} height={"40px"} /></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;