import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding> 
  <LeftSection>
    <SectionTitle main center>
      Bem-Vindo ao <br/>
      meu portfolio pessoal.
    </SectionTitle>
    <SectionText>
      Projetos em Cloud, DataScience, Python e React para alavancar o seu negócio.
    </SectionText>
    <Button onClick={() => window.location = 'https://google.com'}>
      Conheça Mais
    </Button>
  </LeftSection>
</Section>

);

export default Hero;