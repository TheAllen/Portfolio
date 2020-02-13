import React from 'react';

const CardsSlide = (props) => {

    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imagePath} alt="Card Image"></img>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
            </div>
        </div>
    );
};

export default CardsSlide;