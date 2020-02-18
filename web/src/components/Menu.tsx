import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Menu() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">EMS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#calendar">Calendar</Nav.Link>
                    <Nav.Link href="#documents">Documents</Nav.Link>
                </Nav>
                <DropdownButton id="dropdown-basic-button" title="Welcome, User">
                    <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                </DropdownButton>
            </Navbar>
        </>
    );
}

export default Menu;
