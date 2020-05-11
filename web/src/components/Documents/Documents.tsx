import React, { useState, useEffect } from 'react';
import DocumentsList from './DocumentsList';
import { Get } from './../../services/Documents/DocumentsService';
import IDocument from './../../services/Documents/types/IDocument';
import { useSelector } from 'react-redux';
import { selectToken } from './../../loginSlice';
import ActionMenu from './ActionMenu';

interface IState {
    Documents: IDocument[]
}

const Documents: React.FC = () => {

    const [state, setState] = useState<IState>({ Documents: [] });
    const token = useSelector(selectToken);

    useEffect(() => {
        (async () => {
            const documents = await Get(token);
            setState({ Documents: documents })
        })();
    }, []);

    return (
        <div>
            <ActionMenu />
            <DocumentsList Documents={state.Documents} Token={token} />
        </div>
    );
}

export default Documents;