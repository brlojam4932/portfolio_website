import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked in this space a long time. I started first learning JS, then Solidity, Truffle, Ganache. Then React. Then I became interested in learning Ethers and Hardhat. I am now learning how to use Moralis Web3 products.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3em" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            JS |
            Solidity |
            Truffle |
            Ganache |
            Hardhat
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3em" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.JS |
            Web3 |
            Ethers.JS |
            Moralis
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
