import React from 'react';
import "./card-style.css";

const CardsSlide = (props) => {

    return (
        <div className="card text-center" style={{fontFamily:"pacifico", borderRadius:"5px"}}>
            <div className="overflow">
                <img src={props.imagePath} alt="Card Image" className="card-img-top"></img>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title" style={{textDecorationLine: 'underline'}}>{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
                {props.content}
                {/* <a href="https://github.com/TheAllen" className="btn btn-outline-success">Source Code</a> */}
            </div>
        </div>
    );
};

export default CardsSlide;