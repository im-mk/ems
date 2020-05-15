import React from 'react';
import Form from 'react-bootstrap/Form';

export default function DatePart() {
    return <Form.Control as="select">
        <option>All day</option>
        <option>Am</option>
        <option>Pm</option>
    </Form.Control>
}