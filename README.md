# TLDR

Hi, welcome to the source code for my personal portfolio page.

Below you'll find instructions on how to run the site locally, where to find anything that might interest you and how many of the features I've built into it work.

## Running Locally

First, initiate the development server by running the following command in your terminal:

```bash
yarn dev
```

Either **click the link that appears** in the terminal **or manually open** the link [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Structure

The structure of the project is as follows:

### Images

Images can be found in the `/public` folder. _This directory is mainly used for static media files._

### CSS Styling

CSS and any page styling will be found either in the `/styles` folder and in the case of components, directly next to the source file for the component in question.

Example:

```bash
/components
    /foo
        | foo.tsx
        | foo.module.css
```

### API

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Security

For security measures there may be some parts of the project itself that have been ommitted. These could range from:

- Images
- Security Details
- Site protection
- Personal details
- Any content hosted or stored within the live server
- Any authentication or Third-Party API account details

## Help

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
