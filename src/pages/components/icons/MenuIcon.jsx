import React from 'react';
import styled from 'styled-components';

function MenuIcon(props) {
    const { toggleMenuProps } = props;
    return (
        <Button onClick={toggleMenuProps}>
            <svg width="18px" height="14px" viewBox="0 0 18 14" version="1.1">
                <defs>
                    <path
                        d="M0,8 L0,6 L18,6 L18,8 L0,8 Z M0,2 L0,0 L18,0 L18,2 L0,2 Z M0,14 L0,12 L18,12 L18,14 L0,14 Z"
                        id="path-gg"
                    />
                </defs>
                <g id="MenuNew" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-gg" />
                    </mask>
                    <use id="icon" fill="#222222" fillRule="nonzero" xlinkHref="#path-gg" />
                </g>
            </svg>
        </Button>
    );
}

const Button = styled.span`
    position: relative;
    top: 1px;
    z-index: 10;
`;

export default MenuIcon;
