import React, { useEffect } from 'react';
import DocumentsList from './DocumentsList';
import IDocument from '../../services/Documents/types/IDocument';
import { useSelector, useDispatch } from 'react-redux';
import ActionMenu from './ActionMenu';
import { DocumentsRequest } from './Action';
import { SelectDocuments } from './Reducer';
import Pages from './Pages';

const Documents: React.FC = () => {

    const dispatch = useDispatch();
    const documents:IDocument[] = useSelector(SelectDocuments);

    useEffect(() => {
        dispatch(DocumentsRequest());
    }, []);

    return (
        <div>
            <ActionMenu />
            <DocumentsList Documents={documents} />
            <Pages Pages={documents.length} />
        </div>
    );
}

export default Documents;