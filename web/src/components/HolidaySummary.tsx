import React from 'react';
import Table from 'react-bootstrap/Table';
import ISummary from '../types/ISummary';

interface IProps {
    Summary: ISummary
}

function HolidaySummary(props: IProps) {
    return (
        <div>
            <h5>Holiday Summary</h5>
            <div>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Comments</th>
                            <th>Approved By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>25/01/2012</td>
                            <td>Comments</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </div>
    );
}

export default HolidaySummary;
