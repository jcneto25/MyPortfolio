import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <Link href="/">
          <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "15px"}}>
            <DiCssdeck size="3rem" /> <Span>  Portfolio </Span>
          </a>
        </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projetos">
          <NavLink>
            Projetos
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Tecnologias
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            Sobre
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="http://github.com/jcneto25">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/jaime-neto-a98b42230">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:jcneto25@gmail.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
