import React from 'react';
import Table from 'react-bootstrap/Table';

function HolidaySummary() {
    return (
        <div>
            <h4>Holiday Summary</h4>
            <div>
                <Table striped hover>
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
                        <tr>
                            <td>2</td>
                            <td>25/01/2012</td>
                            <td>Comments</td>
                            <td>Thornton</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </div>
    );
}

export default HolidaySummary;
