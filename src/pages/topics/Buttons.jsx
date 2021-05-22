import React from 'react';
import styled from 'styled-components';
//import local
import Label from '../components/Label';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Description, Subhead, CodeLabel, HighlightWrapper } from '../../DefaultStyles.jsx';
import iconbtnng from './images/icon-btn-ng.jpg';
import currentactionbuttons from './images/current-action-buttons.png';
import roles from './images/roles.png';
import newerbuttons from './images/newer-buttons.png';
import disabled from './images/disabled.png';

export default function Buttons() {
    return (
        <div id="buttons">
            <Label name="buttons" />
            <Description>
                As we introduce more Conversion widgets into the Criminal NG app, the primary design
                goal is to{' '}
                <strong>
                    <em>match the existing Criminal app</em>
                </strong>
                . Button styles should initially fall in line with what we are used to seeing in
                Criminal and Family. That said, we are beginning the process of{' '}
                <strong>
                    <em>updating</em>
                </strong>{' '}
                all Criminal buttons, so that they look less like labels, and make for a more
                obvious user experience.
            </Description>

            <Description>
                There will be three main types of button styles, outlined below.
            </Description>

            <ButtonGroup>
                <Subhead>Icon Buttons</Subhead>
                <Description>
                    In general, these buttons are found in or near table cells, and do things like
                    add, edit, and delete (and more). <em>A few button examples below.</em>
                </Description>

                <ButtonCol>
                    <Image src={iconbtnng} alt="icon buttons that add, edit and search" loose />
                    <p>
                        <em>
                            These icon buttons are found quite often throughout the NG apps. (Yes,
                            the edit and save icons look <strong>slightly</strong> different here,
                            but I'll update that in NG one day soon.)
                        </em>
                    </p>
                </ButtonCol>
            </ButtonGroup>

            <ButtonGroup>
                <Subhead>Action Buttons</Subhead>
                <Description>
                    These buttons are used for key "call to action" events like save, cancel, or
                    taking the user to another screen. <em>Descriptive text is always included.</em>{' '}
                    Some examples of these buttons, below.
                </Description>

                <ButtonCol width="loose">
                    <Image
                        src={currentactionbuttons}
                        alt="icon buttons that add, edit and search"
                    />
                    <p>
                        <em>
                            The look of our "general" text buttons. Unfortunately, these also look
                            very similar to <strong>legends</strong>, those labels found at the top
                            of a component/widget
                        </em>
                    </p>
                </ButtonCol>

                <ButtonCol>
                    <Image src={roles} alt="icon buttons that delete and get more info" />
                    <p>
                        <em>
                            We also have the occasionally appearance of an old-school hyperlinked
                            text "button".
                        </em>
                    </p>
                </ButtonCol>
            </ButtonGroup>

            <ButtonGroup>
                <Subhead>
                    <strong>
                        <em>Coming soon:</em>
                    </strong>{' '}
                    New Action Buttons
                </Subhead>
                <Description>
                    <strong>This CSS has yet to be implemented.</strong> The goal here is to make
                    our action buttons more prominent, as well as differ their style from
                    legends/labels. We're also simplifying the color scheme — using green buttons
                    for Save and Search, and gray for everything else. Note that each{' '}
                    <em>action button</em> contains an icon, and some text. Examples below.{' '}
                </Description>

                <ButtonCol width="wide">
                    <Image src={newerbuttons} alt="icon buttons that add, edit and search" />
                    <p>
                        <em>
                            One button is treated with a lighter gray, and that's the{' '}
                            <strong>Cancel</strong> button. I did that since this button doesn't
                            take you to new content.
                        </em>
                    </p>
                </ButtonCol>

                <ButtonCol>
                    <Image light src={disabled} alt="icon buttons that delete and get more info" />
                    <p>
                        <em>
                            When the disabled attribute is used, the buttons lose much of their
                            opacity, all the way down to .3 (1.0 is normal)
                        </em>
                    </p>
                </ButtonCol>
            </ButtonGroup>

            <Description loose>
                <CodeLabel>Code sample</CodeLabel> In the code below, the <em>abtn</em> class sets
                the background color and the rounded button style. The{' '}
                <strong>&#60; i &#62;</strong> element brings in a FontAwesome icon.{' '}
                <strong>
                    <em>Note: This is not live (yet).</em>
                </strong>
            </Description>

            <HighlightWrapper>
                <SyntaxHighlighter language="javascript" style={ocean}>
                    {codestring}
                </SyntaxHighlighter>
            </HighlightWrapper>
        </div>
    );
}

const codestring = `
<!-- Current Save button approach -->
<button class="btn btn-primary hoffset5-r hoffset5-l" title="save">
    Save
</button>


<!-- New Action button (Save, Search) -->
<button class="abtn-primary" title="Save">
    <i class="fas fa-check"></i>Save
</button>

<!-- New Action button (Cancel) -->
<button class="abtn-cancel" title="Cancel">
    <i class="fas fa-ban"></i>Cancel
</button>

<!-- New Action button (All others) -->
<button class="abtn-secondary" title="History">
    <i class="fas fa-history"></i>History
</button>

<!-- Disabled Action button -->
<button class="abtn-primary" title="Save" disabled>
    <i class="fas fa-check"></i>Save
</button>`;

const handleImageWidth = (width) => {
    switch (width) {
        case 'wide':
            return '540px';
        case 'loose':
            return '440px';
        default:
            return '340px';
    }
};

const ButtonCol = styled.div`
    display: inline-block;
    margin: 20px 0 0 50px;
    vertical-align: top;
    width: ${({ width }) => handleImageWidth(width)};
    &:first-of-type {
        margin-left: 0;
    }
    img {
        padding-left: 0;
        margin-bottom: 5px;
        width: 100%;
    }
`;

const Image = styled.img`
    opacity: ${(props) => (props.light ? '.3' : '1.0')};
    padding-left: ${(props) => (props.loose ? '10px' : '0')};
`;

const ButtonGroup = styled.div`
    padding: 25px 0;
    &:first-of-type {
        padding-top: 0;
    }
`;
