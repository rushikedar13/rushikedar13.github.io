# Rushikesh Kedar Portfolio

A React + Vite portfolio for Rushikesh Kedar, a full-stack developer based in Pune, Maharashtra.

## Run locally

```bash
cd portfilio
npm install
npm run dev
```

## Validate and build

```bash
npm run lint
npm run build
```

The production output is generated in `dist/`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the app from the `portfilio` directory and deploys `portfilio/dist` to GitHub Pages on every push to `main`.

1. Create the public repository `rushikedar13.github.io`.
2. Push this project to its `main` branch.
3. In repository settings, open **Pages** and select **GitHub Actions** as the source.
4. Wait for the workflow to finish, then open `https://rushikedar13.github.io`.

The site includes a downloadable `public/resume.html` resume. Replace it with a designed PDF later if desired, and add project screenshots when they are available. Do not add placeholder links or secrets to the repository.
