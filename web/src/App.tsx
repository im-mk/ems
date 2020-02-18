import React from 'react';
import Calendar from './components/Calendar';
import Menu from './components/Menu';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return (
    <div >
      <div className="App-header">
        <Menu />
      </div>
      <Container fluid>
        <Calendar />
      </Container>
    </div>
  );
}

export default App;
