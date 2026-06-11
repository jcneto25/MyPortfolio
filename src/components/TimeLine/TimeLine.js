import React, { useEffect, useState } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./TimeLineStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Timeline = ({ timelineData }) => {
  const { t, language } = useLanguage();
  const [data, setData] = useState(timelineData[language] || []);

  useEffect(() => {
    setData(timelineData[language] || []);
  }, [language, timelineData]);

  return (
    <Section>
      <SectionDivider />
      <SectionTitle main>{t('timeline.title')}</SectionTitle>
      {t('timeline.subtitle') && (
        <SectionText style={{ fontSize: '18px', maxWidth: '900px', marginBottom: '24px' }}>
          {t('timeline.subtitle')}
        </SectionText>
      )}
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default Timeline;
