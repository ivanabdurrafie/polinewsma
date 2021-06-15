import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";

export default class Navbar2 extends Component {
    render() {
      return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Admin</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="#logout">Logout</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
    }
  }