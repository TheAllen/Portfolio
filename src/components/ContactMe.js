import React from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import { Form, Button} from 'react-bootstrap';
import './contactme.css';

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


        this.setState({
            disabled: true
        });
        const oldUrl = 'http://localhost:8000/api/email';
        const url = 'http://allenli-email.herokuapp.com/api/email';
        axios.post(url, this.state)
        .then(res => {
            if(res.data.success) {
                this.setState({
                    disabled: false,
                    emailSent: true
                });
            }else {
                this.setState({
                    disabled: false,
                    emailSent: false
    
                });
            }
        })
        .catch(err => {
            this.setState({
                disabled: false,
                emailSent: false

            });
        });
    }

 
    render() {
        return (
            <div>
                <Form style={{ fontFamily: 'Pacifico' }} onSubmit={this.onSubmit} >
                    <h3 style={{ marginTop: "40px" }}>Let's Chat</h3>
                    <br></br>
                    <h4>Email is one of the best way to contact me</h4>
                    <h5>Email: Liangli0408@gmail.com</h5>
                    <br></br>
                    <hr
                        style={{
                            color: 'blue',
                            height: 1

                        }}
                    />

                    <h1>Send a message</h1>
                    <br></br>

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

                 
                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

                    <br></br>
                    <br></br>
                </Form>
            </div>
        );
    }
};

export default ContactMe;