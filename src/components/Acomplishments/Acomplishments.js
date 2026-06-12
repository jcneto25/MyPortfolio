import React, { useMemo } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const mapRows = (rows = []) =>
  rows
    .map((row) => ({
      number: row.Ano || "",
      text: row.conquista || "",
    }))
    .filter((item) => item.number && item.text);

const Acomplishments = ({ accomplishmentsData }) => {
  const { t, language } = useLanguage();
  const data = useMemo(() => {
    const preferredRows = accomplishmentsData?.[language];
    const fallbackRows = accomplishmentsData?.pt?.length
      ? accomplishmentsData.pt
      : accomplishmentsData?.en || [];

    return mapRows(preferredRows?.length ? preferredRows : fallbackRows);
  }, [accomplishmentsData, language]);

  return (
    <Section>
      <SectionDivider />
      <SectionTitle style={{ paddingTop: '58px' }}>{t('accomplishments.title')}</SectionTitle>
      <Boxes>
        {data.length === 0 ? (
          <EmptyState>{t('errors.emptyAccomplishments')}</EmptyState>
        ) : (
          data.map((card, index) => (
            <Box key={index}>
              <BoxNum>{card.number}</BoxNum>
              <BoxText>{card.text}</BoxText>
            </Box>
          ))
        )}
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
