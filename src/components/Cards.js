import React, { Component } from 'react';
import CardSlide from './CardsSlide';

import frontend from '../images/frontend.png';
import backend from '../images/backend.png';
import database from '../images/database.png';
import deployment from '../images/deployment.jpg';

class Cards extends Component {

    render() {

        const frontEndText = (
            <div>
                <h4>Frontend</h4>
                <br></br>
                <p>React | Redux</p>
                {/* <div className="divider"></div> */}
                <p>JavaScript</p>
                <p>Java Spring</p>
            </div>
        );

        const backEndText = (
            <div>
                <h4>Backend</h4>
                <br></br>
                <p>Java | Spring Boot</p>
                <p>NodeJS</p>
                <p>Express</p>
            </div>
        );

        const databaseText = (
            <div>
                <h4>Database</h4>
                <br></br>
                <p>mySQL</p>
                <p>MongoDB</p>
                <p>PostgreSQL</p>
            </div>
        );

        const deploymentText = (
            <div>
                <h4>Deployment</h4>
                <br></br>
                <p>Heroku</p>
                <p>Git</p>
                <p>AWS</p>
            </div>
        );

        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">


                    <div className="col-md-3">
                        <CardSlide imagePath={frontend} text={frontEndText}></CardSlide>
                    </div>
                    <div className="col-md-3">
                        <CardSlide imagePath={backend} text={backEndText}></CardSlide>
                    </div>
                    <div className="col-md-3">
                        <CardSlide imagePath={database} text={databaseText}></CardSlide>
                    </div>
                    <div className="col-md-3">
                        <CardSlide imagePath={deployment} text={deploymentText}></CardSlide>
                    </div>

                </div>
            </div>
        )
    }
}

export default Cards;