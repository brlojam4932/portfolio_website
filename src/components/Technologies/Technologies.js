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
      Here is a brief summary of the different frameworks and languages I've learned and still learning while at Moralis Academy. I first started with JavaScript with instructor, Ivan from Moralis. Then Solidity as I took and completed Ethereum 101 and 201 Course, with Filip. These courses involved writing smart constracts such as ERC20 and ERC721, using OpenZeppelin, Truffle, Node and Ganache. I then began the React Web Development Course with Zsolt, where I learned about fetching api data using Axios and building a front end app. I then followed other devs on YouTube to learn more Web3 like, reading and writing to the Ethereaum blockchain's smart contracts using Ethers and Hardat. I am now interested and learning how to use Moralis Web3 products.
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
            Hardhat |
            OpenZeppelin
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
            Node JS |
            Ethers.JS |
            Moralis
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
