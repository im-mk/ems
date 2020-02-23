import React from 'react';
import './App.css';
import Routes from './components/Routes';
import Menu from './components/Menu';
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