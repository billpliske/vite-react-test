import React from 'react';
import styled from 'styled-components';

export default function ColorDot(props) {
    const { color, size } = props;
    return (
        <Wrapper>
            <Circle color={color} size={size} />
            {props.children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: inline-block;
    margin-left: 60px;
    text-align: center;

    &:first-of-type {
        margin-left: 0;
    }
`;

const Circle = styled.div`
    background-color: ${props => props.color};
    border-radius: 50%;
    display: inline-block;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;


