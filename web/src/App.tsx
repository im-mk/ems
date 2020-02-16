import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './App.css';


function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ButtonToolbar className="App-header">
      <ButtonGroup vertical>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Book Holiday
      </Button>
      </ButtonGroup>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

interface IProps {
  onHide: () => void,
  show: boolean
}

function MyVerticallyCenteredModal(props: IProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Holiday
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group row">
          <label>
            Start Date:
            <input className="form-control" type="date" name="startDate" />
            <select className="form-control">
              <option>am</option>
              <option>pm</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            End Date:
            <input className="form-control" type="date" name="endDate" />
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default App;
