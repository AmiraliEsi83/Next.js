import Head from 'next/head';
import styles from 'src/app/page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Project</title>
        <meta name="description" content="A simple Next.js webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Next.js Page!
        </h1>
        <p className={styles.description}>
          Explore how this simple page was created using Next.js.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Installation &rarr;</h2>
            <p>To start, Node.js was installed, followed by the creation of a new Next.js app using npx:</p>
            <code>npx create-next-app@latest my-nextjs-project</code>
            <p>After navigating into the project directory, the development server was started with:</p>
            <code>cd my-nextjs-project && npm run dev</code>
            <p>This initialized a new project, which can be viewed in the browser.</p>
          </div>

          <div className={styles.card}>
            <h2>Building the Page &rarr;</h2>
            <p>The 'page.js' file in the 'pages' directory was modified to include this content and styling, utilizing React components and CSS modules.</p>
          </div>

          <div className={styles.card}>
            <h2>Difficulties Encountered &rarr;</h2>
            <p>Challenges arose during development, such as understanding Next.js routing and CSS modules. These were overcome by consulting the official Next.js documentation and various online resources.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
