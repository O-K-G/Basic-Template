import type { NextPage } from "next";
import Head from "next/head";
import classes from "../styles/Home.module.css";

const Home: NextPage = ({ ENV }: any) => {
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

      <section>
        <h3 className={classes.titles}>Develop in Ubuntu within Windows:</h3>
        <p>1. Install WIndows features Windows subsystem for Linux. Virtual Machine Platform.<br></br>
          2. Update Windows. <br></br>
          3. Add in Windows' {"Users/<user name/"} the file .wslconfig:<br></br>
          ---------------<br></br>

          [wsl2]<br></br>
          memory=8gb<br></br>
          processors=2<br></br>

          [interop]<br></br>
          appendWindowsPath = false<br></br>

          --------------- <br></br>
          4. Install MS store Ubuntu and open it. <br></br>
          5. Update/upgrade Ubuntu. https://www.cyberciti.biz/faq/upgrade-update-ubuntu-using-terminal/ <br></br>
          6. Install Node in Linux. https://github.com/nodesource/distributions/blob/master/README.md <br></br>
          7. Instal Docker + repo. https://docs.docker.com/engine/install/ubuntu/ <br></br>
          8. Run 'sudo service docker start'<br></br>
          9. Install Docker Compose V2. https://docs.docker.com/compose/cli-command/#install-on-linux<br></br>
          10. Manage Docker as a non-root user. https://docs.docker.com/engine/install/linux-postinstall/<br></br>
          11. Add a bit of code at the end of ~/.bashrc to see the current branch. https://thucnc.medium.com/how-to-show-current-git-branch-with-colors-in-bash-prompt-380d05a24745<br></br>
          12. Clone a project to a folder within Ubuntu and Docker Compose Up.
        </p>

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