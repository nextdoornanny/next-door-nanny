import React from "react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../contexts/UserAuthContext";
import { Flex } from "./StyledComponents";

export const FormInputWrapper = styled.div`
    width: 35%;
    text-align: center;
`

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Please enter your email address'),
    password: Yup.string().required()
});

const AuthForm = () => {
    const { logIn, googleSignIn, forgotPassword } = useUserAuth();
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

    return (
        <Flex alignCenter justifyCenter column>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={SignInSchema}
                onSubmit={(async (values) => {
                    try {
                        await logIn(values.email, values.password);
                        navigate("/");
                    }
                    catch (err) {
                        console.log(err)
                    }
                })}
            >
                {({
                    values,
                }) => (
                    <>
                        <FormInputWrapper>
                            <h2>Sign in</h2>
                            <br />
                            <Form>
                                <Field className="mb-3" type="email" name="email" placeholder="Email" />
                                <ErrorMessage name="email" component="p" style={{ color: "red" }} />
                                <Field className="mb-3" type="password" name="password" placeholder="Password" />
                                <Button style={{ width: "240px" }} variant="primary" type="Submit">
                                    Log In
                                </Button>
                            </Form>
                            <Link style={{ margin: "10px 0" }} onClick={() => forgotPassword(values.email)}>Forgot password?</Link>
                            <hr />
                            <Flex justifyCenter>
                                <GoogleButton
                                    onClick={handleGoogleSignIn}
                                    className="g-btn"
                                    type="dark"
                                />
                            </Flex>
                        </FormInputWrapper>
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