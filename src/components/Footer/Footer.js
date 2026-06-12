import React from 'react';
import { AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { useLanguage } from '../../contexts/LanguageContext';

import {
  ContactDetails,
  ContactIcon,
  ContactIntro,
  FooterHeading,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
} from './FooterStyles';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <FooterWrapper id="contact">
      <ContactIntro>
        <FooterHeading>{t('footer.contactTitle')}</FooterHeading>
        <Slogan>{t('footer.contactDescription')}</Slogan>
      </ContactIntro>
      <LinkList>
        <LinkColumn as="li">
          <LinkTitle>{t('footer.whatsapp')}</LinkTitle>
          <LinkItem
            href="https://wa.me/+5585989519450?text=Olá%20!%20Visitei%20seu%20Portfolio.%20Gostaria%20de%20obter%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIcon>
              <AiOutlineWhatsApp size={28} aria-hidden="true" className="icon" />
            </ContactIcon>
            <ContactDetails>+55 85 98951-9450</ContactDetails>
          </LinkItem>
        </LinkColumn>
        <LinkColumn as="li">
          <LinkTitle>{t('footer.email')}</LinkTitle>
          <LinkItem
            href="mailto:jcneto25@gmail.com"
          >
            <ContactIcon>
              <AiFillMail size={28} aria-hidden="true" className="icon" />
            </ContactIcon>
            <ContactDetails>jcneto25@gmail.com</ContactDetails>
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
 Footer;
