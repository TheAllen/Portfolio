import React, { Component } from 'react';
import CardSlide from './CardsSlide';

import frontend from '../images/frontend.png';
import backend from '../images/backend.png';
import database from '../images/database.png';
import deployment from '../images/deployment.jpg';

class Cards extends Component {

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">


                    <div className="col-md-3">
                        <CardSlide imagePath={frontend}></CardSlide>
                    </div>
                    <div className="col-md-3">
                        <CardSlide imagePath={backend}></CardSlide>
                    </div>
                    <div className="col-md-3">
                        <CardSlide imagePath={database}></CardSlide>
                    </div>
                    <div className="col-md-3">
                        <CardSlide imagePath={deployment}></CardSlide>
                    </div>

                </div>
            </div>
        )
    }
}

export default Cards;