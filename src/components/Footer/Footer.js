import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href="https://wa.me/+5585989519450?text=Olá%20!%20Visitei%20seu%20Portfolio.%20Gostaria%20de%20obter%20mais%20informações."
            target="_blank">+55 85 98951-9450</LinkItem>
            <AiOutlineWhatsApp size={50} color="rgb(50, 120, 148)" className="icon" />
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:jcneto25@gmail.com">jcneto25@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
