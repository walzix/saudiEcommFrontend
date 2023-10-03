import React from "react";
import './Home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="Home__header__space"></div>
            <div>
                Home.
            </div>
            <Footer />
        </div>
    )
}

export default Home;