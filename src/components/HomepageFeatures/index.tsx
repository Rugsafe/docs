import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

// Define the list of features
const FeatureList = [
  {
    title: 'Vault Creation',
    icon: '🏦', // Bank icon to symbolize vaults
    description: (
      <>
        Users can easily create vaults for securely depositing rugged tokens, facilitating asset recovery with antifraud measures.
      </>
    ),
  },
  {
    title: 'Anticoin Issuance',
    icon: '💳', // Credit card icon to represent issued anticoins
    description: (
      <>
        For every deposit, the protocol mints anticoins that represent a user's stake, inversely pegged to the value of the underlying rugged tokens.
      </>
    ),
  },
  {
    title: 'Multichain Support',
    icon: '🌐', // Globe icon to indicate multichain functionality
    description: (
      <>
        Rugsafe operates across multiple blockchains, allowing users to deposit rugged tokens and access liquidity seamlessly within a heterogeneous ecosystem.
      </>
    ),
  },
  {
    title: 'DeFi Suite',
    icon: '📊', // Bar chart icon to signify investment opportunities
    description: (
      <>
        The protocol offers a comprehensive DeFi suite, enabling rugged token victims to recover assets and explore new opportunities for growth and investment.
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
