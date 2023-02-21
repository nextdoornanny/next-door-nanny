import React, { useState } from "react"
import styled from "@emotion/styled"
// import SimpleTableComponent from "reactjs-simple-table";
// import ScheduleACall from "../components/ScheduleACall";
// import { navigate } from "gatsby"
// import { columns, list } from "../constants/homeTableConstants"
// import NannyTypes from "../components/NannyTypes"
import FindNanny from "../components/FindNanny"
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

const textWidth = {
    width: "90%",
    marginBottom: "12%"
}

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <section>
            <br />
            <FindNanny />
        </section>
    )
}

export default Home