# Personal Profile and Blog

This is a personal and blog website using Astro and AstroWind(**[Astro 2.0](https://astro.build/blog/astro-2/) + [Tailwind CSS](https://tailwindcss.com/)**) template.


# 🚀 AstroWind

See more at [AstroWind](https://astro.build/themes/details/astrowind/)

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.mjs`

```javascript
const CONFIG = {
  name: 'Example',

  origin: 'https://example.com',
  basePathname: '/', // Change this if you need to deploy to Github Pages, for example
  trailingSlash: false, // Generate permalinks with or without "/" at the end

  title: 'Example - This is the homepage title of Example', // Default seo title
  description: 'This is the homepage description of Example', // Default seo description
  defaultImage: 'image.jpg', // Default seo image

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en', // Default language
  textDirection: 'ltr', // Default html text direction

  dateFormatter: new Intl.DateTimeFormat('en', {
    // Date format
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // Or "G-XXXXXXXXXX",
  googleSiteVerificationId: false, // Or some value,

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};
```

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/egarcia-p/portfolio)

#### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fegarcia-p%2Fportfolio)

<br>

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
