import React from 'react';
import styled from 'styled-components';

export default function Label(props) {
    return <StyledLabel>{props.name}</StyledLabel>;
}

const StyledLabel = styled.h3`
    color: var(--primary-dark);
    font-size: 37px;
    font-weight: 800;
    letter-spacing: 5px;
    margin: 50px 0 10px 0;
    padding-top: 50px;
    text-transform: uppercase;
`;
