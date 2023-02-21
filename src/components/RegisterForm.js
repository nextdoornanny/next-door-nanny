import React from "react";
import * as Yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
import { notifyAccountExists } from '../notifications/notifications'
import { FormInputWrapper } from './AuthForm'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from "react-bootstrap";
import { useUserAuth } from "../contexts/UserAuthContext";
import { Flex } from "./StyledComponents";

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Please enter your email address'),
    password: Yup
        .string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[A-Z]/, 'Password requires an uppercase letter'),
    confirm: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});


const Signup = () => {
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    return (
        <Flex alignCenter justifyCenter column>
            <Formik
                initialValues={{ email: "", password: "", confirm: "" }}
                validationSchema={SignUpSchema}
                onSubmit={(async (values) => {
                    try {
                        await signUp(values.email, values.password);
                        navigate("/");
                    }
                    catch (err) {
                        return notifyAccountExists(err)
                    }
                })}
            >
                <>
                    <FormInputWrapper>
                        <h2>Register an account</h2>
                        <br />
                        <Form>
                            <Field type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
                            <Field type="password" name="password" placeholder="Password" />
                            <Field type="password" name="confirm" placeholder="Confirm password" />
                            <ErrorMessage name="password" component="p" style={{ color: "red", fontSize: "0.8rem" }} />
                            <ErrorMessage name="confirm" component="p" style={{ color: "red", fontSize: "0.8rem" }} />
                            <br />
                            <Button style={{ width: "240px" }} variant="primary" type="Submit">
                                Sign up
                            </Button>
                        </Form>
                    </FormInputWrapper >
                    <div className="p-4 box mt-3 text-center">
                        Already have an account? <Link to="/auth">Log In</Link>
                    </div>
                </>
            </Formik>
        </Flex >
    );
};

export default Signup;