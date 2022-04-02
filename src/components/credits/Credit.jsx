import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

function Credit() {
  return (
    <Section id='credits'>
    <br />
    <SectionTitle>Credits</SectionTitle>
    <SectionText>
      I would like to give credit to all the Devs I've learned from. Here are my main sources for learning.
    </SectionText>
    <SectionText>
      Solidity/Blockchain/Web3: The Moralis Academy, Dapp University, Smart Contract Programmer, Chinlink with Patrick and Nadar Dabit, Facundo Carballo, Artur Chmaro, EatTheBlocks, JS Mastery 
    </SectionText>
    <SectionText>
     React: JS Mastery, The Net Ninja, Web Dev Simplified, Dave Grey, PedroTech, Brian Design, Sanjeev Thiyagarajan and Travesty Media on CSS and HTML
    </SectionText>
    </Section>
  );
};

export default Credit;