import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BookHoliday from './BookHoliday';
import HolidaySummary from './HolidaySummary';

function Calendar() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <Row>
                <Col md={2}>
                    <ButtonToolbar className="App-header">
                        <ButtonGroup vertical>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                Book Holiday
                    </Button>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                WFH
                    </Button>
                        </ButtonGroup>
                        <BookHoliday
                            show={modalShow}
                            onHide={() => setModalShow(false)} />
                    </ButtonToolbar>
                </Col>
                <Col md={10}>
                    <HolidaySummary />
                </Col>
            </Row>
        </div>
    );
}

export default Calendar;