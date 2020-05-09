import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BookHoliday from './BookHoliday';
import HolidaysList from './HolidaysList';
import { GetHolidays } from '../services/Holiday/HolidaysService';
import IHoliday from '../services/Holiday/types/IHoliday';
import { useSelector } from 'react-redux';
import { selectToken } from '../loginSlice';

interface IState {
    Holidays: IHoliday[]
}

const Holidays: React.FC = () => {

    const [state, setState] = useState<IState>({ Holidays: [] });
    const token = useSelector(selectToken);

    useEffect(() => {
        (async () => {
            const holidays = await GetHolidays(token);
            setState({ Holidays: holidays })
        })();
    }, []);

    return (
        <div>
            <ActionMenu />
            <HolidaysList Holidays={state.Holidays} />
        </div>
    );
}

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

export default Holidays;