# Kerala Finishing School — website

React + Vite rebuild of keralafinishingschool.com.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Where things live

| What | File |
| --- | --- |
| Phone, email, address, WhatsApp number, menu | `src/data/site.js` |
| Programs (titles, summaries, page content) | `src/data/programs.js` |
| FAQs | `src/data/faqs.js` |
| Colours, fonts, layout | `src/index.css` |
| Pages | `src/pages/` |
| Images (logo, photos) | `public/img/` |

Most content edits only need the `src/data/` files.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel: **Add New → Project → Import** the repository.
3. Vercel detects Vite automatically (build `npm run build`, output `dist`). Click **Deploy**.
4. Every push to `main` redeploys; every pull request gets its own preview URL for testing.

`vercel.json` makes page refreshes work on routes like `/about` and redirects the old
`.html` URLs (e.g. `/Pay_After_Placement_Program.html`) to the new pages, so Google links keep working
after the domain is switched over.

## Still to do

- Copy the logo and photos from the old site into `public/img/`, then set `logo: '/img/logo.jpg'` in `src/data/site.js`.
- Write content for programs marked `draft: true` in `src/data/programs.js`.
- Add KEAM/NEET batch details on the Test prep page.
- Confirm the WhatsApp number in `src/data/site.js`.
