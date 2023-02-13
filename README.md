This is a starter Next.js app for a turbo monorepo

## Instructions

```bash
npx create-next-app -e add-url-to-repo // create the app in the apps folder of the monorepos
```

```bash
pnpm install // work from the root of the monorepo
```

add scripts to the root package.json to filter the dependencies of the app
"turbo run dev --filter @pmtric/app-name..."

- uses pnpm
- uses tailwind
- uses typescript
- uses prettier
- uses the principles and structure of turborepo

## Important

- apps are deployed on /app-name route
- configure base path in next.config.js accordingly
- this means that the app runs on localhost:3000/app-name in dev
- add the protocol and domain env vars in env.local to point to the staging server (for auth)
- app name must be added to the platform to work
