# @aquascape/mobile

Expo + React Native app for aquascape-studio.

Shares UI primitives with web via `@aquascape/ui`, and the plant catalog via
`@aquascape/botany`. Calls `aquascape-api` over Connect-Web (fetch-based, no
native transport needed on RN thanks to `react-native-fetch-api` compatibility).

## Dev

```bash
git submodule update --init --recursive
pnpm install
pnpm buf:generate
pnpm dev              # Expo dev tools
pnpm ios              # or android / web
```

## Release

EAS Build + EAS Submit. Config landed in `eas.json` when we get there. Images
are built per-platform by CI; prod deploys are gated on `aquascape-infra`'s
release workflow.

## Owner

app-agent.
