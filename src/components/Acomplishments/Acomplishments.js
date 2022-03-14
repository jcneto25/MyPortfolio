import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 1998, text: "Certificação Conectiva Linux" },
  { number: 2000, text: "Graduado em Informática pela UNIFOR" },
  {
    number: 2001,
    text: "Especialização em Gerência Estratégica da Informação",
  },
  { number: 2003, text: "MBA Excutivo IBMEC" },
  { number: 2007, text: "Treinamentos e participação em projetos em Java" },
  { number: 2018, text: "Graduação em Direito" },
  { number: 2019, text: "Formação Python na Alura" },
  { number: 2022, text: "Certificações Cloud Oracle" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Formação Acadêmica e Profissional</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>Ano {card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
