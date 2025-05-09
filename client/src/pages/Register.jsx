import { Link } from "react-router-dom";
import { Form, Button, Alert } from 'react-bootstrap';

import './login/login.css';

export default function Signup() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="form-div p-3 rounded border">
                    <h2>Sign-up</h2>
                    <Form noValidate>
                        <Alert dismissible variant="danger">
                            Something went wrong with your sign-up!
                        </Alert>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="username">
                                <strong>Username</strong>
                            </Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter your username" 
                                name="username" 
                                className="form-control rounded" 
                                required
                            />
                            <Form.Control.Feedback type="invalid">Username is required!</Form.Control.Feedback>
                        </Form.Group>

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
                            <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback>
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
                            <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Button 
                            type="submit" 
                            variant="success"
                            className="btn btn-success w-100 rounded">
                            Sign-up
                        </Button>
                        <div>
                            <p className="text-center mb-0 mt-3">Already have an account?</p>
                            <Link to='/login' className="btn btn-primary w-100 rounded rext-decoration-nopne">
                                Login
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}