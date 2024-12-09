import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Client from 'baserow-client';

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
  const client = new Client(process.env.NEXT_PUBLIC_BASEROW_API_TOKEN, {
    host: process.env.BASEROW_HOST,
  });

  try {
    const { data } = await client.database.table.listRows(
      parseInt(process.env.NEXT_PUBLIC_BASEROW_DATABASE_ID),
      parseInt(process.env.NEXT_PUBLIC_BASEROW_TABLE_ID)
    );

    return {
      props: {
        timelineData: data,
      },
    };
  } catch (error) {
    console.error("Error fetching Baserow ", error);
    return {
      props: {
        timelineData: [], // Return an empty array in case of an error
      },
    };
  }
}


export default Home;
