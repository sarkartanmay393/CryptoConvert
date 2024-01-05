#!/bin/bash

if ! npm list -g | grep -i 'concurrently@'; then
    echo "Concurrently is not installed. Installing..."
    npm install -g concurrently
fi

concurrently "cd backend && pnpm install && pnpm run dev" "cd frontend && pnpm install && pnpm run dev"