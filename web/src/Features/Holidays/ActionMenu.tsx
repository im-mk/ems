import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BookHoliday from './BookHoliday';

function ActionMenu() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <ButtonToolbar className="App-header">
            <ButtonGroup>
                <Button variant="danger" onClick={() => setModalShow(true)}>
                    Book Holiday
                </Button>
            </ButtonGroup>
            <BookHoliday
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </ButtonToolbar>
    );
}
export default ActionMenu;