import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './login.css';

export default function Login() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="form-div p-3 rounded border">
                    <h2>Login</h2>
                    <Form noValidate>
                        <Alert dismissible variant='danger'>
                            Something went wrong with your login credentials!
                        </Alert>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">
                                <strong>Email</strong>
                            </Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter your eamil" 
                                name="email" 
                                className="form-control rounded" 
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">
                                <strong>Password</strong>
                            </Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter your password" 
                                name="password" 
                                className="form-control rounded" 
                                required
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button 
                                type="submit" 
                                className="btn btn-success w-100 rounded">
                                Login
                            </Button>
                        </div>

                        <div className="text-center">
                            <p className="text-center mb-0 mt-3">Don&apos;t have an account?</p>
                            <Link to='/register' className="btn btn-primary w-100 rounded text-decoration-none">
                                Sign-up
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}