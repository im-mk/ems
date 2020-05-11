import React from 'react';
import Table from 'react-bootstrap/Table';
import IDocument from './../../services/Documents/types/IDocument';
import { Button } from 'react-bootstrap';
import { Link, DownloadFile } from '../../services/Documents/DocumentsService';
import * as Icon from 'react-bootstrap-icons';

interface IProps {
    Documents: IDocument[],
    Token: string
}

const DocumentsList: React.FC<IProps> = (props) => {
    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Comments</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.Documents.map((holiday, index) => RenderRow(holiday, index, props.Token))}
            </tbody>
        </Table>
    )
}

const RenderRow = (document: IDocument, index: number, token: string) => {
    
    const handleClick = (eve:React.FormEvent) => {
        eve.preventDefault();    

        (async () => {
            const result = await Link(token, document.id);
            DownloadFile(result, document.title, document.path);
        })();
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{document.dateUploaded}</td>
            <td>{document.title}</td>
            <td>{document.comments}</td>
            <td><Button onClick={handleClick}><Icon.Download /></Button></td>
        </tr>
    )
}

export default DocumentsList;