import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import UploadDocument from './UploadDocument';
import * as Icon from 'react-bootstrap-icons';

function ActionMenu() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <ButtonToolbar className="mb-3">
            <ButtonGroup className="mr-2" aria-label="First group">
                <Button variant="danger" onClick={() => setModalShow(true)}>
                    <Icon.FilePlus /> Add
                </Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" aria-label="Second group">
                <Button variant="success">
                    <Icon.ArrowRepeat /> Refresh
                </Button>
            </ButtonGroup>
            <UploadDocument
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </ButtonToolbar>
    );
}

export default ActionMenu;