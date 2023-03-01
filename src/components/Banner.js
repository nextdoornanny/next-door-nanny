import React from 'react'
import styled from '@emotion/styled'
import { Flex } from './StyledComponents'

const BannerStrip = styled.div`
    background-color: #F5F5F5;
    width: 100%;
    font-weight: 600;
`

const BannerText = styled.p`
    font-size: 13px;
`

export const BannerTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
`

export const Banner = ({ title, dataset }) => {
    return (
        <BannerStrip>
            <h2>{title}</h2>
            <br />
            <Flex justifyCenter>
                {dataset?.map((el, index) => (
                    <Flex alignCenter column style={{ textAlign: "center" }} width="20%" key={index}>
                        <img src={el.src} alt="" style={{ borderRadius: "50%", height: "90px", width: "90px", padding: "5%" }} />
                        <BannerTitle>{el.step}</BannerTitle>
                        <BannerText>{el.subtitle}</BannerText>
                    </Flex>
                ))}
            </Flex>
        </BannerStrip>
    )
}

