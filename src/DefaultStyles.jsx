import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import '@fontsource/poppins/200.css';
import '@fontsource/poppins/200-italic.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/400-italic.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/600-italic.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/800-italic.css';

document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
function setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
}

window.addEventListener('resize', function () {
    setDocHeight();
});
window.addEventListener('orientationchange', function () {
    setDocHeight();
});

setDocHeight();

export const GlobalStyle = createGlobalStyle`




html, body {
    background-color: white;
    height: 100%;
    height: 100vh;
    justify-content: stretch;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
}

body > #root {
    height: 100%;
}

* {
    box-sizing: border-box;
    font-size: 17px;
    margin: 0;
    padding: 0;
}

.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity var(--slow) ease-in;
}

:root {
    /**** MAIN ****/
    --class: #6D76FF;
    --lead: #F36B00;
    --sublead: #FDB365 ;

    /**** COLORS ****/
    --light-purple: #AB73F4;
    --greenish-teal: #35C5A4;

    --primary-darker: #364A9F;
    --primary-dark: #5E72C7;
    --primary-medium: #BEC9F8;
    --primary-light: #EFF2FF;

    --case: #FFF4D1;
    --case-active: #FFC02E ;
    --case-link: #000;

    --gray-dark: #787878;
    --gray-medium: #AEA7A7;
    --gray-light: #F2F2F2;

    --button: #787878;
    --button-cancel: #AEA7A7;
    --button-cta: #5B9A68;

    /**** TRANSITION SPEED ****/
    --slow: .6s;
    --medium: .4s;


    /**** TYPE ****/
    --text-width: 900px;
}

`;

/* ****************************** */
/* ****************************** */
/* **** REUSEABLE COMPONENTS **** */
/* ****************************** */
/* ****************************** */

export const Strong = styled.span`
    font-size: inherit;
    font-weight: 500;
    span {
        color: #5e72c7;
    }
`;

export const Subhead = styled.h3`
    color: var(--primary-dark);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 4px;
    padding: ${(props) => (props.loose ? '60px 0 10px 0' : '30px 0 10px 0')};
    text-transform: uppercase;
`;

export const OrderedList = styled.ol`
    margin: 10px 0 30px 50px;

    ul {
        margin: 10px 0 30px 40px;
    }
    & > li {
        counter-increment: item;
        list-style-type: none;
        margin-top: 5px;
        text-indent: -2em;
        &:first-of-type {
            margin-top: 0;
        }
        &:before {
            content: counter(item) '.';
            display: inline-block;
            font-weight: 800;
            padding-right: 0.5em;
            text-align: right;
            width: 1.5em;
        }
    }

    a {
        text-decoration: underline;
        &:hover {
            text-decoration: none;
        }
    }
    img {
        max-width: 700px;
        margin: 5px 0 20px 0;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 23px;
    margin: ${(props) => (props.loose ? '30px 0 8px 0' : '8px 0')};
    max-width: var(--text-width);
    a {
        color: var(--primary-dark);
        &:hover {
            text-decoration: none;
        }
    }
`;

export const Keyword = styled.h3`
    font-size: 28px;
    margin-top: 10px;
`;

export const HighlightWrapper = styled.div`
    margin: ${(props) => (props.tight ? '12px 0 10px 0' : '12px 0 70px 0')};
    pre,
    code {
        width: 1000px !important;
    }
    overflow: hidden;
`;

export const CodeLabel = styled.span`
    background-color: var(--case-active);
    border-radius: 20px;
    padding: 4px 8px;
    font-weight: 500;
`;

export const RelatedText = styled.p`
    display: inline-block;
    font-size: 17px;
    line-height: 21px;
    max-width: 265px;
    padding: 0 10px;
    position: relative;
    top: 15px;
    vertical-align: top;
`;

export const Link = styled.a`
    color: var(--primary-dark);
    font-weight: 500;
    text-decoration: underline;
    &:hover {
        text-decoration: none;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    opacity: ${(props) => (props.light ? '.3' : '1.0')};
`;

export const ImageRight = styled.img`
    float: right;
    margin: 0 0 25px 25px;
    padding: 0 0 10px 10px;
`;

export const BulletList = styled.ul`
    margin-left: 30px;
`;
