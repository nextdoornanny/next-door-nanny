import React from "react"
import styled from "@emotion/styled"
import { nanniesHowDoesItWork, parentsHowDoesItWork } from '../constants/constants'
import { Banner } from "../components/Banner"
import Table from 'react-bootstrap/Table';
import { listForFirstTable, columnsForFirstTable, columnsForSecondTable, listForSecondTable } from "../constants/home-table-contants"
// import SimpleTableComponent from "reactjs-simple-table";
// import ScheduleACall from "../components/ScheduleACall";
// import { navigate } from "gatsby"
// import { columns, list } from "../constants/homeTableConstants"
// import NannyTypes from "../components/NannyTypes"
import FindNanny from "../components/FindNanny"
import MembershipTiers from "../components/MembershipTiers"
import { Flex } from "../components/StyledComponents";
// import SimpleTableComponent from "reactjs-simple-table";
// import { FourStagesConsultation } from "../components/FourStages"

export const Spacer = styled.div`
  height: 50px;
`
export const ImageStyles = {
    width: '100%',
    maxWidth: '830px',
    height: 'auto',
    borderRadius: '6px',
}

const Home = () => {

    const TableRow = ({ data }) => <tr>
        {data?.map((val, rowID) => <td key={rowID}>{val}</td>)}
    </tr>

    return (
        <>
            <section>
                <br />
                <FindNanny />
            </section>
            <section>
                <Banner dataset={parentsHowDoesItWork} title="Parents: how does it work?" />
            </section>
            <section>
                <Banner dataset={nanniesHowDoesItWork} title="Nannies: how does it work?" />
            </section>
            <section>
                <MembershipTiers />
            </section>
            <section>
                <Flex justifyAround>
                    <Table style={{ width: "45%" }} bordered hover size="l">
                        <thead>
                            <tr>
                                {columnsForFirstTable?.map((column) =>
                                    <th key={column.field}>{column.headerName}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {listForFirstTable?.map((item, id) => <TableRow key={id} data={item} />)}
                        </tbody>
                    </Table>
                    <Table style={{ width: "45%" }} bordered hover size="l">
                        <thead>
                            <tr>
                                {columnsForSecondTable?.map((column) =>
                                    <th key={column.field}>{column.headerName}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {listForSecondTable?.map((item, id) => <TableRow key={id} data={item} />)}
                        </tbody>
                    </Table>
                </Flex>
            </section>
        </>
    )
}

export default Home