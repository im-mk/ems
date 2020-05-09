import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Menu.css';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Menu() {
    return (
        <Navbar bg="primary" variant="dark" className="navigation" >
            <Navbar.Brand href="/">EMS</Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Button>Home</Button>
                </LinkContainer>      
                <LinkContainer to="/holidays">
                    <Button>Holidays</Button>
                </LinkContainer>
                <LinkContainer to="/wfh">
                    <Button>WFH</Button>
                </LinkContainer>
                <LinkContainer to="/documents">
                    <Button>Documents</Button>
                </LinkContainer>
                <LinkContainer to="/tasks">
                    <Button>Tasks</Button>
                </LinkContainer>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="User">
                <Dropdown.Item href="/login">Login</Dropdown.Item>
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
            </DropdownButton>
        </Navbar>
    );
}

export default Menu;
