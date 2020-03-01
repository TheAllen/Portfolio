import React from 'react';
import { Row, Col, Card, CardTitle, CardText, CardBody, CardImg, Button } from 'reactstrap';
import CardsSlide from './CardsSlide';
import CardModal from './CardModal';

import bg from '../images/nyc.jpg';
import visualization from '../images/Lyon.png';
import sylvanas from '../images/sylvanas.png';


const ProjectTab = (props) => {

    const lineBreak = () => {
        return (
            <hr
                style={{
                    color: 'blue',
                    height: 1

                }}
            />
        );
    };

    return (
        <Row>
            <Col sm="6">

                {/* Cards for projects */}

                {/* 3D Visualization Project */}
                <CardsSlide
                    imagePath={visualization}
                    title={"City Visualization 3D"}
                    text={<div>
                        <p>This app generates beautiful 3D models of famous Cities around the world! Using Esri ArcGIS api tools to create amazing 3D visualizations.</p>

                        {lineBreak()}

                        <h4>React</h4>
                        <h4>ArcGIS</h4>
                        <h4>Java Spring Boot</h4>
                        <h5>mySQL</h5>


                    </div>}
                    content={<CardModal modalTitle="City Visualization 3D" buttonLabel="See Demo" content="Built using Leaflet and Esri ArcGIS api"></CardModal>}
                ></CardsSlide>

                {lineBreak()}

                {/* TODO add more projects */}
                <CardsSlide
                    imagePath={sylvanas}
                    title={"OpenGL 3D Model"}
                    text={
                        <div>
                            <p>App that allows you to load OBJ models in and view/edit the model. Implemented a quaternion-based camera</p>
                            {lineBreak()}
                            <h5>C++</h5>
                            <h5>OpenGL</h5>
                        </div>
                    }
                    content={<CardModal modalTitle="3D Model Loader" buttonLabel="See Demo" content="The objective of this project was to learn about advanced camera concepts and loading large OBJ models to a scene. Learned a lot about how to work with OpenGL."
                    ></CardModal>}
                ></CardsSlide>

                {lineBreak()}

                {/* All Projects --> Github */}
                <Card body style={{ fontFamily: 'Pacifico', borderRadius: '7px', textAlign: 'center' }}>
                    <CardTitle ><h3>All Projects</h3></CardTitle>
                    <CardText>This is my Github containing all my other Projects</CardText>
                    <Button color='primary' href='https://github.com/TheAllen'>Check out Projects</Button>
                </Card>

                {/* TODO: Add Project tab */}

            </Col>

            <Col sm="6">

                <CardsSlide
                    imagePath={visualization}
                    title={"Myriad Streaming App"}
                    content={<CardModal modalTitle="Streaming App" buttonLabel="See Demo"></CardModal>}
                ></CardsSlide>

                {lineBreak()}

                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Card>

                {lineBreak()}


                <CardsSlide
                    imagePath={visualization}
                    title={"Myriad Streaming App"}
                    content={<CardModal modalTitle="Streaming App" buttonLabel="See Demo"></CardModal>}
                ></CardsSlide>

                {/* TODO: Add Project tab */}

                {lineBreak()}


                <div className='col'>
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant='top' src={bg}></CardImg>
                        <CardBody></CardBody>
                    </Card>

                    <br></br>

                    <Card style={{ width: '18rem' }}>
                        <CardImg variant='top' src={bg}></CardImg>
                        <CardBody></CardBody>
                    </Card>
                </div>
            </Col>
        </Row>
    );
}

export default ProjectTab;