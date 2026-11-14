# CareFirst Hospital (React + Vite)

A responsive, multi-page hospital website built for practice.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173/

## Pages

Home, About, Services, Doctors (filterable), Contact (validated form), plus a 404 page.

## Structure

```
src/
  components/  Navbar, Footer, Wave, Reveal, CountUp, HeroIllustration, cards...
  pages/       Home, About, Services, Doctors, Contact, NotFound
  data.js      services, doctors, testimonials, stats (edit this to change content)
  index.css    all styling, with breakpoints at 1000, 900, 860 and 640px
```

## Make it yours

- Hospital name, address, phone and email are placeholders (search for "CareFirst", "Wellness Avenue", "0800").
- Doctors and testimonials are fictional. Edit `src/data.js`.
- The contact form is a demo and does not send anything yet.

## Deploying

`public/_redirects` (Netlify) and `vercel.json` (Vercel) are included so links like `/about` still work after a refresh.
