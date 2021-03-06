import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Menu.css';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { Logout } from './Login/Action';

const Menu : React.FC = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(Logout());
    }

    return (
        <Navbar bg="primary" variant="dark" className="mb-3" >
            <Navbar.Brand href="/">EMS</Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Button>Home</Button>
                </LinkContainer>      
                <LinkContainer to="/holidays">
                    <Button>Holidays</Button>
                </LinkContainer>
                <LinkContainer to="/documents">
                    <Button>Documents</Button>
                </LinkContainer>
                <LinkContainer to="/wfh">
                    <Button>WFH</Button>
                </LinkContainer>
                <LinkContainer to="/tasks">
                    <Button>Tasks</Button>
                </LinkContainer>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="User">
                <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
            </DropdownButton>
        </Navbar>
    );
}

export default Menu;
