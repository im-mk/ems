import React, { useState, useEffect } from 'react';
import HolidaysList from './HolidaysList';
import { GetHolidays } from '../../services/Holiday/HolidaysService';
import IHoliday from '../../services/Holiday/types/IHoliday';
import { useSelector } from 'react-redux';
import { SelectToken } from '../Login/Reducer';
import ActionMenu from '../Documents/ActionMenu';

interface IState {
    Holidays: IHoliday[]
}

const Holidays: React.FC = () => {

    const [state, setState] = useState<IState>({ Holidays: [] });
    const token = useSelector(SelectToken);

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

export default Holidays;