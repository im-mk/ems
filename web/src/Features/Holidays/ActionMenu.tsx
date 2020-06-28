import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BookHoliday from './BookHoliday';
import * as Icon from 'react-bootstrap-icons';

function ActionMenu() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <ButtonToolbar className="mb-3 float-right">
            <ButtonGroup className="mr-2" aria-label="First group">
                <Button variant="danger" onClick={() => setModalShow(true)}>
                    <Icon.Plus /> Book Holiday
                </Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" aria-label="Second group">
                <Button variant="success">
                    <Icon.ArrowRepeat /> Refresh
                </Button>
            </ButtonGroup>
            <BookHoliday
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </ButtonToolbar>
    );
}
export default ActionMenu;