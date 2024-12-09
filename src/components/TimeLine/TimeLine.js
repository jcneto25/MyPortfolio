import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Client from 'baserow-client';

const Timeline = () => {
   const [activeItem, setActiveItem] = useState(0);
   const [timelineData, setTimelineData] = useState([]);
   const carouselRef = useRef();

   useEffect(() => {
    const fetchTimelineData = async () => {
      const client = new Client(process.env.NEXT_PUBLIC_BASEROW_API_TOKEN, {
        host: process.env.BASEROW_HOST, // Optional if self-hosting
      });

      try {
        const { data } = await client.database.table.listRows(
          parseInt(process.env.NEXT_PUBLIC_BASEROW_DATABASE_ID),
          parseInt(process.env.NEXT_PUBLIC_BASEROW_TABLE_ID),
        );
        setTimelineData(data);
      } catch (error) {
        console.error("Error fetching data from Baserow:", error);
        // Handle error, e.g., display an error message
      }
    };

    fetchTimelineData();
  }, []);

  const TOTAL_CAROUSEL_COUNT = timelineData.length;

   const scroll = (node, left) => {
     return node.scrollTo({ left, behavior: 'smooth' });
   }

   const handleClick = (e, i) => {
     e.preventDefault();

     if (carouselRef.current) {
       const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
       scroll(carouselRef.current, scrollLeft);
     }
   }

   const handleScroll = () => {
     if (carouselRef.current) {
       const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

       setActiveItem(index);
     }
   }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
   useEffect(() => {
     const handleResize = () => {
       scroll(carouselRef.current, 0);
     }

     window.addEventListener('resize', handleResize);
   }, []);

  return (
    <Section id="about">
      <SectionTitle>Sobre Mim</SectionTitle>
      <SectionText>
        Profissional de Tecnologia atuando no mercado desde 1996. Atualmente gerencio a unidade de desenvolvimento dinâmico do Tribunal de Justiça do Ceará, onde aplicamos
        tecnologias de low-code/no-code aliadas a ferramentas de automação de fluxos de negócios.
        Conhecimento no desenvolvimento de aplicações Web/Mobile com React/Next.js e Tailwind. Utilização de backend com CMS Headless ou desenvolvido com 
        Node.js/Express. Aplicação de técnicas de SEO para garantir que a marca do cliente esteja sempre em destaque nos resultados de pesquisa.
        Conehcimento em plataformas Cloud e como elas podem auxiliar as empresas a reduzir custos na operação de seus sistemas, bem como usar serviços
        de exploração de dados.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
      <>
        {timelineData.map((item, index) => (
          <CarouselMobileScrollNode key={index} final={index===TOTAL_CAROUSEL_COUNT -1}>
            <CarouselItem
              index={index}
              id={`carousel__item-${index}`}
              active={activeItem}
              onClick={(e)=> handleClick(e, index)}
            >
              <CarouselItemTitle>
                  {item.Ano} {/* Assuming 'year' is the field name in your Baserow table */}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.conquita} {/* Assuming 'text' is the field name in your Baserow table */}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode> 
        ))}
      </>
      </CarouselContainer>
      <CarouselButtons>
      {timelineData.map((item, index) => (
        <CarouselButton
          key={index}
          index={index}
          active={activeItem}
          onClick={(e)=> handleClick(e, index)}
          type="button"
        >
          <CarouselButtonDot active={activeItem} />
        </CarouselButton>
      ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
