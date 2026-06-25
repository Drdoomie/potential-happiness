# World Cup 2026 Predictor

Static web app with an auto-update-ready data file.

## How It Updates

The app reads tournament data from `data.json`.

The GitHub Action in `.github/workflows/update-worldcup-data.yml` runs every 30 minutes. It runs `scripts/update-worldcup-data.mjs`, which can fetch a fresh JSON feed and update `data.json`. When `data.json` changes, Netlify redeploys the site automatically.

You need a live data source that returns the same shape as `data.json`. Keep API keys out of the browser app.

## Publish With GitHub + Netlify

1. Create a new GitHub repository.
2. Upload every file in this folder to the repository.
3. In Netlify, choose **Add new site** > **Import an existing project**.
4. Connect your GitHub account and choose the repository.
5. Use these Netlify settings:
   - Build command: leave blank
   - Publish directory: `.`
6. Deploy the site.

## Turn On Auto Updates

1. Choose a score/data provider.
2. Make or choose an endpoint that returns JSON shaped like `data.json`.
3. In GitHub, open the repository settings.
4. Go to **Secrets and variables** > **Actions**.
5. Add a repository secret named `WORLD_CUP_DATA_URL`.
6. Set its value to your private/live JSON endpoint.
7. Go to the **Actions** tab.
8. Open **Update World Cup data**.
9. Click **Run workflow** to test it manually.

After this, GitHub checks for updates every 30 minutes. If `data.json` changes, Netlify publishes the updated app.

## Files

- `index.html`: app layout
- `styles.css`: app design
- `app.js`: simulator and prediction logic
- `data.json`: current tournament data
- `scripts/update-worldcup-data.mjs`: scheduled data updater
- `.github/workflows/update-worldcup-data.yml`: GitHub Action schedule
- `netlify.toml`: Netlify publish config and light caching rules
