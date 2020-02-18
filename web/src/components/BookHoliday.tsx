import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface IProps {
    onHide: () => void,
    show: boolean
}

function BookHoliday(props: IProps) {
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
                            <option>Am</option>
                            <option>Pm</option>
                            <option>Full day</option>
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

export default BookHoliday;