import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BookHoliday from './components/BookHoliday';
import HolidaySummary from './components/HolidaySummary';
import './App.css';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <ButtonToolbar className="App-header">
        <ButtonGroup vertical>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Book Holiday
      </Button>
        </ButtonGroup>
        <BookHoliday
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
      <HolidaySummary />
    </div>
  );
}

export default App;
