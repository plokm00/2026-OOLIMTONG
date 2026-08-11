# Repository Instructions

## Next.js page source policy

- This repository is a Next.js App Router project. Treat `app/` as the only source of public pages.
- Never create, restore, rename, move, edit, or serve page-level `.html` files anywhere in the active tree, especially under `public/`.
- Never restore page HTML from `agent/html-backup-20260812` or another Git revision into the active application. Use that branch only as a read-only historical backup.
- When old HTML behavior or content is needed, translate it into the existing JavaScript structure instead of copying the HTML file back:
  - route entry points: `app/(ko)/**/page.js` and `app/(en)/**/page.js`
  - page content and metadata: `app/_content/*.js`
  - shared rendering and behavior: `app/_components/*.js`
- Keep `public/` for static assets only, such as images, SVG, CSS, and browser-side JavaScript. Do not place HTML documents there.
- Do not edit generated `.next/**/*.html` output. It is build output, not source.
- Preserve extensionless public URLs. Keep compatibility for old `.html` URLs through redirects in `next.config.mjs`, never by restoring HTML files.
- CSS files may be edited for styling and existing browser-side JavaScript assets may be edited for interactions, but page structure and content changes must be made in the JavaScript sources under `app/`.
- If a requested change appears to require an HTML file, stop before making that change, explain the conflict, and ask the user for explicit approval to override this policy.

## Validation

- After any public-page change, run `npm.cmd run build` on Windows.
- Confirm that every expected public address appears in the Next.js route list and that `public/` contains no `.html` files.
