import React from 'react';
import styled from 'styled-components';
// local imports

export default function Menu(props) {
    return (
        <MenuWrapper>
            <MenuSidebar>
                <MenuList>
                    <ListItem>
                        <StyledLink white href="#top">
                            <Text>Home</Text>
                        </StyledLink>
                    </ListItem>

                    <ListItem>
                        <StyledLink href="#buttons">
                            <Text>Buttons</Text>
                        </StyledLink>
                    </ListItem>

                    <ListItem>
                        <StyledLink href="#color">
                            <Text>Color</Text>
                        </StyledLink>
                    </ListItem>
                </MenuList>
            </MenuSidebar>
        </MenuWrapper>
    );
}

// define your styles
const MenuWrapper = styled.div`
    background-color: var(--primary-dark);
    box-sizing: border-box;
    height: 100%;
    height: 100vh;
    left: 0;
    max-width: 275px;
    overflow: auto;
    padding: 0px;
    position: fixed;
    top: 0;
    transition: all var(--slow) ease-in-out;
    width: 80%;
    z-index: 100;

    /* ${({ open }) =>
        open &&
        `
    left: 0;
    transition: all var(--slow) ease-in-out;
  `}; */
`;

const MenuSidebar = styled.div`
    padding: 0px 30px;
    text-align: left;
`;

const MenuList = styled.ul`
    box-sizing: border-box;
    margin: 0;
    padding: 30px 0 0 0;

    @media screen and (max-width: 375px) {
        width: 100%;
    }
`;

const ListItem = styled.li`
    border-top: 1px solid var(--primary-darker);
    box-sizing: border-box;
    color: var(--primary-medium);
    list-style-type: none;
    margin: 0 0 0 0;
    position: relative;
    transition: all var(--medium) ease-in-out;

    &:first-of-type {
        border-top: none;
    }

    @media screen and (max-width: 375px) {
        margin: 12px 0;
    }
`;

const StyledLink = styled.a`
    color: ${(props) => (props.white ? 'white' : 'var(--primary-medium)')};
    display: block;
    font-weight: 400;
    margin: 0;
    padding: 20px 15px;
    text-decoration: none;
    transition: all var(--medium) ease-in-out;
    &:hover {
        color: white;
        transition: all var(--medium) ease-in-out;
    }
`;

const Text = styled.h4`
    color: var(--white);
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 23px;
    white-space: normal;
`;
