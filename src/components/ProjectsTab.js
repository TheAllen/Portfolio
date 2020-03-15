import React from 'react';
import { Row, Col, Card, CardTitle, CardText, CardBody, CardImg, Button } from 'reactstrap';
import CardsSlide from './CardsSlide';
import CardModal from './CardModal';

import bg from '../images/nyc.jpg';
import visualization from '../images/Lyon.png';
import sylvanas from '../images/sylvanas.png';
import taskmanager from '../images/taskmanager.png';
import MyriadPic from '../images/MyriadPic.png';

import visualDemo from '../vids/visualDemo1.mp4';
import sylvanasDemo from '../vids/sylvanasVid.mp4';
import myriadVid from '../vids/streamApp.mp4';


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
                    content={<CardModal modalTitle="City Visualization 3D" buttonLabel="See Demo" path = 'https://github.com/TheAllen/Skyscraper3DVisualization' content="Built using Leaflet and Esri ArcGIS api" video={visualDemo}></CardModal>}
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
                    content={<CardModal modalTitle="3D Model Loader" buttonLabel="See Demo" video = {sylvanasDemo} path = 'https://github.com/TheAllen/3DModelLoader' content="The objective of this project was to learn about advanced camera concepts and loading large OBJ models to a scene. Learned a lot about how to work with OpenGL."
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
                    imagePath={MyriadPic}
                    title={"Myriad Streaming App"}
                    text={
                        <div>

                            <p>This app allows users to stream with OBS and share their contents</p>

                            {lineBreak()}

                            <h5>React</h5>
                            <h5>NodeJS | Express</h5>
                            <h5>RTMP Server</h5>
                            <h5>Spring Boot WebSocket</h5>
                            <h5>MongoDB</h5>
                            <h5>Google OAuth2</h5>
                        </div>
                    }
                    content={<CardModal modalTitle="Streaming App" buttonLabel="See Demo"  video={myriadVid} path='https://github.com/TheAllen'></CardModal>}
                ></CardsSlide>

                {lineBreak()}



                <CardsSlide
                    imagePath={taskmanager}
                    title={"Myriad Streaming App"}
                    text={
                        <div>

                            <p>A task management app with a Kanban board</p>

                            {lineBreak()}

                            <h4>React | Redux</h4>
                            <h4>Java Spring Boot</h4>
                            <h5>mySQL</h5>
                        </div>
                    }
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