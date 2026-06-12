import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Methodology from '../components/Methodology/Methodology';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = ({ timelineData, accomplishmentsData }) => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Methodology />
      <Projects />
      <Technologies />
      <Timeline timelineData={timelineData} />
      <Acomplishments accomplishmentsData={accomplishmentsData} />
    </Layout>
  );
};

const fetchBaserowRows = async ({ host, token, tableId, label }) => {
  if (!tableId) {
    console.warn(`Baserow table ID missing for ${label}.`);
    return [];
  }

  const response = await fetch(
    `${host}/api/database/rows/table/${tableId}/?user_field_names=true`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ${label} from Baserow: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results || [];
};

export async function getStaticProps() {
  const {
    BASEROW_API_TOKEN,
    BASEROW_HOST,
    BASEROW_TIMELINE_TABLE_PT_ID,
    BASEROW_TIMELINE_TABLE_EN_ID,
    BASEROW_ACCOMPLISHMENTS_TABLE_PT_ID,
    BASEROW_ACCOMPLISHMENTS_TABLE_EN_ID,
  } = process.env;

  if (!BASEROW_API_TOKEN) {
    console.error("BASEROW_API_TOKEN is missing in the environment variables.");
    return {
      props: {
        timelineData: { pt: [], en: [] },
        accomplishmentsData: { pt: [], en: [] },
      },
    };
  }

  try {
    const [
      timelinePtRows,
      timelineEnRows,
      accomplishmentsPtRows,
      accomplishmentsEnRows,
    ] = await Promise.all([
      fetchBaserowRows({
        host: BASEROW_HOST,
        token: BASEROW_API_TOKEN,
        tableId: BASEROW_TIMELINE_TABLE_PT_ID,
        label: 'timeline (pt)',
      }),
      fetchBaserowRows({
        host: BASEROW_HOST,
        token: BASEROW_API_TOKEN,
        tableId: BASEROW_TIMELINE_TABLE_EN_ID,
        label: 'timeline (en)',
      }),
      fetchBaserowRows({
        host: BASEROW_HOST,
        token: BASEROW_API_TOKEN,
        tableId: BASEROW_ACCOMPLISHMENTS_TABLE_PT_ID,
        label: 'accomplishments (pt)',
      }),
      fetchBaserowRows({
        host: BASEROW_HOST,
        token: BASEROW_API_TOKEN,
        tableId: BASEROW_ACCOMPLISHMENTS_TABLE_EN_ID,
        label: 'accomplishments (en)',
      }),
    ]);

    return {
      props: {
        timelineData: {
          pt: timelinePtRows,
          en: timelineEnRows,
        },
        accomplishmentsData: {
          pt: accomplishmentsPtRows,
          en: accomplishmentsEnRows,
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data from Baserow:", error);
    return {
      props: {
        timelineData: { pt: [], en: [] },
        accomplishmentsData: { pt: [], en: [] },
      },
    };
  }
}

export default Home;
