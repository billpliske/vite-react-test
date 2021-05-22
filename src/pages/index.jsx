import React from 'react';
import styled from 'styled-components';
import Color from './topics/Color';
import Buttons from './topics/Buttons';
import Menu from './components/Menu';

export default function index() {
    return (
        <Wrapper id="top">
            <Menu />
            <Headline>App Style Guide</Headline>
            <Buttons />
            <Color />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 60px;
`;

const Headline = styled.h1`
    background-color: var(--primary-dark);
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 76px;
    letter-spacing: -1px;
    line-height: 80px;
    padding: 15px 30px;
    text-align: left;
`;

// const Intro = styled.p`
//     font-size: 20px;
//     color: white;
//     margin: 10px 0 50px 10px;
// `;
