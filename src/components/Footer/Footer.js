import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:323-219-3050'>+1 323-219-3050</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:benR87@bencryptoprojects.com'>benR87@bencryptoprojects.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Changing the world one Satoshi at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/brlojam4932'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/ben-lopez-94360a236/'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/bjam55'>
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
