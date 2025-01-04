# RugSafe Protocol - Documentation

![RugSafe Logo](https://rugsafe.io/_next/static/media/logo5.7217ba98.png)

RugSafe is a cutting-edge multichain protocol designed to address and mitigate rug-pull risks in decentralized finance (DeFi). By transforming rugged tokens into opportunities, the protocol leverages cryptographic security measures, economic incentives, and innovative mechanisms to protect users while creating new financial instruments. RugSafe redefines recovery and resilience in DeFi, enabling users to secure their assets, recover losses, and engage in advanced financial operations.

| Status Type          | Status                                                                 |
|----------------------|-------------------------------------------------------------------------|
| **Development Build**| [![Development Build](https://github.com/rugsafe/RugSafeDocs/actions/workflows/pipeline.yml/badge.svg)](https://github.com/rugsafe/RugSafeDocs/actions/workflows/pipeline.yml) |
| **Issues**           | [![Issues](https://img.shields.io/github/issues/rugsafe/RugSafeDocs.svg)](https://github.com/rugsafe/RugSafeDocs/issues) |
| **Last Commit**      | [![Last commit](https://img.shields.io/github/last-commit/rugsafe/RugSafeDocs.svg)](https://github.com/rugsafe/RugSafeDocs/commits/main) |
| **License**          | [![License](https://img.shields.io/badge/license-GPL-blue.svg)](https://github.com/rugsafe/RugSafeDocs/blob/main/LICENSE) |


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


## Contributing

We welcome contributions to RugSafe! Join our community and help shape the future of DeFi:
- **Discord**: [Join our community](https://discord.gg/ecMQ2D6nsu)
- **Telegram**: [Join the chat](https://t.me/rugsafe)

## License

RugSafe is released under the [GPL License](LICENSE).

---

**Note**: This repository is under active development and may undergo significant changes. For a detailed understanding of RugSafe, refer to our [white paper](https://rugsafe.io/assets/paper/rugsafe.pdf).
