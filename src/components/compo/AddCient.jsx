import React, { Component } from 'react';
import { Container, Form, Col, Button, Row } from "react-bootstrap";

export default class AddCient extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',email:'',phone:'',password:'',address:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        const {name,value} =e.target;
        this.setState({[name]: value});
      }
    
      handleSubmit(e) {
        this.props.handleUserData(this.state);
        // console.log(this.state);
        this.setState({name: '',email:'',phone:'',password:'',address:''});
        e.preventDefault();
      }
    
    render() {
        return (
            <div>
                <Container>
                    <h2>Add Client</h2>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="FormGroupName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Client Name" value={this.state.name} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="FormGroupEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="FormGroupPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group controlId="FormGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="FormGroupAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="success" type="submit" value="Submit">Save</Button>
                                    <Button variant="danger">Cancel</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={6}>
                        <Button >Back to List</Button>
                         </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

