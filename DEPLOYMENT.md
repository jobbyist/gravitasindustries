# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions with a custom domain `gravitas.uno`.

## What's Been Configured

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Automatically builds the project when code is pushed to the `main` branch
   - Deploys the built files to GitHub Pages
   - Can also be triggered manually via workflow_dispatch

2. **CNAME File** (`public/CNAME`):
   - Contains the custom domain `gravitas.uno`
   - Automatically copied to the dist folder during build

## Required Setup Steps

To complete the GitHub Pages deployment, you need to:

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
4. The workflow will handle the rest automatically

### 2. Configure DNS for Custom Domain

You need to configure your DNS settings for `gravitas.uno`:

1. **For apex domain (gravitas.uno)**:
   - Add the following A records pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

2. **Alternative: Use www subdomain**:
   - If you prefer `www.gravitas.uno`, add a CNAME record:
     ```
     www.gravitas.uno → jobbyist.github.io
     ```

### 3. Verify Custom Domain in GitHub

1. After DNS is configured, go to **Settings** → **Pages**
2. The custom domain `gravitas.uno` should be automatically detected from the CNAME file
3. Check the box for **Enforce HTTPS** (recommended, available after DNS propagation)

## Testing the Deployment

After merging this PR to the `main` branch:

1. The GitHub Action will automatically run
2. Monitor the workflow progress in the **Actions** tab
3. Once complete, your site will be available at:
   - `https://gravitas.uno` (after DNS is configured)
   - `https://jobbyist.github.io/gravitasindustries/` (GitHub Pages default URL)

## Manual Deployment

You can also trigger a deployment manually:

1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the `main` branch
5. Click "Run workflow"

## Troubleshooting

- **DNS not working**: DNS changes can take up to 24-48 hours to propagate
- **Build failing**: Check the Actions tab for error logs
- **404 errors**: Ensure GitHub Pages is set to use "GitHub Actions" as the source

## Local Development

To test the build locally:

```bash
npm install
npm run build
npm run preview
```

This will build the project and start a local preview server.
