<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <a href="https://github.com/sarkartanmay393/CryptoConvert">
    <img src="./frontend/public/logo.png" alt="Logo" width="92" height="92">
  </a>

<h3 align="center">CryptoConvert</h3>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
   A web application that allows users to convert amounts from different cryptocurrencies to fiat currencies
   <br />
   <a href="https://github.com/sarkartanmay393/CryptoConvert"><strong>Explore Code »</strong></a>
   <br />
   <br />
   <a href="https://cryptoconvert.vercel.app/" target="_blank" rel="noopener noreferrer" >View Demo</a>
   ·
   <a href="https://github.com/sarkartanmay393/CryptoConvert/issues">Report Bug</a>
   ·
   <a href="https://github.com/sarkartanmay393/CryptoConvert/
issues">Request Feature</a>
 </p>
</div>

CryptoConvert is a web application that enables users to convert amounts various cryptocurrencies to fiat currencies. The application utilizes real-time exchange rates obtained from popular cryptocurrency data providers to perform accurate and up-to-date conversions.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Feautures</a></li>
      </ul>
      <ul>
        <li><a href="#technologies-i-used">Technologies I Used</a></li>
      </ul>
      <ul>
        <li><a href="#folder-structure">Folder Structure</a></li>
      </ul>
      <ul>
        <li><a href="#screenshots">Screenshots</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#steps-to-run">Steps to run</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Features

- Select a source cryptocurrency from a list of top 100 cryptocurrencies.
- Input the amount to be converted.
- Choose the target currency (USD, EUR, etc.).
- View the converted amount instantly.

### Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React
- **API**: Coinmarketcap (for fetching real-time exchange rates)

## Folder Structure

The project follows a structured organization with separate backend and frontend directories:

- `backend/`: Contains the Node.js backend.
- `frontend/`: Contains the React frontend.

<!-- ### Packages I Used

1. "tailwindcss"
2. "vite"
3. "jest"
4. "nodemon"
5. "supertest"
6. "lucid-react"
7. "shadcn/ui" -->

### Screenshots

<details>
   <summary><strong>Show</strong> </summary>

  <div style="text-align: center;"> <strong><i>Mobile View</i></strong></div>

![Mobile View](screenshots/phone.png "Mobile View")

  <div style="text-align: center;"> <strong><i>Desktop View</i></strong></div>

![Desktop View](screenshots/desktop.png "Desktop View")

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Running a development environment for this project will be the easiest thing in you day.

### Prerequisites

- [**Node**](https://nodejs.org/en/)

### Steps to run

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sarkartanmay393/--.git
   ```

2. Run both command separately to setup the codebase:

   ```bash
   cd backend && pnpm install && pnpm run dev
   ```

   ```bash
   cd frontend && pnpm install && pnpm run dev
   ```

- or Use Docker Compose

  ```bash
  docker compose up
  ```

- or Run the following command to start using `concurrently`

  ```zsh
  chmod +x quickStart.sh
  /.quickStart.sh
  ```

<br />

> If any issue occured ...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -s -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. Wait for review

See the [open issues](https://github.com/sarkartanmay393/CryptoConvert/issues) for a full list of proposed features (and known issues).

<!-- CONTACT -->

## Contact

Your Name - Tanmay Sarkar [@sarkartanmay393](https://twitter.com/sarkartanmay393) - [sarkartanmay393@gmail.com](mailto:sarkartanmay393@gmail.com)

Project Link: [https://github.com/sarkartanmay393/CryptoConvert](https://github.com/sarkartanmay393/CryptoConvert)

**Thanks for visiting my project. If you like it, please give it a star. It will help me a lot. Thanks again!**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/sarkartanmay393/CryptoConvert.svg?style=for-the-badge
[forks-url]: https://github.com/sarkartanmay393/CryptoConvert/network/members
[stars-shield]: https://img.shields.io/github/stars/sarkartanmay393/CryptoConvert.svg?style=for-the-badge
[stars-url]: https://github.com/sarkartanmay393/CryptoConvert/stargazers
[issues-shield]: https://img.shields.io/github/issues/sarkartanmay393/CryptoConvert.svg?style=for-the-badge
[issues-url]: https://github.com/sarkartanmay393/CryptoConvert/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tanmaysrkr
[React.dev]: https://img.shields.io/badge/React-2496ed?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://www.docker.com/
[Express.com]: https://img.shields.io/badge/Express-2496ed?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://www.docker.com/
[Node.com]: https://img.shields.io/badge/Nodejs-2496ed?style=for-the-badge&logo=nodejs&logoColor=white
[Node-url]: https://www.docker.com/
