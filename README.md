# Shiyi He — UX Research Portfolio

A standalone, responsive UX research portfolio about how data tools shape understanding, strategy, and trust.

Six case studies cover QualiVision, data wrangling tools, data serialization formats, BibWrangler, color palette tools, and ChARLES. Shiyi He is sole or first author across the six projects. The portfolio distinguishes system and design contributions from completed user studies and planned evaluation.

The site supports continuous and guided reading, deep links to case study sections, and interactive explanatory examples. It is a static HTML/CSS/JavaScript website with no build step, application server, or ChatGPT login requirement.

## Preview locally

With Python 3 installed, run this from the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory site
```

Open <http://127.0.0.1:4173/>. You can also open `site/index.html` directly in a browser.

Google Fonts is optional; system fonts are used if it is unavailable.

## Deploy with GitHub Pages

1. In this repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**. Future pushes to `main` deploy automatically.
4. Use the published website URL shown by the deployment or Pages settings.

The deployment workflow publishes only `site/`. Repository documentation and configuration are not included in the website.

GitHub Pages instructions: [configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Edit the portfolio

| File | Purpose |
| --- | --- |
| `site/content.js` | Case study copy, roles, findings, methods, and research links |
| `site/app.js` | Homepage, routes, guided reading, and interactive examples |
| `site/style.css` | Typography, colors, layouts, responsive styles, and print styles |
| `site/index.html` | Page metadata, navigation, and entry point |
| `site/icon.svg` | Browser icon |
| `.github/workflows/deploy.yml` | Automatic publication to GitHub Pages |

Project links use URL fragments, such as `#project/dsf` and `#project/dsf/evidence`, so they work under a GitHub Pages project path without server rewrites.

To check syntax with Node.js:

```sh
node --check site/content.js
node --check site/app.js
```

## Custom domain

A domain is optional. To use one later, add it in **Settings → Pages → Custom domain**, configure the domain's DNS as directed by GitHub, and enable HTTPS once the certificate is ready. Do not commit a `CNAME` file until the intended domain has been selected and configured.

See [managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Research and content

- [QualiVision: Towards Scaling Qualitative Analysis of Video Data](https://arxiv.org/abs/2608.13594)
- [ChARLES](https://doi.org/10.1145/3722212.3725089)

- [Reading Between the Curly Braces](https://arxiv.org/abs/2607.26211)
- [How Wrangling Tools Shape Wrangling](https://arxiv.org/abs/2607.26198)
- [Trade-offs in Data Color Palette Design Tools](https://arxiv.org/abs/2608.19148)
- [BibWrangler](https://bib-wrangler.netlify.app/)

Illustrative interface sketches and interactions are distinguished from empirical results. The repository does not contain participant records, transcripts, private research files, or hosting credentials.

Copyright © 2026 Shiyi He. Rights in the referenced research remain with their respective authors and rights holders.
