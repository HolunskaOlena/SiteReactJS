import React, { Component } from 'react'
import { Form, FormControl, Container, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px', marginTop: '100px'}}>
                <h1 className="text-center">Contact us</h1>
                <Form>
                    <Form.Group id="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <FormControl type="email" placeholder="Enter email"/>
                        <Form.Text>
                            We'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group id="formBasicTextarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group id="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}
