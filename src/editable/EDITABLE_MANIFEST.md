# Slot 4 Editable Manifest

This folder is the only editable UI surface for redesign work.

## Contract

- `src/app/**` remains route wiring only.
- `src/lib/**`, `src/config/**`, and APIs remain logic-only.
- All visual changes happen in `src/editable/**`.
- Keep exports and props compatible with current route usage.

## Editable Surface

```txt
src/editable/shell/EditableSiteShell.tsx
src/editable/shell/EditableNavbar.tsx
src/editable/shell/EditableFooter.tsx
src/editable/pages/HomePage.tsx
src/editable/pages/LoginPage.tsx
src/editable/pages/SignupPage.tsx
src/editable/pages/TaskArchivePage.tsx
src/editable/pages/TaskDetailPage.tsx
src/editable/pages/*Page.tsx
src/editable/cards/PostCards.tsx
src/editable/sections/*.tsx
src/editable/content/*.ts
src/editable/theme/*.ts
src/editable/theme/editable-global.css
```

## Redesign Rule

AI can fully restyle layout, cards, sections, typography, color, and shell inside `src/editable/**` only.
Do not alter data fetching, route logic, or backend behavior.

## Do Not Touch

```txt
src/app/**
src/lib/**
src/config/**
src/components/**
.github/**
Dockerfile
package.json
next.config.*
```

