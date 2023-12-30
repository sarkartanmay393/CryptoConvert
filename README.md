# CryptoConvert

CryptoConvert is a web application that enables users to convert amounts various cryptocurrencies to fiat currencies. The application utilizes real-time exchange rates obtained from popular cryptocurrency data providers to perform accurate and up-to-date conversions.

## Features

- Select a source cryptocurrency from a list of top 100 cryptocurrencies.
- Input the amount to be converted.
- Choose the target currency (USD, EUR, etc.).
- View the converted amount instantly.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React
- **API**: Coinmarketcap (for fetching real-time exchange rates)

## Folder Structure

The project follows a structured organization with separate backend and frontend directories:

- `backend/`: Contains the Node.js backend.
- `frontend/`: Contains the React frontend.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sarkartanmay393/--.git
   ```

2. Setup the codebase:

   ```bash
   cd backend && pnpm install
   ```

   ```bash
   cd frontend && pnpm install
   ```

3. Run both separately:

   ```bash
   cd [dir] && pnpm run dev
   ```

4. or Use Docker Compose
   ```bash
   docker compose up
   ```
