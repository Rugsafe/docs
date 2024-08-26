import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
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

function Feature({title, icon, description}: FeatureItem) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={clsx('col col--3', styles.feature)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.featureIcon}>{icon}</div>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p className={clsx(styles.featureDescription, {[styles.visible]: isHovered})}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const { colorMode } = useColorMode(); // Get the current color mode

  return (
    <section className={clsx(styles.features, styles[colorMode])}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
