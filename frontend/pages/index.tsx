import type { NextPage } from "next";
import classes from "../styles/Home.module.css";
const { mainTitle, title, titleText, divider, code, listCode, caption, list } = classes;

const Home: NextPage = ({ ENV }: any) => {

  const copyToClipboard = (e: any) => {
    const { target: { outerText } } = e;
    { navigator.clipboard.writeText(outerText) }
    alert("Copied to Clipboard.");
  }

  return (
    <>
      <main>
        <div className={mainTitle}>
          <div className={title}>
            <h1 className={titleText}>A basic template for a Next.js, Express.js, Mongo, TypeScript and Docker Web App</h1>
            <h3>This is just to save me time on future projects and for my own personal interest. If you use it, use at your own risk.</h3>
            <div className={divider} />
            <h5>Last update: November 20<sup>th</sup> 2021</h5>
          </div>
        </div>
      </main>

      <section>
        <div className={title}>
          <h3 className={titleText}>To run this page in localhost:3000, simply clone or download it from <a target="_blank" href="https://github.com/O-K-G/Basic-Template" rel="noopener noreferrer">https://github.com/O-K-G/Basic-Template</a>, and in the command line:</h3>
          <div className={divider} />
        </div>
        <p>Run&nbsp;<button onClick={copyToClipboard} className={code}>docker compose up</button>&nbsp;when in <b>development</b>.</p>
        <p>Run&nbsp;<button onClick={copyToClipboard} className={code}>ENV=prod docker compose up</button>&nbsp;when in <b>production</b>.</p>
        <p className={caption}>Current environment variable in this page:&nbsp;<b>{ENV}</b></p>
        <div className={divider} />
      </section>

      <section>
        <h3>Quick Guide - Develop with Ubuntu inside Windows:</h3>
        <ol className={list}>
          <li>Install the following Windows features: <b>Windows Subsystem for Linux</b> (WSL), <b>Virtual Machine Platform</b>.</li> <a target="_blank" href="https://www.windowscentral.com/how-manage-optional-features-windows-10" rel="noopener noreferrer">https://www.windowscentral.com/how-manage-optional-features-windows-10</a>
          <li>Update Windows.</li>
          <li>Add in the folder &apos;<b>{"Users/<user name>/"}</b>&apos; (probably in your main drive) the file &apos;<b>.wslconfig</b>&apos; with the following Text:<br></br>
            <button onClick={copyToClipboard} className={listCode}>
              [wsl2]<br></br>
              memory=8gb<br></br>
              processors=2<br></br>

              [interop]<br></br>
              appendWindowsPath = false<br></br>
            </button>
          </li>
          <li>Install the Microsoft Store Ubuntu app and open it.</li>
          <li>Update/upgrade Ubuntu. <a target="_blank" href="https://www.cyberciti.biz/faq/upgrade-update-ubuntu-using-terminal" rel="noopener noreferrer">https://www.cyberciti.biz/faq/upgrade-update-ubuntu-using-terminal</a></li>
          <li>Install Node in Linux. <a target="_blank" href="https://github.com/nodesource/distributions/blob/master/README.md" rel="noopener noreferrer">https://github.com/nodesource/distributions/blob/master/README.md</a></li>
          <li>Update NPM: <button onClick={copyToClipboard} className={listCode}>npm install -g npm@latest</button>.</li>
          <li>Update Git and the repo as a Super User: <button onClick={copyToClipboard} className={listCode}>sudo -i</button> or <button onClick={copyToClipboard} className={listCode}>sudo -s</button>. <a target="_blank" href="https://git-scm.com/download/linux" rel="noopener noreferrer">https://git-scm.com/download/linux</a></li>
          <li>Install Docker + repo. <a target="_blank" href="https://docs.docker.com/engine/install/ubuntu" rel="noopener noreferrer">https://docs.docker.com/engine/install/ubuntu</a></li>
          <li>Run <button onClick={copyToClipboard} className={listCode}>sudo service docker start</button>.</li>
          <li>Install Docker Compose V2. <a target="_blank" href="https://docs.docker.com/compose/cli-command/#install-on-linux" rel="noopener noreferrer">https://docs.docker.com/compose/cli-command/#install-on-linux</a></li>
          <li>Manage Docker as a non-root user. <a target="_blank" href="https://docs.docker.com/engine/install/linux-postinstall" rel="noopener noreferrer">https://docs.docker.com/engine/install/linux-postinstall</a></li>
          <li>Add a bit of code at the end of ~/.bashrc to see the current branch in the terminal. <a target="_blank" href="https://thucnc.medium.com/how-to-show-current-git-branch-with-colors-in-bash-prompt-380d05a24745" rel="noopener noreferrer">https://thucnc.medium.com/how-to-show-current-git-branch-with-colors-in-bash-prompt-380d05a24745</a></li>
          <li>Clone a project to a folder <b>within Ubuntu</b>, and set one of the credentials helpers, like &apos;store&apos; for example. <a target="_blank" href="https://git-scm.com/docs/git-credential-store" rel="noopener noreferrer">https://git-scm.com/docs/git-credential-store</a></li>
          <li>Run <button onClick={copyToClipboard} className={listCode}>docker compose up</button>or<button onClick={copyToClipboard} className={listCode}>ENV=prod docker compose up</button>, and edit your code <b>within</b> the Docker container.</li>
        </ol>
      </section>

      <footer>

      </footer>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { ENV } = process.env;

  return {
    props: { ENV: ENV === "" && "dev" || ENV === "prod" && "prod" },
  };
};