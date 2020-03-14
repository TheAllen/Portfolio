import React from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import { Form, Button} from 'react-bootstrap';

class ContactMe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null
        }

    }

    handleChange = (e) => {
        
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({ 
            [name] : value 
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Form style={{ fontFamily: 'Pacifico' }} onSubmit={this.onSubmit} >
                    <h1 style={{ marginTop: "40px" }}>Let's Chat</h1>

                    <hr
                        style={{
                            color: 'blue',
                            height: 1

                        }}
                    />

                    <Form.Group style={{ fontSize: 18 }} >
                        <Form.Label>Name</Form.Label>
                        <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange}></Form.Control>
                        <br></br>
                        <Form.Label>Email</Form.Label>
                        <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange}></Form.Control>
                        <br></br>
                        <Form.Label>Message</Form.Label>
                        <Form.Control id='message' name='message' type='text' value={this.state.message} as='textarea' rows='4' onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <br></br>

                    <Button className="d-inline-block" type="submit" disabled={this.state.disabled}> Send </Button>

                    <br></br>
                    <br></br>

                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                </Form>
            </div>
        );
    }
};

export default ContactMe;