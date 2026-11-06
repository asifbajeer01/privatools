# PrivaTools

PrivaTools is a small Next.js Pages Router application containing browser-based text, calculation, and CSV utilities. The current implementation is a recovery foundation; individual tool behavior and privacy properties still require the verification described below.

## Features

The current Pages Router tree contains these routes:

- `/` — searchable tool directory.
- `/text/word-counter` — word and character statistics.
- `/calculators/percentage` — percentage calculations.
- `/excel/csv-cleaner` — CSV cleaning interface.

The presence of a route does not by itself establish that every advertised behavior has been tested. Tool-specific correctness work and regression tests are planned for later implementation phases.

## Technology

- Next.js 15
- React 19
- TypeScript 5
- Tailwind CSS 3 with PostCSS and Autoprefixer
- Node.js 22 or newer (required by the package manifest)
- npm and the committed `package-lock.json`

## Requirements

Install a supported Node.js version (22 or newer) and npm. Use the npm version bundled with your Node installation or a compatible modern npm release.

## Installation and development

From the repository root:

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js (normally `http://localhost:3000`).

## Build and run

```bash
npm run build
npm run start
```

`npm run start` serves the production build and should be run after `npm run build`.

## Validation commands

The current `package.json` defines only `dev`, `build`, and `start`. It does not currently define lint, type-check, or test scripts. Phase 1 verification should therefore use commands supported by the checked-out branch and record any checks that cannot be run; scripts must not be described as passing until actually executed.

## Environment configuration

The application source reviewed for this foundation does not require application-specific environment variables. Do not add secrets to the repository. If future integrations require configuration, document variable names in `.env.example`, keep real values in an untracked local `.env.local` or deployment secret store, and never expose server-only credentials through `NEXT_PUBLIC_*` variables.

## Repository structure

```text
src/
  pages/
    _app.tsx
    index.tsx
    calculators/percentage.tsx
    excel/csv-cleaner.tsx
    text/word-counter.tsx
  styles/
    globals.css
next.config.js
postcss.config.js
tailwind.config.js
tsconfig.json
package.json
package-lock.json
netlify.toml
```

Pages Router files under `src/pages` define the application routes. Global Tailwind directives are imported by `src/pages/_app.tsx`. Keep shared components and business logic in appropriately named `src/components` and `src/lib` directories as those are introduced; do not retain nested copies of page source as components.

## Deployment

`netlify.toml` configures a Netlify build using Node 22 and `npm ci && npm run build`. Deployment has not been independently verified as part of this documentation update. Confirm the hosting provider's Next.js runtime/adapter behavior and test a production deployment before release.

## Privacy and safety

The utility interfaces are intended to process user-entered content in the browser. This repository review is not a network-level audit of a deployed site, and it does not verify hosting logs, browser extensions, third-party services, or future integrations. Do not treat client-side processing as proof that no data is transmitted. Avoid sending user content to analytics, external APIs, or logs; verify production network behavior and hosting configuration before making stronger privacy claims.

## Contributing and safety requirements

- Work on an approved feature branch and keep `main` unchanged until release approval.
- Preserve the existing lockfile and use `npm ci` for reproducible installs.
- Run and report the checks actually available for your change; do not claim unexecuted tests passed.
- Add regression tests for utility behavior before changing parsing or calculation logic.
- Do not commit credentials, private data, generated build output, or local environment files.
- Check references and imports before moving or removing source files.
