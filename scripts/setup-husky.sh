#!/usr/bin/env bash
npx husky install
npx husky add .husky/pre-commit "npm run lint && npm run format:check && npm run type-check"
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
