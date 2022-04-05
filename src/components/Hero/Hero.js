import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
//import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <h2>I am a new and aspiring developer. I studied with Moralis Academy. I am looking for an opportunity to work as a front end engineer for projects with Ethereum blockchain, Daps, Metaverse, Defi and NFTs.</h2>
      </SectionText>
      {/*  <Button onClick={() => window.location = "https://google.com"} >Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;