import React, { useEffect, useState } from "react";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./TimeLineStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const mapRows = (rows = []) =>
  rows
    .map((item) => ({
      number: item.Ano || "",
      text: item.conquista || "",
    }))
    .filter((item) => item.number && item.text);

const Timeline = ({ timelineData }) => {
  const { t, language } = useLanguage();
  const [data, setData] = useState([]);

  useEffect(() => {
    const preferredRows = timelineData?.[language];
    const fallbackRows = timelineData?.pt?.length ? timelineData.pt : timelineData?.en || [];
    const mappedData = mapRows(preferredRows?.length ? preferredRows : fallbackRows);
    setData(mappedData);
  }, [language, timelineData]);

  return (
    <Section id="about">
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
