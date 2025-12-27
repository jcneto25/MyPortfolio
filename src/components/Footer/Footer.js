import React from 'react';
import { AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { useLanguage } from '../../contexts/LanguageContext';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>{t('footer.whatsapp')}</LinkTitle>
          <LinkItem href="https://wa.me/+5585989519450?text=Olá%20!%20Visitei%20seu%20Portfolio.%20Gostaria%20de%20obter%20mais%20informações."
            target="_blank">+55 85 98951-9450</LinkItem>
            <AiOutlineWhatsApp size={50} color="rgb(50, 120, 148)" className="icon" />
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>{t('footer.email')}</LinkTitle>
          <LinkItem href="mailto:jcneto25@gmail.com">jcneto25@gmail.com</LinkItem>
          <AiFillMail size={50} color="rgb(50, 120, 148)" className="icon" />
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
