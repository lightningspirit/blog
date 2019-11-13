# Lightningspirit's Blog with Typescript

Here is the repository that powers the https://lightningspir.it blog.

This project uses Gatsby's [starter blog](https://github.com/gatsbyjs/gatsby-starter-blog) with Typescript.

## Features (in addition to the Gatsby Starter)

- [Typescript](http://www.typescriptlang.org/)
- [Styled Components](https://www.styled-components.com/)
- [Graphql Codegen](https://github.com/dotansimha/graphql-code-generator)
- [Gatsby Transition Link](https://www.gatsbyjs.org/packages/gatsby-plugin-transition-link/?=transition)

## Development and Tests

Run `npm start` for development.

Run `npm test` to run the test suite.

## Build and Deploy

Run `npm run build` and use the AWS cli to deploy the website `aws s3 sync public/ s3://lightningspir.it`.
The bucket is already configured for website and `GetObject` policy is already set to public.
Tweaks are already in place using Cloudflare.

## Community

You're free to reuse this codebase for your own purpose.
