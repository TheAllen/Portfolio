import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Overlay } from 'react-bootstrap';
import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink,
    Card, Button, CardBody, CardImg, Row, Col, TabPane,
    CardTitle, CardText, TabContent, ButtonDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import classnames from 'classnames';

// Components
import CardModal from './components/CardModal';
import SlideShow from './components/SlideShow';
import CardsSlide from './components/CardsSlide';
import Cards from './components/Cards';
import TechCard from './components/TechCard';
import AboutMe from './components/AboutMe';
import ProjectsTab from './components/ProjectsTab';

import bg from './images/nyc.jpg'
import pic1 from './images/victoria.jpg'
import pic2 from './images/tokyo.jpg'
import logo from './images/logo.jpg'

import sylvanas from './images/sylvanas.png';
import visualization from './images/Lyon.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/card-style.css';

//Particles
import Particles from 'react-particles-js';


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


const App = (props) => {

    //Tabs
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    //Navbar button dropdown
    const [dropdownOpen, setOpen] = useState(false);
    const menuToggle = () => setOpen(!dropdownOpen);


    return (
        // 0.35turn
        //'linear-gradient(0.35turn, #ffccff, #ebf8e1, #ccccff)'
        <div className="Container" style={{ backgroundImage: 'linear-gradient(0.35turn, #e66465, #9198e5, #ebf8e1)', scrollBehavior: "smooth" }}>

            <Navbar color="dark" light>
                <NavbarBrand href="/" className="mr-auto"><div style={{ fontFamily: 'Pacifico', color: '#80d4ff' }}>
                    <div className="row">

                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-center"
                            style={{ borderRadius: "25px", marginLeft: '10px' }}
                        />

                        <h1 style={{ marginLeft: '10px' }}>Allen Li</h1>
                    </div>
                </div>
                </NavbarBrand>

                {/* <Button color="primary" >Menu</Button> */}
                <ButtonDropdown isOpen={dropdownOpen} toggle={menuToggle} direction="left">
                    <DropdownToggle carpet style={{ fontFamily: "Pacifico" }}>Menu</DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem href="https://github.com/TheAllen">Github</DropdownItem>
                        <DropdownItem divider></DropdownItem>
                        <DropdownItem>Resume</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>


            </Navbar>


            {/* <br></br>
            <br></br>
            <br></br>
            <br></br> */}
            {/* <div fluid style={{backgroundImage:{bg}, width: '100%'}}></div> */}
            <Image src={bg} fluid style={{ width: '100%', height: '100%', position: "relative", zIndex: "0", opacity: "0.80" }}></Image>



            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 400
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} style={{ marginTop: '-800px', zIndex: 999 }} />


            <div className="ui container" style={{ marginTop: '10px', backgroundImage: 'linear-gradient(0.35turn, #ffccff, #ebf8e1, #ccccff)', borderRadius: "8px", zIndex: "1", width: '100%' }}>
                <Nav className='nav nav-fill justify-content-center' tabs style={{ cursor: 'pointer' }}>
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

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4') }}>
                            <h2 style={{ fontFamily: 'Pacifico' }}>Contact Me</h2>

                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>

                    {/* About me 1 */}
                    <TabPane tabId="1">
                        <AboutMe></AboutMe>
                    </TabPane>

                    {/* Projects Tab 2 */}
                    <TabPane tabId="2">
                        <br></br>
                        <ProjectsTab></ProjectsTab>
                    </TabPane>

                    {/* Travels */}
                    <TabPane tabId="3">
                        <br></br>
                        <div>
                            <Row>
                                <Col sm='6'>
                                    {/* Image slide show */}
                                    <SlideShow ></SlideShow>
                                </Col>

                                <hr
                                    style={{
                                        color: 'blue',
                                        height: 1

                                    }}
                                />

                                <Col sm='5' style={{ alignSelf: 'center' }}>
                                    <Card style={{ width: '30rem' }}>
                                        <CardImg variant='top' src={pic1}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Victoria Harbor at dawn</CardBody>
                                    </Card>
                                </Col>

                                <hr
                                    style={{
                                        color: 'blue',
                                        height: 1

                                    }}
                                />
                                {/* Line break */}

                                <br></br>
                                <Col sm='6' style={{ alignSelf: 'center' }}>
                                    <Card style={{ width: '30rem' }}>
                                        <CardImg variant='top' src={pic2}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Looking down on top of Tokyo</CardBody>
                                    </Card>

                                </Col>

                                <Col sm='6'>

                                    <SlideShow ></SlideShow>
                                </Col>

                            </Row>

                            {lineBreak()}

                            <Row>
                                <Col sm='4'>
                                    <Card style={{ width: '22rem' }}>
                                        <CardImg variant='top' src={pic1}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Victoria Harbor at dawn</CardBody>
                                    </Card>
                                </Col>
                                <Col sm='4'>
                                    <Card style={{ width: '22rem' }}>
                                        <CardImg variant='top' src={pic1}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Victoria Harbor at dawn</CardBody>
                                    </Card>
                                </Col>
                                <Col sm='4'>
                                    <Card style={{ width: '22rem' }}>
                                        <CardImg variant='top' src={pic1}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Victoria Harbor at dawn</CardBody>
                                    </Card>
                                </Col>

                            </Row>

                            {lineBreak()}

                        </div>

                    </TabPane>

                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">

                                {/* Tab 1 Content */}
                                {/* TODO: Refactor this to another component */}
                                <div className='row' style={{ width: '100%' }}>
                                    <div className='col' style={{ textAlign: 'center', fontFamily: 'Georgia' }}>
                                        <br></br>
                                        <h2 >Get In Touch</h2>

                                        <br></br>
                                        <p>The Technology Stacks I have worked with</p>
                                        <br></br>
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
                </TabContent>
            </div>



            {/* <br></br>
            <br></br>
            <br></br> */}

            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 250
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} style={{ marginTop: '-750px', height: "400px" }} />


            {/* Foot component */}
            <footer className="page-footer font-small blue">


                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> Liang J. Li</a>
                </div>


            </footer>

        </div>

    );

};

export default App;