import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from 'virtual:generated-pages';


export default function App() {
    return (
        <Wrapper>
            <ScrolledDiv>
                <Router>
                    {/* kick it all off with the root route */}
                    {renderRoutes(routes)}
                </Router>
            </ScrolledDiv>
        </Wrapper>
    );
}

export { routes };

const Wrapper = styled.div`
    color: black;
    position: relative;
    height: 100%;
    max-width: 1700px;
    min-height: 100%;
    margin: 0 auto;
    padding-left: 275px;
`;

const ScrolledDiv = styled.div`
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
    position: relative;
`;