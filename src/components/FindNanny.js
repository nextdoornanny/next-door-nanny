import React from 'react'
import { Flex } from './StyledComponents'
import { Image } from './StyledComponents';
import styled from '@emotion/styled';
import { Formik, Field, Form } from 'formik';
import NannyHomePicture from '../img/homePageTopNanny.jpg'
import { Button } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const nannyTypes = ["Nanny - Live in", "Nanny - Live out", "Au - pair", "Nanny Share", "Governess", "Overseas Nanny", "Maternity Nurse", "Rota Nurse", "Babysitter"]

const SearchInputContainer = styled(Flex)`
    gap: 25px 0;
    width: 75%
`

const NannySearch = () => <Formik
    initialValues={{ nannyType: "", postcode: "" }}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }}
>
    {({
        handleSubmit,
    }) => (
        <Form onSubmit={handleSubmit}>
            <h2>Find your perfect nanny</h2>
            <br />
            <SearchInputContainer>
                <div className="select-dropdown">
                    <Field as="select" name="nannyType">
                        <option disabled={true} value="">
                            Type of childcare
                        </option>
                        {nannyTypes?.map(type =>
                            <option style={{ textTransform: "capitalize" }} value={type}>{type}</option>
                        )}
                    </Field>
                </div>
                <Field type="postcode" name="postcode" placeholder="Postcode" />
                <br />
                <Button style={{ width: "240px" }} variant="primary" type="Submit">
                    Search nannies
                </Button>
            </SearchInputContainer>
        </Form>
    )}
</Formik>

const JobSearch = () => <Formik
    initialValues={{ nannyType: "", postcode: "" }}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }}
>
    {({
        handleSubmit,
    }) => (
        <Form onSubmit={handleSubmit}>
            <h2>Search for local childcare</h2>
            <br />
            <SearchInputContainer>
                <div className="select-dropdown">
                    <Field as="select" name="nannyType">
                        <option disabled={true} value="">
                            Childcare roles
                        </option>
                        {nannyTypes?.map(type =>
                            <option style={{ textTransform: "capitalize" }} value={type}>{type}</option>
                        )}
                    </Field>
                </div>
                <Field type="postcode" name="postcode" placeholder="Postcode" />
                <br />
                <Button style={{ width: "240px" }} variant="primary" type="Submit">
                    Search nannies
                </Button>
            </SearchInputContainer>
        </Form>
    )}
</Formik>

const FindNanny = () => {
    return (
        <Flex alignCenter justifyAround>
            <Tabs>
                <TabList>
                    <Tab>Nanny search</Tab>
                    <Tab>Job search</Tab>
                </TabList>
                <br />
                <TabPanel>
                    <NannySearch />
                </TabPanel>
                <TabPanel>
                    <JobSearch />
                </TabPanel>
            </Tabs>
            <Image src={NannyHomePicture} alt="Nanny home" />
        </Flex >
    )
}

export default FindNanny