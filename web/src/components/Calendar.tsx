import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BookHoliday from './BookHoliday';
import HolidaySummary from './HolidaySummary';
import ISummary from '../types/ISummary';
import { GetSummary } from '../services/Summary/GetSummary';

interface IState {
    Summary: ISummary
}

interface IProps {
}

class Calendar extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { Summary: { Holidays: [] } };
    }

    componentDidMount() {
        GetSummary(1).then(summary => {
            console.log(summary.Holidays);
            this.setState({ Summary: summary })
        })
            .catch(error => this.setState({ Summary: { Holidays: [] } }));
    }

    render() {
        return (
            <div>
                <Row>
                    <LeftMenu />
                    <Col md={10}>
                        <HolidaySummary Summary={this.state.Summary} />
                    </Col>
                </Row>
            </div>
        );
    }
}

function LeftMenu() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Col md={2}>
            <ButtonToolbar className="App-header">
                <ButtonGroup vertical>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Book Holiday
    </Button>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        WFH
    </Button>
                </ButtonGroup>
                <BookHoliday
                    show={modalShow}
                    onHide={() => setModalShow(false)} />
            </ButtonToolbar>
        </Col>
    );
}

export default Calendar;