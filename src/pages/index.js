import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = ({ timelineData }) => {

  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline timelineData={timelineData} />
      <Acomplishments />
    </Layout>
  );
};

export async function getStaticProps() {
  const {
    NEXT_PUBLIC_BASEROW_API_TOKEN,
    NEXT_PUBLIC_BASEROW_HOST,
    NEXT_PUBLIC_BASEROW_TABLE_ID,
    NEXT_PUBLIC_BASEROW_TABLE_EN_ID,
  } = process.env;

  if (!NEXT_PUBLIC_BASEROW_API_TOKEN) {
    console.error("BASEROW_API_TOKEN is missing in the environment variables.");
    return {
      props: {
        timelineData: { pt: [], en: [] },
      },
    };
  }

  try {
    // Fetch both Portuguese and English data in parallel
    const [ptResponse, enResponse] = await Promise.all([
      fetch(
        `${NEXT_PUBLIC_BASEROW_HOST}/api/database/rows/table/${NEXT_PUBLIC_BASEROW_TABLE_ID}/?user_field_names=true`,
        {
          headers: {
            Authorization: `Token ${NEXT_PUBLIC_BASEROW_API_TOKEN}`,
          },
        }
      ),
      NEXT_PUBLIC_BASEROW_TABLE_EN_ID ? fetch(
        `${NEXT_PUBLIC_BASEROW_HOST}/api/database/rows/table/${NEXT_PUBLIC_BASEROW_TABLE_EN_ID}/?user_field_names=true`,
        {
          headers: {
            Authorization: `Token ${NEXT_PUBLIC_BASEROW_API_TOKEN}`,
          },
        }
      ) : null
    ]);

    if (!ptResponse.ok) {
      throw new Error(`Failed to fetch Portuguese data from Baserow: ${ptResponse.statusText}`);
    }

    const ptData = await ptResponse.json();
    const enData = enResponse && enResponse.ok ? await enResponse.json() : null;

    return {
      props: {
        timelineData: {
          pt: ptData.results || [],
          en: enData?.results || []
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data from Baserow:", error);
    return {
      props: {
        timelineData: { pt: [], en: [] },
      },
    };
  }
}

export default Home;
