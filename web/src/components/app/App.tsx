import React from 'react';
import './App.css';
import Routes from '../Routes';
import Menu from '../Menu';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div >
      <Menu />
      <Container fluid>
        <Routes />
      </Container>
    </div>
  );
}

export default App;