# Movie Gallery - Mini Project

Knock-off and minimalist version of Youtube Web.
Total workdays: 3 days for [Initial Release] tags feature (+1 for Reactjs and Nextjs adaptation).

### Tech Stacks:
- Next.js v11.0.1
- Tailwind CSS v2.2.4
- Typescript
- Eslint
- Prettifer
- Husky
- Lint-Staged
- PostCSS
- Docker & Docker Compose 2

### Web Features
- [Initial Release] Homepage with list of available movies (Client-side rendering + Thumbnail Lazy Load).
- [Initial Release] Search page with Date Filter feature (Client-side rendering + Thumbnail Lazy Load)
- [Initial Release] Movie Detail page (Server-side rendering for SEO purposes + Thumbnail Lazy Load)
- [Initial Release] Fully Resposive UI.
- **Note**: Mock API Integrated (You might see some bad practices of tempering Response Body/JSON).


### Requirements

- Node.js
- NPM (Package Manager)

### Getting started

#### A. Directly to your Local Machine:

Run the following command on your local environment:

```
git clone https:.......
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

#### B. Using Docker Compose:

```
cp .env.example .env
docker-compose -f docker-compose.dev.yaml up -d --build
```

Open http://localhost:3000 with your favorite browser to see your project.


### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next.js). It will also removed unused CSS from Tailwind CSS

You can create an optimized production build with:

```
npm run build-prod
```

Now, your project is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.
