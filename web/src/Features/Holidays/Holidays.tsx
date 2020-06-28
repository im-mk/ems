import React, { useEffect } from 'react';
import HolidaysList from './HolidaysList';
import IHoliday from '../../services/Holiday/types/IHoliday';
import { useSelector, useDispatch } from 'react-redux';
import ActionMenu from './ActionMenu';
import { SelectHolidays } from './Reducer';
import { HolidaysGetRequest } from './Action';

const Holidays: React.FC = () => {

    const dispatch = useDispatch();    
    const holidays:IHoliday[] = useSelector(SelectHolidays);

    useEffect(() => {
        dispatch(HolidaysGetRequest());
    }, []);

    return (
        <div>
            <ActionMenu />
            <HolidaysList Holidays={holidays} />
        </div>
    );
}

export default Holidays;