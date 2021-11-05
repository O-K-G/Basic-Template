import type { NextPage } from "next";
import Head from "next/head";
import classes from "../styles/Home.module.css";

const Home: NextPage = ({ENV}:any) => {
  return (
    <>
      <Head>
        <title>Base Next Frontend</title>
        <meta name="description" content="A skeletal Docker project" />
      </Head>

      <main>
        <h1 className={classes.titles}>A skeletal Docker\Next.js\Express.js\Mongo project</h1>
      </main>
    
    <section>
      <h3 className={classes.titles}>In the command line:</h3>
      <p>Write &quot;docker-compose up&quot; when in development.</p>
      <p>Write &quot;ENV=prod docker-compose up&quot; when in production.</p>
      <p>Current environment variable: {ENV}</p>
    </section>

      <footer>
        
      </footer>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { ENV } = process.env;

  console.log("test", ENV === "");

  return {
    props: { ENV: ENV === "" && "dev" || ENV === "prod" && "prod" },
  };
};