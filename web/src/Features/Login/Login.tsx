import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './Login.css';
import { LoginRequest } from './Action';

interface IState {
    email: string,
    password: string,
}

const Login: React.FC = () => {
    const [loginDetails, setLogin] = useState<IState>({email: '', password: ''});
    const dispatch = useDispatch();

    const handleSubmit = (eve:React.FormEvent<HTMLFormElement>) => {
        eve.preventDefault();
        dispatch(LoginRequest({username: loginDetails.email, password: loginDetails.password})); 
    }

    const handleEmail = (eve: React.FormEvent) => {
        setLogin({...loginDetails, email: (eve.target as any).value })
    }

    const handlePassword = (eve: React.FormEvent) => {
        setLogin({...loginDetails, password: (eve.target as any).value })
    }

    return (
        <div className="background" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '90vh'
        }}>
            <Card style={{ width: '30rem' }}>
                <Card.Header as="h5">EMS</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control placeholder="Email" type="email" value={loginDetails.email} 
                            onChange={ handleEmail }></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Password" type="password" value={loginDetails.password}
                            onChange={ handlePassword }></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>      
    );
}

export default Login;