# RugSafe Protocol - Docs

![RugSafe Logo](https://rugsafe.io/_next/static/media/logo5.7217ba98.png)

RugSafe is a cutting-edge multichain protocol designed to address and mitigate rug-pull risks in decentralized finance (DeFi). By transforming rugged tokens into opportunities, the protocol leverages cryptographic security measures, economic incentives, and innovative mechanisms to protect users while creating new financial instruments. RugSafe redefines recovery and resilience in DeFi, enabling users to secure their assets, recover losses, and engage in advanced financial operations.

| Status Type          | Status                                                                 |
|----------------------|-------------------------------------------------------------------------|
| **Development Build**| [![Development Build](https://github.com/rugsafe/solana-program/actions/workflows/development.yml/badge.svg)](https://github.com/rugsafe/solana-program/actions/workflows/development.yml) |
| **Issues**           | [![Issues](https://img.shields.io/github/issues/rugsafe/solana-program.svg)](https://github.com/rugsafe/solana-program/issues) |
| **Last Commit**      | [![Last commit](https://img.shields.io/github/last-commit/rugsafe/solana-program.svg)](https://github.com/rugsafe/solana-program/commits/main) |
| **License**          | [![License](https://img.shields.io/badge/license-APACHE-blue.svg)](https://github.com/rugsafe/solana-program/blob/main/LICENSE) |


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
