# Vercel Deployment Guide

## 1) Push project to GitHub

1. Create a repository on GitHub.
2. Commit and push this project:
   - `git init`
   - `git add .`
   - `git commit -m "Professional portfolio ready for deployment"`
   - `git branch -M main`
   - `git remote add origin <your-repo-url>`
   - `git push -u origin main`

## 2) Import into Vercel

1. Sign in to Vercel: https://vercel.com
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository.

## 3) Configure build settings

Vercel usually auto-detects Vite. If needed, set:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## 4) Deploy

1. Click **Deploy**.
2. After build completes, open your live URL.

## 5) Add custom domain (optional)

1. In Vercel project settings, open **Domains**.
2. Add your domain and follow DNS instructions.

## 6) Update images

Upload your files before final production checks:

- `public/images/patents/patent-1.png`
- `public/images/patents/patent-2.png`
- `public/images/achievements/achievement-1.png`
- `public/images/achievements/achievement-2.png`
- `public/images/achievements/achievement-3.png`

Then commit and push again. Vercel will auto-redeploy.