import React from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import Cards from '../components/Cards';

import java from '../images/java.jpg';
import node from '../images/node.png';
import react from '../images/react.png';
import spring from '../images/spring.png';
import cpp from '../images/cpp.png';
import javascript from '../images/js.png';

const AboutMe = (props) => {

    return (
        <Row>
            <Col sm="12">

                {/* Tab 1 Content */}
                {/* TODO: Refactor this to another component */}
                <div className='row' style={{ width: '100%' }}>
                    <div className='col' style={{ textAlign: 'center', fontFamily: 'Georgia' }}>

                        {/* About me */}
                        <br></br>
                        <h3>About Me</h3>
                        <br></br>
                        <p>
                            Hello, my name is Allen.
                            I'm a Motivated engineer who enjoys building products. {<br></br>} I'm comfortable with fullstack,
                            I'm more interested in building scalable backend services. {<br></br>}
                            I'm looking for a role to work collaboratively in a team to solve problems. 
                            
                        </p>
                        <br></br>

                        <hr
                            style={{
                                color: 'blue',
                                height: 1

                            }}
                        />

                        <h3 >Technology</h3>
                        <br></br>
                        <p>The Technology Stacks I have worked with</p>
                        <br></br>

                        {/* The four tech cards */}
                        <Cards></Cards>

                        <br></br>
                        <br></br>


                        <hr
                            style={{
                                color: 'blue',
                                height: 1

                            }}
                        />


                        <br></br>
                        <Row>
                            <Col xs={6} md={2}>
                                <Image className="icon" src={java} style={{ height: "50%", marginLeft: "25px" }} roundedCircle />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image className="icon" src={spring} style={{ height: "50%" }} roundedCircle />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image className="icon" src={javascript} style={{ height: "50%" }} rounded />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image className="icon" src={node} style={{ height: "50%" }} roundedCircle />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image className="icon" src={react} style={{ height: "50%" }} roundedCircle />
                            </Col>
                            <Col xs={6} md={2}>
                                <Image className="icon" src={cpp} style={{ height: "50%" }} rounded />
                            </Col>
                        </Row>

                    </div>

                </div>

            </Col>
        </Row>
    )
}

export default AboutMe;