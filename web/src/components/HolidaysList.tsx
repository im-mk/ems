import React from 'react';
import Table from 'react-bootstrap/Table';
import IHoliday from '../services/Holiday/types/IHoliday';

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
                    <th>Approved By</th>
                    <th>Date Approved</th>
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
            <td>{holiday.holidayOn}</td>
            <td>{holiday.dateRequested}</td>
            <td>{holiday.approvedBy}</td>
            <td>{holiday.dateApproved}</td>
        </tr>
    )
}

export default HolidaysList;