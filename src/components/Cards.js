import React, { Component } from 'react';
import TechCard from './TechCard';

// import frontend from '../images/frontend.png';
// import backend from '../images/backend.png';
// import database from '../images/database.png';
// import deployment from '../images/deployment.jpg';

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
                        <TechCard imagePath={'https://i.postimg.cc/vmPmKSB0/frontend.png'} text={frontEndText}></TechCard>
                    </div>
                    <div className="col-md-3">
                        <TechCard imagePath={'https://i.postimg.cc/2jL5HGfx/backend.png'} text={backEndText}></TechCard>
                    </div>
                    <div className="col-md-3">
                        <TechCard imagePath={'https://i.postimg.cc/YSSrQf3Y/database.png'} text={databaseText}></TechCard>
                    </div>
                    <div className="col-md-3">
                        <TechCard imagePath={'https://i.postimg.cc/4d7XSfj3/deployment.jpg'} text={deploymentText}></TechCard>
                    </div>

                </div>
            </div>
        )
    }
}

export default Cards;