import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem-Vindo ao <br />
        meu portfolio pessoal.
      </SectionTitle>
      <SectionText>
        Desenvolvimento de Soluções com tecnologias IA (LangChain, Flowise, CrewAI, Vector DBs), Web (React/Next.js, Headless CMS), DataScience/Python para alavancar o seu
        negócio.
      </SectionText>
      <Button
        onClick={() => window.open("https://jcneto25.github.io/MyResume/")}
      >
        Conheça meu CV / See my Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
