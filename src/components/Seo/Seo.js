import Head from 'next/head';

const Seo = ({
    title = 'Jaime Correia Neto | Agentic Software Engineering Specialist',
    description = 'Portfolio focado em desenvolvimento agentico com IA, multi-agent orchestration, Spec-Driven Development e projetos production-ready.',
    canonical = 'https://jcneto25.vercel.app/',
}) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#0D0D0D" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
    </Head>
);

export default Seo;
