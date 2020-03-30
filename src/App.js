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

import SlideShow from './components/SlideShow';
import AboutMe from './components/AboutMe';
import ProjectsTab from './components/ProjectsTab';
import ContactMe from './components/ContactMe';

import bg from './images/nyc.jpg'
import pic1 from './images/victoria.jpg'
import pic2 from './images/tokyo.jpg'
import logo from './images/logo.jpg'
import lucerne from './images/lucerne.jpg';
import paris from './images/paris.jpg';
import hk from './images/hongkong.jpg';
import brussels from './images/brussels.JPG';
import baliRice from './images/baliRice.JPG';
import islandTemp from './images/islandTemp.JPG';
import lucerneHarbor from './images/lucerneharbor.JPG';
import minsha from './images/desert.JPG';
import louvre from './images/louvre.JPG';
import arc from './images/arc.JPG';
import venice from './images/venice.JPG';
import tirta from './images/tirtagangga.JPG';
import parisView from './images/parisView.JPG';
import monalisa from './images/monalisa.JPG';
import amsterdam from './images/amsterdam.JPG'
import innsbruck from './images/insbruck.JPG';
import baliBeach from './images/baliBeach.JPG';
import osakaCastle from './images/osakaCastle.JPG';
import mtfuji from './images/mtfuji.JPG';
import shanghai from './images/shanghai.JPG';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/card-style.css';



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

    const items1 = [
        {
            src: lucerneHarbor,
            altText: 'Slide 1',
            caption: 'Lucerne',
            header: 'Switzerland',
            key: '1'
        },
        {
            src: lucerne,
            altText: 'Slide 2',
            caption: '',
            header: 'Lucerne',
            key: '2'
        },
        {
            src: amsterdam,
            altText: 'Slide 3',
            caption: 'Amsterdam',
            header: 'Netherlands',
            key: '3'
        },
        {
            src: innsbruck,
            altText: 'Slide 3',
            caption: 'Innsbruck',
            header: 'Austria',
            key: '4'
        },
        {
            src: shanghai,
            altText: 'Slide 3',
            caption: 'The Bund',
            header: 'Shanghai',
            key: '5'
        }

    ];

    const items2 = [
        {
            src: paris,
            altText: 'Slide 1',
            caption: 'Eiffel Tower',
            header: 'Paris',
            key: '1'
        },
        {
            src: louvre,
            altText: 'Slide 2',
            caption: '',
            header: 'Louvre Museum',
            key: '2'
        },
        {
            src: arc,
            altText: 'Slide 3',
            caption: '',
            header: 'Arc de Triomphe',
            key: '3'
        },
        {
            src: parisView,
            altText: 'Slide 3',
            caption: '',
            header: 'A View of Paris',
            key: '4'
        },
        {
            src: monalisa,
            altText: 'Slide 3',
            caption: '',
            header: 'The Mona Lisa',
            key: '5'
        }

    ];


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



            <div className="ui container" style={{ marginTop: '10px', backgroundImage: 'linear-gradient(0.35turn, #ffccff, #ebf8e1, #ccccff)', borderRadius: "8px", zIndex: "1", width: '100%' }}>
                <Nav className='nav nav-fill justify-content-center pill' tabs style={{ cursor: 'pointer' }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}>
                            <h4 style={{ fontFamily: 'Pacifico' }}>About me</h4>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}>
                            <h4 style={{ fontFamily: 'Pacifico' }}>Projects</h4>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink

                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3') }}>
                            <h4 style={{ fontFamily: 'Pacifico' }}>Travels</h4>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4') }}>
                            <h4 style={{ fontFamily: 'Pacifico' }}>Contact Me</h4>

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
                        <div>
                            <br></br>
                            <ProjectsTab></ProjectsTab>

                        </div>

                    </TabPane>

                    {/* Travels */}
                    <TabPane tabId="3">
                        <br></br>
                        <div style={{ fontFamily: 'pacifico' }}>

                            <Row className='justify-content-md-center'>

                                <h2>Seeing New Places</h2>

                            </Row>
                            <br></br>
                            
                            <Row className='justify-content-md-center'>


                                <h5 >I believe that traveling is one of the most exhilarating and enlightening experiences!</h5>

                            </Row>

                            
                            {lineBreak()}
                            <br></br>

                            {/* First Row */}
                            <Row className='justify-content-md-center'>
                                <Col xs sm='6'>
                                    {/* Image slide show */}
                                    <SlideShow items={items1}></SlideShow>
                                </Col>

                                {lineBreak()}

                                <Col sm='6' style={{ alignSelf: 'center' }}>
                                    <Card style={{ width: '31rem' }}>
                                        <CardImg variant='top' src={venice}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Venice, Italy</CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <br></br>
                            {lineBreak()}
                            <br></br>

                            {/* Second Row */}
                            <Row>

                                <Col sm='6' style={{ alignSelf: 'center' }}>
                                    <Card style={{ width: '31rem' }}>
                                        <CardImg variant='top' src={pic2}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Looking down on top of Tokyo</CardBody>
                                    </Card>

                                </Col>

                                <Col sm='6'>

                                    <SlideShow items={items2}></SlideShow>
                                </Col>

                            </Row>

                            {lineBreak()}

                            {/* Third Row */}
                            <Row>
                                <Col sm='4'>
                                    <Card style={{ width: '22rem' }}>
                                        <CardImg variant='top' src={mtfuji}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Mount Fuji, Japan</CardBody>
                                    </Card>
                                </Col>
                                <Col sm='4'>
                                    <Card style={{ width: '22rem' }}>
                                        <CardImg variant='top' src={hk}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>View Morning View of Hong Kong</CardBody>
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

                            <Row className="justify-content-md-center" style={{ alignItems: 'center' }}>
                                <Col xs md='auto' style={{ alignSelf: 'center' }}>
                                    <Card style={{ width: '33rem' }}>
                                        <CardImg variant='top' src={baliRice}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Rice field in Bali</CardBody>
                                    </Card>
                                </Col>

                                <Col md='auto' style={{ alignSelf: 'center' }}>
                                    <Card style={{ width: '33rem' }}>
                                        <CardImg variant='top' src={tirta}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Tirta Gangga in Bali</CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            {lineBreak()}

                            <Row>
                                <Col sm='4'>
                                    <Card style={{ width: '22rem' }}>
                                        <CardImg variant='top' src={baliBeach}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Beach in Bali</CardBody>
                                    </Card>
                                </Col>
                                <Col sm='4'>
                                    <Card style={{ width: '22rem' }}>
                                        <CardImg variant='top' src={islandTemp}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Tanah Lot in West Bali</CardBody>
                                    </Card>
                                </Col>
                                <Col sm='4'>
                                    <Card style={{ width: '22rem' }}>
                                        <CardImg variant='top' src={osakaCastle}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Osaka Castle, Japan</CardBody>
                                    </Card>
                                </Col>

                            </Row>

                            {lineBreak()}

                            <Row className="justify-content-md-center" style={{ alignItems: 'center' }}>
                                <Col xs md='auto' style={{ alignSelf: 'center' }}>
                                    <Card style={{ width: '33rem' }}>
                                        <CardImg variant='top' src={minsha}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Minsha desert, China</CardBody>
                                    </Card>
                                </Col>

                                <Col md='auto' style={{ alignSelf: 'center' }}>
                                    <Card style={{ width: '33rem' }}>
                                        <CardImg variant='top' src={brussels}></CardImg>
                                        <CardBody style={{ textAlign: 'center', fontFamily: 'Pacifico' }}>Galeries Royales Saint-Hubert</CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <br></br>
                            <br></br>

                        </div>

                    </TabPane>

                    <TabPane tabId="4">
                        <ContactMe></ContactMe>
                    </TabPane>
                </TabContent>
            </div>





            {/* Foot component */}
            <footer className="page-footer font-small blue">


                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://github.com/TheAllen"> Liang J. Li</a>
                </div>


            </footer>

        </div>

    );

};

export default App;