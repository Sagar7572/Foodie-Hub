import React from "react";
import web from "../src/Pics/R1.jpg"


const Cards  = (props) => {
    return (
        <>
        
                    <div className = " col-md-4 col-10 mx-auto">
                        <div className="card">
                           <img src={props.imgsrc} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">{props.titlenpm}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Read more</a>
  </div>
</div>

            </div>
            
            
        </>

    )
};
export default Cards;