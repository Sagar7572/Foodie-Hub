import React from "react";
import pic from "../src/Pics/shutterstock_598112840.jpg";

const About = () => {
  return (
    <>
      <section id="content">
        <div className="container-fluid">
        <h1 id = "About" className = "mt-2"> About Us</h1>
          <div className="row">
            <div className = "col-lg-1"></div>
            <div className="col-lg-5 col-md-10 ">
              <h5 className="lead mt-3">
                Times Food is a food and recipes website owned by Times Group. A
                venture that focuses on user generated content, videos, articles
                and recipes from all over the world, Times Food carries the
                legacy of The Times of India in content and quality. The website
                has around 10000 recipes with more being added daily. It is a
                one stop destination for every foodie who is looking for latest
                food news,recipes based on various cuisines, dietary needs,
                ingredients, occasions and categories and videos teeming with
                engaging content.<br/> <br/>With its ever growing readership, Times Food
                already has over five million monthly unique users . From step
                by step recipes to visually appealing images, Times food has
                everything a foodie is looking for. Features on latest food
                trends, food news, kitchen hacks and tips and videos that make
                recipes easy even for someone who is not a pro in the kitchen,
                make this website stand out. <br/> <br/>Based on calorie count, time taken
                in preparing a dish, ingredients and dietary requirements, you
                can make your own diet chart or weekly menu plan.Anyone can
                become a blogger with Times Food by making a profile and
                uploading recipes and it is free! Also, it has a vast repository
                of blogger and chef recipes. Available on both Android and ios,
                you can download the app and explore this world of culinary
                fantasy!
              </h5>
            </div>
            <img src={pic} className="about-img float-right col-lg-5  col-md-5" alt="..."></img>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
