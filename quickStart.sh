#!/bin/bash

options=("Run backend dev server" "Run frontend dev server" "Both")

echo "Select an option:"
select option in "${options[@]}"
do
    case $option in
        "Run backend dev server")
            cd backend && pnpm install && pnpm run dev
            break
            ;;
        "Run frontend dev server")
            cd frontend && pnpm install && pnpm run dev
            break
            ;;
        "Both")
            concurrently "cd backend && pnpm install && pnpm run dev" "cd frontend && pnpm install && pnpm run dev"
            break
            ;;
        *) echo "Invalid option";;
    esac
done
