import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useColorMode } from '@docusaurus/theme-common'; // Import useColorMode hook

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <header className={clsx(styles.rugsafeHome, colorMode === 'dark' && styles.darkMode)}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={clsx(styles.heroTitle, colorMode === 'dark' && styles.darkMode)}>RugSafe</h1>
          <h2 className={clsx(styles.heroSubtitle, colorMode === 'dark' && styles.darkMode)}>
            Solving the biggest Problem in Crypto
          </h2>
          <p className={clsx(styles.heroDescription, colorMode === 'dark' && styles.darkMode)}>
            A Multichain Protocol for recovering from & defending against Rug Pulls
          </p>
          <div className={styles.heroButtons}>
            <Link className={clsx(styles.buttonPrimary, colorMode === 'dark' && styles.darkMode)} to="https://rugsafe.io/assets/paper/rugsafe.pdf">
              Read Paper
            </Link>
            <Link className={clsx(styles.buttonSecondary, colorMode === 'dark' && styles.darkMode)} to="/docs/intro">
              Documentation
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="img/janitor.png" alt="RugSafe Vault" />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
