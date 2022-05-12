import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Notes App</title>
        <meta
          name="description"
          content="Place where I can store my text, clipboard, etc. temporarily"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <textarea
          style={{
            resize: "none",
            padding: "16px",
            fontSize: "14px",
            border: "none",
            outline: "none",
            fontFamily: "'IBM Plex Mono', monospace",
          }}
          placeholder="type some text"
          rows={1}
        />
      </main>
    </>
  );
};

export default Home;
