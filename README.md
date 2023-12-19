# 💻 Code Challenge 〰️ Oompa Loompa Crew

> Code challenge proposed by Napptilus -
> Andrea Calvo Moreno
>
> This repository contains the frontend code of the application.  
>  La gestión del proyecto se ha realizado siguiendo metodología ágil tipo Kanban en GitHub y Pull Requests. El tablero se encuentra aquí.

## 🎯 Minimum requirements

- Home page displays the list of Oompa Loompas that are available by `?page=`.
- Pagination needs to be considered.
- Home page is provided with a search input to filter imnediately the Oompas by profession, first name and last name.
- Oompa Loompa details are displayed in a new page with a few more information.
- Oompa Loompa description cannot be escaped
- When clicking in the navbar icon, the user is redirected to Home page.
- Responsive design for mobile and tablet.
- Use of `react-redux` and `react-router` is mandatory

## ➕ App improvements:

- Custom favicon
- Custom hook to handle Oompas Loompas
- Not Found page
- Unit tests for components with `React Testing Library` and `Vitest`
- Slice tests for store reducers with with `React Testing Library`
- Hook test for custom Oompa Loompa Hook with `React Testing Library`
- E2E tests with `Cypress 12` suite for app workflows
- Linters and guards like `husky`, `commitlint`, `eslint` and `prettier`

## 🧭 Technical decisions:

1. The infinite scroll will took me too much time to be implemented and since I had to prioritise other tasks I replace this feature by adding a pagination system to move back and forward toward the pages.

2. I did not have previous experience with Redux caché, and even thought I assigned a ticket to investigate this functionality with `RTK Query` to store the store status for one day I finally did not have time to implement it

## 🫀 How it works

Once the app is running, the user is seeing the Home page, where a list of the first 25 Oompas is displayed (the first page according to the endpoint `?page=1`).

To see more Oompas, the user will scroll down until the end of the page and click on `Next` button. If the page is the first one, the `Previous` button is disabled, if the page is the last one, number 20, the `Next` button is disabled.

When clicking on an Oompa card, the user is redirected to the details for this Oompa. In this page, the Oompa description is provided by the API with `html` characters, so this text has been interpreted and styled according to the app theme.

To go back to Home menu, the user can click on the navbar, or in the button `Back with the Oompas` to be redirected to main view

If the user tries to access to a non existing page, it will be redirected to a `Not Found` page. By clicking on `Back with the Oompas` button, the user will get to Home page

## ⚙️ Tech stack

▪️ `Git` `GitHub` `Docker` `Vite` `Vercel`  
▪️ `React` `Javascript` `Tailwind` `Axios` `Redux` `React-Redux` `React-Router`  
▪️ `Cypress 12` `React Testing Library` `Vitest`

### 👣 A little further on:

- App development has been tracked with a [Kanban project](https://github.com/users/acalvom/projects/1) in Github
- With this, tickets associated with the requirements and app features have been created and labelled based on the priority:
  - 🔴 P0: Hight Priority
  - 🟠 P1: Mid Priority
  - 🟡 P2: Low Priority
- Three boards are displayed on the board where tickets rotate according to the status of their resolution: To do, In progress and Done.
- Workflow:
  - `git` has been used to handle the workflow and version control.
  - A main workflow associated with `main` branch is established, and on this branch, the finished tickets are merged into via `pull requests`.
  - These tickets are associated to branches following the `feat/xxx` `test/yyy` patterns
  - Once the ticket is resolved, the branch with the resolved issue is merged with `main` from a `pull request` with `squash` approach.

## 🏁 **Getting Started**

### 🛠 **System requirements**

- `node: v18`
- `npm: v8`

### 🏗 **Project installation**

```bash
# Clone this repository
$ git clone https://github.com/acalvom/oompa-loompa-crew.git

# Go into the repository
$ cd oompa-loompa-crew
```

➡️ **_Option 🅰️: Run in local environment_**

```bash
# Install dependencies
$ oompa-loompa-crew > npm install

# Run the app
$ npm run dev
```

⚠️ 🟥 **You will need to include the `.env.local` file with the API url: `VITE_API_URL="https://...`** 🟥

➡️ **_Option 🅱️: Run in Docker_**

⚠️ Note that you need to have Docker installed on your machine

```bash
# Build the Docker image with the name `oompa-loompa-crew`. It might take some time
$ oompa-loompa-crew > docker build -t oompa-loompa-crew .

# Check the created image is available
$ docker image ls

# Run the image `oompa-loompa-crew` in the container `oompa-loompa-crew-container` exposing the port 3000
$ docker run --name oompa-loompa-crew-container  -p 3000:3000 -d oompa-loompa-crew

# Go to `http://localhost:3000/`. The app is running in the Docker container
```

### 🧾 Hightlighted scripts in `package.json`

```bash
# Run the app in localhost (PORT: 3000)
$ npm run dev

# Build the app
$ npm run build

# Run unit tests
$ npm run test

# Run e2e tests
$ npm run cy:open
```

## ☁ Vercel deployment

🔗 [Oompa Loompa Crew](https://oompa-loompa-crew.vercel.app/)

## 🫂 **You can reach me at:**

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/acalvom"><img src="https://avatars.githubusercontent.com/u/34605171?s=88&v=4" width="100px;" alt="acalvom"/><br /><sub><b>acalvom
      </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<br>
