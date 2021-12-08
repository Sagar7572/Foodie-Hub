import React from "react";
import  web from  "../src/Pics/undraw_cooking_lyxy.png"
import {NavLink} from "react-router-dom"

const Home = () => {
    return (
        <>
        <section id = "header" className = "d-flex align-ietms-center  ">
        <div className = "container-fluid nav_bg">
        <div className = "row-lg-3">
        <div className = "col-10 mx-auto">
        <div className = "row">

        <div className = " col-md-auto col-lg-7 col-sm-12 pt-5  pt-lg-0 order-2 order-lg-1 flex-column " id = "header-text"> 
        <h1>Add a joy of best taste with <strong className = "brand-name" >Foodiieee Hub!</strong></h1>
        <h2 className = " my-3 intro">
        Everything tastes good when you are hungry.</h2>
        <div className = "mt-4">
        
            <NavLink to = "" className = "btn-get-started">Get Started!</NavLink>
            
        </div>
        </div>
            <div className = "col-lg-5 order-1 order-lg-2 header-img">
            <img src = {web} className = " img-fluid animated" alt = " home img"/>

            </div>
            </div>

        </div>

        </div>

        </div>

        </section>
        </>

    )
};
export default Home;

{/* <div className = "container-fluid nav_bg">
        <div className = "row">
        <div className = "col-10 mx-auto">
        <div className = " col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"> 
        </div>

        </div>

        </div>

        </div> */}