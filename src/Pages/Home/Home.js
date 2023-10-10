import React from "react";
import './Home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton";
import sofa from "../../assets/sofa.png"
import chair from "../../assets/chair.png"
import table from "../../assets/table.png"

function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="Home__banner" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1597218868981-1b68e15f0065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)` }}>
                <div className="Home__banner__body">
                    <div className="Home__banner__body__head">Modern<br /> Interior Design</div>
                    <div className="Home__banner__body__button"><SecondaryButton title={"SHOP NOW"} fontSize={"medium"} width={"160px"} height={"40px"} /></div>
                </div>
            </div>
            <div className="Home_categories">
                <div className="Home_categories_box">
                    <div className="Home_categories_box_text">Chair Collection</div>
                    <PrimaryButton title={"SHOP NOW"} />
                    <img className="Home_categories_box_image" src={chair} />
                </div>
                <div className="Home_categories_box Home_categories_box_special">
                    <div className="Home_categories_box_text">Table Collection</div>
                    <PrimaryButton title={"SHOP NOW"} />
                    <img className="Home_categories_box_image" src={table} />
                </div>
                <div className="Home_categories_box">
                    <div className="Home_categories_box_text">Sofa Collection</div>
                    <PrimaryButton title={"SHOP NOW"} />
                    <img className="Home_categories_box_image" src={sofa} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;