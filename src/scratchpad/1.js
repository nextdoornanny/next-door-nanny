import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Formik, Field, Form } from 'formik';
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../contexts/UserAuthContext";
import { Flex } from "./StyledComponents";

const AuthForm = () => {
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = async (e, values) => {
        e.preventDefault();
        // setError("");
        try {
            await logIn(values.email, values.password);
            navigate("/home");
        } catch (err) {
            // setError(err.message);
        }
    };

    return (
        <Flex alignCenter justifyCenter column>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => handleSubmit(values)}
            >
                {({
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                }) => (
                    <>
                        <div style={{ width: "40%", textAlign: "center" }}>
                            <h2>Sign in</h2>
                            {/* {errors && <Alert variant="danger">{errors}</Alert>} */}
                            <Form onSubmit={handleSubmit}>
                                <Field type="email" name="email" placeholder="Email" />
                                <Field type="password" name="password" placeholder="Password" />
                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="Submit">
                                        Log In
                                    </Button>
                                </div>
                            </Form>
                            <hr />
                            <Flex justifyCenter>
                                <GoogleButton
                                    onClick={handleGoogleSignIn}
                                    className="g-btn"
                                    type="dark"
                                />
                            </Flex>
                        </div>
                        <div className="p-4 box mt-3 text-center">
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </>
                )}
            </Formik>
        </Flex>
    );
}

export default AuthForm