import React, { useEffect, useState } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { useLanguage } from "../../contexts/LanguageContext";

const Acomplishments = () => {
  const { t, language } = useLanguage();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const NEXT_PUBLIC_BASEROW_API_TOKEN = process.env.NEXT_PUBLIC_BASEROW_API_TOKEN;
      const NEXT_PUBLIC_BASEROW_HOST = process.env.NEXT_PUBLIC_BASEROW_HOST;

      // Use language-specific table ID
      const TABLE_ID_MAP = {
        pt: process.env.NEXT_PUBLIC_BASEROW_TABLE_MARCOS_ID,
        en: process.env.NEXT_PUBLIC_BASEROW_TABLE_MARCOS_EN_ID
      };

      const tableId = TABLE_ID_MAP[language] || TABLE_ID_MAP.pt;

      try {
        const response = await fetch(
          `${NEXT_PUBLIC_BASEROW_HOST}/api/database/rows/table/${tableId}/?user_field_names=true`,
          {
            headers: {
              Authorization: `Token ${NEXT_PUBLIC_BASEROW_API_TOKEN}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from Baserow");
        }

        const result = await response.json();
        // Assuming the fields in the table are "Ano" and "conquista"
        const formattedData = result.results.map((row) => ({
          number: row.Ano,
          text: row.conquista,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data from Baserow:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [language]);

  return (
    <Section>
      <SectionTitle>{t('accomplishments.title')}</SectionTitle>
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

export default Acomplishments;
