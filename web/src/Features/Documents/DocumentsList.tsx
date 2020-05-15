import React from 'react';
import Table from 'react-bootstrap/Table';
import IDocument from '../../services/Documents/types/IDocument';
import { Button, Form } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { DocumentsDownloadRequest } from './Action';

interface IProps {
    Documents: IDocument[]
}

const DocumentsList: React.FC<IProps> = (props) => {
    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th><Form.Check type='checkbox'/></th>
                    <th></th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Comments</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { props.Documents.map((holiday, index) => RenderRow(holiday, index))}
            </tbody>
        </Table>
    )
}

const RenderRow = (document: IDocument, index: number) => {
    
    const dispatch = useDispatch();

    const handleClick = (eve:React.FormEvent) => {
        eve.preventDefault();    

        dispatch(DocumentsDownloadRequest({
            Id: document.id, 
            Title: document.title, 
            Path: document.path
        }));
    }

    return (
        <tr key={index}>
            <td> <Form.Check type='checkbox'/></td>
            <td>{index + 1}</td>
            <td>{document.dateUploaded}</td>
            <td>{document.title}</td>
            <td>{document.comments}</td>
            <td><Button className="float-right" onClick={handleClick}><Icon.Download /></Button></td>
        </tr>
    )
}

export default DocumentsList;