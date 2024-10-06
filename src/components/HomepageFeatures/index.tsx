import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

// Define the list of features
const FeatureList = [
  {
    title: 'Learn',
    icon: '⚖️',
    description: (
      <>
        RugSafe allows you to create your own vaults in minutes, as easily as a smart contract.
      </>
    ),
  },
  {
    title: 'Create',
    icon: '📈',
    description: (
      <>
        Access the dynamic scaling unlocked by data availability sampling, where scale increases with the number of users.
      </>
    ),
  },
  {
    title: 'Developers',
    icon: '⚙️',
    description: (
      <>
        Learn about rug pulls and how Rugsafe protects you from them.
      </>
    ),
  },
  {
    title: 'Community',
    icon: '👥',
    description: (
      <>
        Join the RugSafe community to connect, collaborate, and contribute.
      </>
    ),
  },
];

function Feature({ title, icon, description }) {
  return (
    <div className={clsx('col col--3', styles.featureBox)}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  const { colorMode } = useColorMode();

  return (
    <section className={clsx(styles.featuresSection, styles[colorMode])}>
      <div className="container">
        <div className={clsx('row', styles.featuresRow)}>
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
