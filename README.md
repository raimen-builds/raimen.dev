# raimen.dev

Single-page Astro portfolio site for `raimen.dev`, built for static hosting on GitHub Pages with a custom domain.

## Local development

```sh
npm install
npm run dev
```

Build the site locally:

```sh
npm run build
```

## Content updates

Most launch content lives in `src/data/site.ts`.

Update these areas there:

- site metadata and hero copy
- about copy and highlights
- portfolio cards and links
- social profile URLs
- contact email and CTA copy

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

To launch on the `raimen.dev` custom domain:

1. Push this repo to GitHub.
2. Ensure the default branch is `main`.
3. In GitHub, enable Pages with the GitHub Actions source.
4. Leave `public/CNAME` set to `raimen.dev`.
5. Point your DNS to GitHub Pages:
   - `A` records for the apex domain should target GitHub Pages IPs.
   - `www` can be a `CNAME` to `<your-github-username>.github.io` if you want that alias.
6. In the repo Pages settings, confirm the custom domain is `raimen.dev` and enforce HTTPS once the certificate is issued.

## Notes

- The current design is a strong launch version with placeholder project and social content that should be swapped for finalized details.
- The implementation uses inferred brand styling because the PDF branding manual was available locally but not machine-readable in this environment.
