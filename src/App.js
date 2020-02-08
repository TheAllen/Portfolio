import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, Button, CardBody, CardImg, Row, Col, TabPane, CardTitle, CardText, TabContent, Collapse, } from 'reactstrap';
import classnames from 'classnames';

import bg from './images/nyc.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <div className="Container" style={{ backgroundImage:'linear-gradient(0.35turn, #ffccff, #ebf8e1, #ccccff)' }}>

            <Navbar color="dark" light>
                <NavbarBrand href="/" className="mr-auto"><div style={{ fontFamily: 'Pacifico', color: '#80d4ff' }}>
                    <h2>Liang Li</h2></div>
                </NavbarBrand>

                <Button color="primary" >Menu</Button>

                <Collapse navbar >
                    <Nav>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/TheAllen">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>



            </Navbar>
            <Image src={bg} fluid style={{ width: '100%', height: '80%', backgroundImage: 'linear-gradient(to right bottom, #e66465, #9198e5)'}}></Image>
            <div className='ui container'>
                <Nav tabs style={{ textAlign: 'left' }}>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            <h2 style={{ fontFamily: 'Pacifico' }}>About me</h2>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            <h2 style={{ fontFamily: 'Pacifico' }}>Projects</h2>
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
                                        <h2 >About me</h2>
                                        <p>Learning to create powerful application to change the world. My passions are traveling, learning, and being active</p>

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
                            <Col sm="6">
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
                </TabContent>
            </div>



            <br></br>
            <br></br>
            <br></br>





        </div>

    );

};

export default App;