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

export async function getServerSideProps() {
  const {
    NEXT_PUBLIC_BASEROW_API_TOKEN,
    NEXT_PUBLIC_BASEROW_HOST,
    NEXT_PUBLIC_BASEROW_TABLE_ID,
  } = process.env;

  if (!NEXT_PUBLIC_BASEROW_API_TOKEN) {
    console.error("BASEROW_API_TOKEN is missing in the environment variables.");
    return {
      props: {
        timelineData: [],
      },
    };
  }

  try {
    const response = await fetch(
      `${NEXT_PUBLIC_BASEROW_HOST}/api/database/rows/table/${NEXT_PUBLIC_BASEROW_TABLE_ID}/?user_field_names=true`,
      {
        headers: {
          Authorization: `Token ${NEXT_PUBLIC_BASEROW_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data from Baserow: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      props: {
        timelineData: data.results, // Assuming the API response contains a `results` field
      },
    };
  } catch (error) {
    console.error("Error fetching data from Baserow:", error);
    return {
      props: {
        timelineData: [],
      },
    };
  }
}

export default Home;
