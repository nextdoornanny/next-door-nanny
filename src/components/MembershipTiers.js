import React from 'react'
import styled from '@emotion/styled';
import { Flex } from './StyledComponents';
import { BannerTitle } from './Banner';
import { memberships } from '../constants/constants';
import { Button } from 'react-bootstrap';
const PoundText = styled.span` display: inline-block; &:after { content: "\\00a3" } }`;
const PriceText = styled.span` font-size: 30px; padding-right: 12px; padding-left: 6px;`;

const Box = styled.div`
    height: auto;
    padding: 10px;
    border-radius: 3px;
`;


const MembershipTiers = () => {
    return (
        <>
            <h2>Membership</h2>
            <Flex justifyStart>
                {memberships?.map((membership, index) => (
                    <Flex width="20%" key={index} style={{
                        backgroundColor: "#d9d9d9", height: "500px", margin: "10px 10px 0 10px", flexBasis: "0", borderRadius: "15px"
                        , flexGrow: "1",
                        maxWidth: "100%", textAlign: "center"
                    }} alignCenter column>
                        <Box>
                            <BannerTitle style={{ textTransform: "uppercase", paddingBottom: "28px" }}>{membership.type}</BannerTitle>
                            <hr />
                            <p style={{ textTransform: "uppercase" }}><PoundText /><PriceText>{membership.price}</PriceText></p>
                        </Box>
                        <Button style={{ width: "240px" }} variant="primary" type="Submit">Subscribe</Button>
                    </Flex>
                ))}
            </Flex>
        </>
    )

}

export default MembershipTiers