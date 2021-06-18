import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";

export default class Navbar2 extends Component {
    render() {
      return (
        <Navbar>
            <Container>
                <Navbar.Brand href="">Admin</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="/">Logout</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
    }
  }