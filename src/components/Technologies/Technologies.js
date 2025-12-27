import React from "react";
import {
  DiAws,
  DiDatabase,
  DiDocker,
  DiFirebase,
  DiGit,
  DiLinux,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
  DiTerminal,
  DiWindows,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>
      <br />
      Tecnologias
    </SectionTitle>
    <SectionText>Um resumo das tecnologias com as quais trabalho.</SectionText>
    <List>
      <ListItem>
        <DiTerminal size="3rem" />
        <ListContainer>
          <ListTitle>Inteligência Artificial</ListTitle>
          <ListParagraph>
            Conhecimento na construção de arquitetura de LLMs. Configuração de LLMs em execução local com Ollama. Construção e refinamento de prompts. Criação de Agentes com os principais framwworks do mercado, como: langchain, crewAI e flowise. Construção de fluxo de codificação automatizado com Claude-CLi, Gemini-Cli e Github Copilot com técnicas SpecDriven e BMAD.
          </ListParagraph>
        </ListContainer>
      </ListItem>
            <ListItem>
        <DiWindows size="3rem" />
        <ListContainer>
          <ListTitle>Low-Code/No-Code</ListTitle>
          <ListParagraph>
            Experiência no desenvolvimento de aplicações na plataforma PowerApps e fluxos de automações com PowerAutomate .
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Exploração de dados com Python, Pandas, Matlib, Jupyter-Notebook.
            Scrapping com BeautifulSOAP.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Desenvolvimento com React e também com o framework Next.Js e bibliotecas como
            MaterialUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Certificações: Oracle Cloud Infrastructure 2021 Certified Cloud
            Operations Associate e Oracle Cloud Infrastructure Foundations 2021
            Certified Associate
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Banco de Dados Relacional</ListTitle>
          <ListParagraph>
            Experiência com uso de banco de dados SQLServer, Oracle e MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Banco de Dados NoSQL</ListTitle>
          <ListParagraph>
            Conhecimento nos banco de dados MongoDB e Cassandra
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Ferramentas de Desenvolvimento</ListTitle>
          <ListParagraph>
            Gestão de Versões e projetos com GIT e Github. Visual Studio Code.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size="3rem" />
        <ListContainer>
          <ListTitle>Sistema Operacional Linux</ListTitle>
          <ListParagraph>
            Experiência com uso e administração de ambientes Linux.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Conhecimento no uso de containers com Docker para a implantação de
            sistemas.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>BackEnd</ListTitle>
          <ListParagraph>
            Conhecimento na construção de aplicações server side com Node.js/Express. Criação de Rest APIs.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
