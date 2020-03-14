import React from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import { Form } from 'react-bootstrap';

class ContactMe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    onChange = () => {
        
    }

    render() {
        return (
            <div>
                <Form style={{ fontFamily: 'Pacifico' }}>
                    <h1 >Let's Talk</h1>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control id='full-name' value={this.name}></Form.Control>
                    </Form.Group>
                </Form>
            </div>
        );
    }
};

export default ContactMe;