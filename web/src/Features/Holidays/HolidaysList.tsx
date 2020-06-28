import React from 'react';
import Table from 'react-bootstrap/Table';
import IHoliday from '../../services/Holiday/types/IHoliday';

interface IProps {
    Holidays: IHoliday[]
}

const HolidaysList: React.FC<IProps> = (props) => {
    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>Date</th>
                    <th>Date Requested</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.Holidays.map((holiday, index) => RenderRow(holiday, index))}
            </tbody>
        </Table>
    )
}

function RenderRow(holiday: IHoliday, index: number) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{holiday.dateFrom + ' ' + holiday.dateFromPart + ' - ' + holiday.dateTo + ' ' + holiday.dateToPart}</td>
            <td>{holiday.dateRequested}</td>
            <td>{holiday.status}</td>
        </tr>
    )
}

export default HolidaysList;