# lukapokrajac.com

Personal CV / portfolio site for Luka Pokrajac. Plain static HTML/CSS/JS — no build step.

## Files
- `index.html` — the page
- `styles.css` — styling (light + dark theme)
- `script.js` — theme toggle, scroll reveal, footer year
- `LukaPokrajac_CV.pdf` — downloadable CV (keep this in sync with your real CV)

## Preview locally
Just open `index.html` in a browser, or run a tiny server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to Cloudflare Pages

### Option A — Direct upload (no GitHub needed)
1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Name the project (e.g. `lukapokrajac`), then drag the **contents** of this `site/` folder
   (not the folder itself) into the upload box. Deploy.
3. You'll get a `*.pages.dev` URL to verify it works.

### Option B — Connect to Git (auto-deploys on every push)
1. Push this folder to a GitHub repo.
2. Cloudflare Pages → **Create** → **Connect to Git** → pick the repo.
3. Build settings: **Framework preset = None**, **Build command = (blank)**,
   **Output directory = /** (or `site` if the repo root contains this folder).

## Point lukapokrajac.com at it
1. In your Pages project → **Custom domains** → **Set up a domain** → enter `lukapokrajac.com`
   (and add `www.lukapokrajac.com` too if you want).
2. If the domain's DNS is already on Cloudflare, it adds the records automatically — done.
   If not, add the CNAME records Cloudflare shows you at your registrar.
3. HTTPS is provisioned automatically (can take a few minutes).

## Updating later
Edit the HTML, re-upload (Option A) or `git push` (Option B). When your CV changes,
replace `LukaPokrajac_CV.pdf`.
