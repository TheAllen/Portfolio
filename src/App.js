import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink,
    Card, Button, CardBody, CardImg, Row, Col, TabPane,
    CardTitle, CardText, TabContent, ButtonDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import classnames from 'classnames';

import CardModal from './components/CardModal';
import SlideShow from './components/SlideShow';
import CardsSlide from './components/CardsSlide';
import Cards from './components/Cards';

import bg from './images/nyc.jpg'
import pic1 from './images/victoria.jpg'
import pic2 from './images/tokyo.jpg'
import logo from './images/logo.jpg'
import frontend from './images/frontend.png'

import sylvanas from './images/sylvanas.png';
import visualization from './images/Lyon.png'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

    //Tabs
    const [activeTab, setActiveTab] = useState('2');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    //Navbar button dropdown
    const [dropdownOpen, setOpen] = useState(false);
    const menuToggle = () => setOpen(!dropdownOpen);


    return (
        // 0.35turn
        <div className="Container" style={{ backgroundImage: 'linear-gradient(0.35turn, #ffccff, #ebf8e1, #ccccff)' }}>

            <Navbar color="dark" light>
                <NavbarBrand href="/" className="mr-auto"><div style={{ fontFamily: 'Pacifico', color: '#80d4ff' }}>
                    <div className="row">

                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-center"
                            style={{ borderRadius: "25px" }}
                        />
                        <h1>Liang Li</h1>
                    </div>
                </div>
                </NavbarBrand>

                {/* <Button color="primary" >Menu</Button> */}
                <ButtonDropdown isOpen={dropdownOpen} toggle={menuToggle} direction="left">
                    <DropdownToggle carpet style={{ fontFamily: "Pacifico" }}>Menu</DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem href="https://github.com/TheAllen">Github</DropdownItem>
                        <DropdownItem divider></DropdownItem>
                        <DropdownItem>Contact me</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>


            </Navbar>


            <Image src={bg} fluid style={{ width: '100%', height: '80%', backgroundImage: 'linear-gradient(to right bottom, #e66465, #9198e5)', position: "relative", zIndex: "1" }}></Image>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className='ui container'>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}>
                            <h2 style={{ fontFamily: 'Pacifico' }}>About me</h2>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}>
                            <h2 style={{ fontFamily: 'Pacifico' }}>Projects</h2>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3') }}>
                            <h2 style={{ fontFamily: 'Pacifico' }}>Travels</h2>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">

                                {/* Tab 1 Content */}
                                {/* TODO: Refactor this to another component */}
                                <div className='row' style={{ width: '100%' }}>
                                    <div className='col' style={{ textAlign: 'center', fontFamily: 'Georgia' }}>
                                        <h2 >Technology</h2>
                                        <p>The Technology Stacks I have worked with</p>

                                        {/* The four tech cards */}
                                        <Cards></Cards>

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

                                </div>

                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                {/* Cards for projects */}

                                {/* 3D Visualization Project */}
                                <CardsSlide
                                    imagePath={visualization}
                                    title={"City Visualization 3D"}
                                    text={"This app generates beautiful 3D models of famous Cities around the world!"}
                                    content={<CardModal modalTitle="City Visualization 3D" buttonLabel="See Demo" content="Built using Leaflet and Esri ArcGIS api"></CardModal>}
                                ></CardsSlide>

                                <hr
                                    style={{
                                        color: 'blue',
                                        // backgroundColor: 'blue',
                                        height: 1

                                    }}
                                />

                                {/* TODO add more projects */}
                                <CardsSlide
                                    imagePath={sylvanas}
                                    title={"OpenGL 3D Model"}
                                    text={"App that allows you to load OBJ models in and view/edit the model. Implemented a quaternion-based camera"}
                                    content={<CardModal modalTitle="3D Model Loader" buttonLabel="See Demo" content="The objective of this project was to learn about advanced camera concepts and loading large OBJ models to a scene. Learned a lot about how to work with OpenGL."
                                    ></CardModal>}
                                ></CardsSlide>

                                <hr
                                    style={{
                                        color: 'blue',
                                        height: 1

                                    }}
                                />

                                {/* All Projects --> Github */}
                                <Card body style={{ fontFamily: 'Pacifico', borderRadius: '7px', textAlign: 'center' }}>
                                    <CardTitle ><h3>All Projects</h3></CardTitle>
                                    <CardText>This is my Github containing all my other Projects</CardText>
                                    <Button color='primary' href='https://github.com/TheAllen'>Check out Projects</Button>
                                </Card>

                                {/* TODO: Add Project tab */}


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

                            <Col sm="6">

                                <CardsSlide
                                    imagePath={visualization}
                                    title={"3D Visualization"}
                                    content={<CardModal modalTitle="Streaming App" buttonLabel="See Demo"></CardModal>}
                                ></CardsSlide>
                                
                                <hr
                                    style={{
                                        color: 'blue',
                                        height: 1

                                    }}
                                />

                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>

                                {/* TODO: Add Project tab */}


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
                    </TabPane>

                    {/* Travels */}
                    <TabPane tabId="3">
                        <div>
                            <Row>

                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>

                                    {/* TODO: Add Project tab */}


                                </Col>
                                <Col sm='6'>

                                    <SlideShow ></SlideShow>
                                </Col>


                                <Col sm='6'>
                                    <Card style={{ width: '25rem' }}>
                                        <CardImg variant='top' src={pic1}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Victoria Harbor at dawn</CardBody>
                                    </Card>
                                </Col>
                                {/* Line break */}
                                <br></br>
                                <Col sm='6'>
                                    <Card style={{ width: '25rem' }}>
                                        <CardImg variant='top' src={pic2}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Looking down on top of Tokyo</CardBody>
                                    </Card>

                                </Col>

                            </Row>

                        </div>

                    </TabPane>
                </TabContent>
            </div>



            <br></br>
            <br></br>
            <br></br>





        </div>

    );

};

export default App;