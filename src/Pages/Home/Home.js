import React from "react";
import './Home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/SecondaryButton/SecondaryButton";
import sofa from "../../assets/sofa.png"
import chair from "../../assets/chair.png"
import table from "../../assets/table.png"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import axios from "axios";

function Home() {
    const featuredCategoryArray = ["Chairs", "Tables", "Benches", "On-Sale"];

    const [featuredCategory, setFeaturedCategory,] = React.useState(featuredCategoryArray[0])
    const [featuredProducts, setFeaturedProducts,] = React.useState(null);

    React.useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                if (res && res.data && res.data.length > 2) {
                    setFeaturedProducts(res.data.slice(0, 3))
                    console.log(res.data)
                } else { alert("An unexpected error occurred. Please try again") }
            }).catch((err) => {
                alert("An unexpected error occurred. Please contact support team");
                console.log(err);
            })
    }, [featuredCategory])

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
            <div className="Home_featured">
                <div className="Home_featured_main">
                    <div className="Home_featured_main_head">
                        <div className="Home_featured_main_head_left">{featuredCategory}</div>
                        <div className="Home_featured_main_head_right">
                            {featuredCategoryArray.map((item, key) => {
                                return <button
                                    className={featuredCategory === item ? "Home_featured_main_head_right_one_selected" : "Home_featured_main_head_right_one"}
                                    onClick={() => { setFeaturedCategory(item) }}
                                >{item}</button>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="Home_featured">
                <ArrowBackIosRoundedIcon className="Home_featured_arrow" />
                <div className="Home_featured_main">
                    <div className="Home_featured_main_body">
                        {featuredProducts
                            ? featuredProducts.length > 0
                                ? featuredProducts.map((item) => {
                                    return <div className="Home_featured_main_body_product">
                                        <div className="Home_featured_main_body_product_image"></div>
                                        <div className="Home_featured_main_body_product_info">

                                        </div>
                                    </div>
                                })
                                : "No Products Found"
                            : "Loading..."
                        }
                    </div>
                </div>
                <ArrowForwardIosRoundedIcon className="Home_featured_arrow" />
            </div>
            <Footer />
        </div>
    )
}

export default Home;