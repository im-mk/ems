import React from 'react';
import Table from 'react-bootstrap/Table';
import ISummary from '../types/ISummary';
import IHoliday from '../types/IHoliday';

interface IProps {
    Summary: ISummary
}

function HolidaySummary(props: IProps) {
    const holidays = props.Summary.Holidays;

    return (
        <div>
            <h5>Holiday Summary</h5>
            <div>
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
                        {holidays.map((holiday, index) => RenderRow(holiday, index))}
                    </tbody>
                </Table>

            </div>
        </div>
    );
}

function RenderRow(holiday: IHoliday, index: number) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{holiday.Date}</td>
            <td>{holiday.DateRequested}</td>
            <td>{holiday.ApprovedBy}</td>
            <td>{holiday.DateApproved}</td>
        </tr>
    )
}

export default HolidaySummary;
