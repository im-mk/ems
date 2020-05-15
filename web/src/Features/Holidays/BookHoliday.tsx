import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePart from './DatePart';

interface IProps {
    onHide: () => void,
    show: boolean
}

function BookHoliday(props: IProps) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Book Holiday
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Row>
                    <Form.Label column sm={3}>Start Date:</Form.Label>
                    <Form.Group>
                        <Form.Control type="date" name="startDate" />
                    </Form.Group>
                    <Form.Group>
                        <DatePart />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label column sm={3}>End Date:</Form.Label>
                    <Form.Group>
                        <Form.Control type="date" name="endDate" />
                    </Form.Group>
                    <Form.Group>
                        <DatePart />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label column sm={3}>Comments</Form.Label>
                    <Form.Group>
                        <Form.Control size="lg" as="textarea" rows={3} name="comments" />
                    </Form.Group>
                </Form.Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cancel</Button>
                <Button variant="primary">Send</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BookHoliday;