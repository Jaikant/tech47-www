import React from 'react'
import styled from '@emotion/styled';
import media from '../utils/media';


const Box = styled.div`
    box-shadow: 1px 5px 8px #cccccc;
    width: 80%;
    align: center;
    padding: 20px;
    margin-bottom: 20px;
`

const PositionWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    ${media.tablet`
      grid-template-columns:  1fr 4fr;
      grid-gap: 80px;
    `}
    grid-gap: 50px;
`

const PositionName = styled.div`
    font-size: 32px;
    font-weight: bold;
    color: #101010;
`

const PositionDetails = styled.div`
    font-size: 24px;
    color: #101010;
`

const OpenPosition = (props) => (
    <Box>
    <PositionWrapper>
    <PositionName>{props.position}</PositionName>
    <PositionDetails>{props.description}</PositionDetails>
    </PositionWrapper>
    </Box>
)

export default OpenPosition;
