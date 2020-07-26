<h1 align="center">
  Cotabox - FullStack Test
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/allanneto/cotabox-fullstack-test">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/allanneto/cotabox-fullstack-test">

  <a href="https://github.com/allanneto/cotabox-fullstack-test/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/allanneto/cotabox-fullstack-test">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pushpin-projeto">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-instalacao">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-como-contribuir">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">License</a>
</p>

<br>

## :rocket: Tecnologias

This project has these technologies:

- [React](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)

Extras:

- Main Libs
  - [Axios](https://github.com/axios/axios)
  - [Express](https://expressjs.com/pt-br/)
- Styles
  - [Styled-Components](https://styled-components.com/)
  - [EditorConfig](https://editorconfig.org/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- Softwares
  - [VSCode](https://code.visualstudio.com/)

## Project

**Cotabox - Test** is a project to a Fullstack Developer job opening.

This project was developed according to instructions of exercise.

## :computer: Install

The **Backend** was developed in NodeJS with PostgreSQL database.
<br>
Getting started backend: <br>

First you need to create the PostgreSQL docker container:

```bash
docker run --name cotabox-test -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Second step, create database named as cotabox-test and install all dependencies:

```bash
npm install / yarn install
```

Third step, run migrations to create table in datable and run server:

```bash
  yarn typeorm migration:run
  npm run dev:server / yarn dev:server
```

Keep server runnin and let's start Mobile!

Starting **Frontend** in **React**:
<br>

Open frontend folder.

```bash
npm install / yarn install
npm run start / yarn start
```

After proccess finish one web page is open in your browser and use the application.

You need to fill the input and click on the send button to create a new user.

## :memo: License

This project is under the MIT license.

---

Feito com 💜 by **Allan Neto**
