import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { selectToken } from '../../loginSlice';
import { Create } from '../../services/Documents/DocumentsService';

interface IProps {
    onHide: () => void,
    show: boolean
}

interface IState {
    selectedFile: File | null;
    title: string;
    comment: string;
}

function UploadDocument(props: IProps) {

    const [state, setState] = useState<IState>({ selectedFile: null, title: '', comment: ''})
    
    const token = useSelector(selectToken);
    
    const handleUpload = async () => {
        var result = await Create(token, state.selectedFile, state.title, state.comment);
        if (result)
        {
            props.onHide();
        }
    }

    const handleComment = (eve: React.FormEvent) => {
        setState({...state, comment: (eve.target as any).value })
    }

    const handleTitle = (eve: React.FormEvent) => {
        setState({...state, title: (eve.target as any).value })
    }

    const handleSelectedFile = (eve: React.FormEvent) => {
        if ((eve.target as any).files) {
            setState({...state, selectedFile: (eve.target as any).files[0] })
        }
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Book Holiday
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Row>
                    <Form.Label column sm={3}>File:</Form.Label>
                    <Form.Group>
                        <Form.Control type="file" name="file" onChange={handleSelectedFile} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label column sm={3}>Title:</Form.Label>
                    <Form.Group>
                        <Form.Control type="text" name="title" onChange={handleTitle} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label column sm={3}>Comments</Form.Label>
                    <Form.Group>
                        <Form.Control size="lg" as="textarea" rows={3} name="comments" onChange={handleComment} />
                    </Form.Group>
                </Form.Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cancel</Button>
                <Button variant="primary" onClick={handleUpload}>Send</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UploadDocument;