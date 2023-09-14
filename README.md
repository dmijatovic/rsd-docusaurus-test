# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Instructions

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Adding new pages

The documentation has 2 main sections:

- Developers documentation: techinical documentation for developers who want to run their own instance of RSD
- Users documentation: the documentation about how to use RSD

To create new page create a new md file at the location where new page need to be added.

### Versioning

See [documentation for more details](https://docusaurus.io/docs/versioning)

```bash

npm run docusaurus docs:version 1.x.x

```

### Translations

See [documentation for more details](https://docusaurus.io/docs/i18n/tutorial)

```bash
# start
npm run start -- --locale en

# create translation files (metadata)
npm run write-translations -- --locale nl

# copy default markdown content into i18 location


```

### Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
