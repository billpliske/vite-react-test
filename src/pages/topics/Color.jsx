import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// local imports
import Label from '../components/Label';
import ColorDot from '../components/ColorDot';
import { Subhead, Description, RelatedText } from '../../DefaultStyles.jsx'

export default function Color() {
    return (
        <div id="color">
            <Label name="color" />
            <Description>
                These six colors form the foundation of the Conversion app. Shades of Powell Blue define much of the UI and typography throughout. The gray and green cover our button usage, and the other three colors cover various fringe cases.
            </Description>
            <Subhead>Primary colors</Subhead>

            <Primary>
                <ColorDot color="#5E72C7" size="200">
                    <Name>Powell Blue</Name>
                    <Text>hex: #5E72C7</Text>
                    <Text>code: var(--blue)</Text>
                </ColorDot>

                <ColorDot color="#787878" size="200">
                    <Name>Dust Gray</Name>
                    <Text>hex: #787878</Text>
                    <Text>code: var(--gray)</Text>
                </ColorDot>

                <ColorDot color="#5B9A68" size="200">
                    <Name>Cactus Green</Name>
                    <Text>hex: #5b9a68</Text>
                    <Text>code: var(--green)</Text>
                </ColorDot>
            </Primary>

            <Primary loose>
                <ColorDot color="#cd5c5c" size="200">
                    <Name>Sedona Red</Name>
                    <Text>hex: #cd5c5c</Text>
                    <Text>code: var(--red)</Text>
                </ColorDot>

                <ColorDot color="#FFC02E" size="200">
                    <Name>SunDevil Gold</Name>
                    <Text>hex: #FFC02E</Text>
                    <Text>code: var(--gold)</Text>
                </ColorDot>

                <ColorDot color="#722272" size="200">
                    <Name>Monsoon Purple</Name>
                    <Text>hex: #722272</Text>
                    <Text>code: var(--purple)</Text>
                </ColorDot>
            </Primary>

  
  

            <Subhead loose>Usage & related colors</Subhead>

            {/******** BLUES ********/}

            <Related>
                <ColorDot color="#5E72C7" size="50" />
                <RelatedText><strong>--blue:</strong> <em>Found in legends/labels, text hyperlinks, and generally the UI's darkest color for larger shapes. (#5E72C7)</em></RelatedText>

                <ColorDot color="#9aa9e7" size="50" />
                <RelatedText><strong>--lightblue:</strong> <em>Used as table header backgrounds, and as backgrounds to case card filter menus. (#9aa9e7)</em></RelatedText>

                <ColorDot color="#d1d9ff" size="50" />
                <RelatedText><strong>--extralightblue:</strong> <em>Found as xxxxxx. (#d1d9ff)</em></RelatedText>
            </Related>


            {/******** GRAYS ********/}
            <Related>
                <ColorDot color="#787878" size="50" />
                <RelatedText><strong>--gray:</strong> <em>Used as background to most action buttons. (#787878)</em></RelatedText>

                <ColorDot color="#cacaca" size="50" />
                <RelatedText><strong>--lightgray:</strong> <em>Used as background color to Cancel action button. (#cacaca)</em></RelatedText>

                <ColorDot color="#eeeeee" size="50" />
                <RelatedText><strong>--extralightgray:</strong> <em>Used as background to striped table rows. (#eeeeee)</em></RelatedText>
            </Related>

            {/******** GREENS ********/}
            <Related>
                <ColorDot color="#5b9a68" size="50" />
                <RelatedText><strong>--green:</strong> <em>Used as background to Save and Search buttons. (#5b9a68)</em></RelatedText>

                <ColorDot color="#96dba4" size="50" />
                <RelatedText><strong>--lightgreen:</strong> <em>Used as the Events label color on Chronology & Capital Calendar. (#96dba4)</em></RelatedText>

                <ColorDot color="#c9f8d1" size="50" />
                <RelatedText><strong>--extralightgreen:</strong> <em>Used xxxxx xxx xxx. (#c9f8d1)</em></RelatedText>
            </Related>

            {/******** REDS ********/}
            <Related>
                <ColorDot color="#cd5c5c" size="50" />
                <RelatedText><strong>--red:</strong> <em>Used in trash can (delete) icon. (#cd5c5c)</em></RelatedText>

                <ColorDot color="#f19d9d" size="50" />
                <RelatedText><strong>--lightred:</strong> <em>Used xxxxx xxx xxx. (#f19d9d)</em></RelatedText>

                <ColorDot color="#ffd1d1" size="50" />
                <RelatedText><strong>--extralightred:</strong> <em>Used xxxxx xxx xxx. (#ffd1d1)</em></RelatedText>
            </Related>

            {/******** GOLDS ********/}
            <Related>
                <ColorDot color="#FFC02E" size="50" />
                <RelatedText><strong>--gold:</strong> <em>Used as the Hearings label color on Chronology & Capital Calendar. (#FFC02E)</em></RelatedText>

                <ColorDot color="#ffe098" size="50" />
                <RelatedText><strong>--lightgold:</strong> <em>Used xxxxx xxx xxx. (#ffe098)</em></RelatedText>

                <ColorDot color="#ffeec6" size="50" />
                <RelatedText><strong>--extralightgold:</strong> <em>No use case as of yet. (#ffeec6)</em></RelatedText>
            </Related>

            {/******** PURPLES ********/}
            <Related>
                <ColorDot color="#722272" size="50" />
                <RelatedText><strong>--purple:</strong> <em>Used as the Docket label color on Chronology. (#722272)</em></RelatedText>

                <ColorDot color="#df90df" size="50" />
                <RelatedText><strong>--lightpurple:</strong> <em>Used xxxxx xxx xxx. (#df90df)</em></RelatedText>

                <ColorDot color="#ffd1ff" size="50" />
                <RelatedText><strong>--extralightpurple:</strong> <em>No use case as of yet. (#ffd1ff)</em></RelatedText>
            </Related>


        </div>
    );
}


const Primary = styled.div`
    &:nth-child(1) {
        margin-left: 0
    }
    margin-top: ${props => props.loose ? "40px" : "10px"};
`;

const Related = styled.div`
    margin-bottom: 50px;

    &:nth-child(1) {
        margin-left: 0
    }
`;

const Name = styled.h3`
    font-size: 26px;
    font-style: italic;
    font-weight: 600;
    margin: 5px 0 10px 0;
`;

const Text = styled.p`
    font-size: 17px;
`;

