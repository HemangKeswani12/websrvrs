# websrvrs

Web services and AI automation.

Web work, done properly and priced fairly. We build, fix, maintain and modernise
the websites businesses run on, and help larger teams automate repetitive work.

## Practices

**Web services** — new builds, rescues and turnarounds, maintenance, upgrades and
migrations, ecommerce setup.

**AI automation consulting** — process audit, pilot build, rollout, cost review.

## Pricing

| Service | Turnaround | From |
| --- | --- | --- |
| New build | 3 to 7 days | $900 |
| Rescue and turnaround | 48 hours | $400 |
| Upgrade and migration | about a week | $750 |
| Maintenance | ongoing | $120 per month |
| Ecommerce setup | 5 to 10 days | $1,400 |
| Automation audit | 1 to 2 weeks | $2,500 |
| Pilot build | 2 to 4 weeks | $6,000 |
| Cost review | 1 week | $1,800 |
| Rollout | 6 to 12 weeks | quoted |

## Layout

Zero build. No toolchain, no dependencies, no framework.

```
index.html        the site
styles.css        light theme, blue for web, teal for automation
script.js         nav, work carousel, one reveal pass
favicon.svg
work/
  skeleton.css    shared base for the samples, re-themed via --accent
  skeleton.js
  local/          local service business sample
  saas/           SaaS product sample
  storefront/     ecommerce sample
  booking/        service business sample
  membership/     membership and community sample
  program/        program and enrolment sample
  digital/        digital product sample
```

## Run locally

```
python -m http.server 8000
```

## Deploy

Static site. No build command, no output directory. Point the domain at it.

## Contact

Calls booked through Calendly, enquiries by email, phone for anything urgent.
