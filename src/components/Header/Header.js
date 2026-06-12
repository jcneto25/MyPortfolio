import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  const { language, t } = useLanguage();
  const socialLabels = {
    github:
      language === "pt"
        ? "GitHub de Jaime Correia Neto"
        : "Jaime Correia Neto on GitHub",
    linkedin:
      language === "pt"
        ? "LinkedIn de Jaime Correia Neto"
        : "Jaime Correia Neto on LinkedIn",
    email:
      language === "pt"
        ? "Enviar e-mail para Jaime Correia Neto"
        : "Send an email to Jaime Correia Neto",
  };

  return (
    <Container>
      <Div1>
        <Link href="/" passHref legacyBehavior>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "15px",
            }}
          >
            <DiCssdeck size="3rem" /> <Span> {t('header.portfolio')} </Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects" passHref legacyBehavior>
            <NavLink>{t('header.nav.projects')}</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" passHref legacyBehavior>
            <NavLink>{t('header.nav.technologies')}</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" passHref legacyBehavior>
            <NavLink>{t('header.nav.about')}</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <LanguageSwitcher />
        <SocialIcons
          href="http://github.com/jcneto25"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialLabels.github}
        >
          <AiFillGithub size="3rem" aria-hidden="true" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/jaime-correia-neto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialLabels.linkedin}
        >
          <AiFillLinkedin size="3rem" aria-hidden="true" />
        </SocialIcons>
        <SocialIcons
          href="mailto:jcneto25@gmail.com"
          aria-label={socialLabels.email}
        >
          <AiFillMail size="3rem" aria-hidden="true" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
