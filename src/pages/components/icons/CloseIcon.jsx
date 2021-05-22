import React from 'react';
// import styled from 'styled-components';

function CloseIcon() {
    return (
        <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
            <defs>
                <polygon
                    id="path-close"
                    points="7 5.58578644 1.70710678 0.292893219 0.292893219 1.70710678 5.58578644 7 0.292893219 12.2928932 1.70710678 13.7071068 7 8.41421356 12.2928932 13.7071068 13.7071068 12.2928932 8.41421356 7 13.7071068 1.70710678 12.2928932 0.292893219 7 5.58578644"
                />
            </defs>
            <g id="CloseIconOnly" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="icon-close_24">
                    <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-close" />
                    </mask>
                    <use id="icon" fill="#FFFFFF" fillRule="nonzero" xlinkHref="#path-close" />
                </g>
            </g>
        </svg>
    );
}

// const StyledUse = styled.use`
//     &:hover {
//         fill: var(--case);
//         cursor: pointer;
//         transition: all var(--medium) ease-in-out;
//     }
// `;

export default CloseIcon;
