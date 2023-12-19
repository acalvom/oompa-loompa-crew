# 💻 Oompa Loompa Crew  🍫

> Code challenge proposed by Napptilus - By Andrea Calvo Moreno

This repository contains the frontend code for the application. Project management has been carried out using Agile Kanban methodology on GitHub, with the project board available [here](https://github.com/users/acalvom/projects/1/views/1).

## 🎯 Minimum Requirements

- The home page displays the list of available Oompa Loompas using the `?page=` parameter.
- Pagination functionality needs to be implemented.
- The home page includes a search input to immediately filter Oompas by profession, first name, and last name.
- Clicking on an Oompa Loompa card leads to a new page with more detailed information.
- The Oompa Loompa description cannot be escaped.
- Clicking the navbar icon redirects the user to the home page.
- Implement responsive design for mobile and tablet devices.
- Mandatory use of `react-redux` and `react-router`.

## ➕ App Improvements:

- Custom favicon.
- Custom hook to handle Oompa Loompas.
- Not Found page.
- Unit tests for components using `React Testing Library` and `Vitest`.
- Slice tests for store reducers with `React Testing Library`.
- Hook tests for the custom Oompa Loompa Hook using `React Testing Library`.
- E2E tests with `Cypress 12` suite for app workflows.
- Incorporate linters and guards like `husky`, `commitlint`, `eslint`, and `prettier`.

## 🧭 Technical Decisions:

1. Implementing infinite scroll would have taken too much time. Instead, I prioritized other tasks and added a pagination system to navigate through pages.

2. Due to a lack of experience with Redux cache and time constraints, I couldn't implement this functionality using `RTK Query` to store the store status.

## 🫀 How It Works

Once the app is running, the user sees the home page displaying the first 25 Oompas, corresponding to `?page=1`.

To view more Oompas, the user scrolls down and clicks the `Next` button. If on the first page, the `Previous` button is disabled; if on the last page (number 20), the `Next` button is disabled.

Clicking on an Oompa card redirects the user to the details for that Oompa. Here, the Oompa description is provided by the API with `html` characters, styled according to the app theme.

To return to the home menu, the user can click on the navbar or the `Back with the Oompas` button to return to the main view.

If the user attempts to access a non-existing page, they will be redirected to a `Not Found` page. Clicking the `Back with the Oompas` button returns the user to the home page.

## ⚙️ Tech Stack

▪️ `Git` `GitHub` `Docker` `Vite` `Vercel`  
▪️ `React` `Javascript` `Tailwind` `Axios` `Redux` `React-Redux` `React-Router`  
▪️ `Cypress 12` `React Testing Library` `Vitest`

### 👣 A Little Further On:

- App development progress has been tracked with a [Kanban project](https://github.com/users/acalvom/projects/1) on Github.
- Tickets associated with requirements and app features have been created and labeled based on priority:
  - 🔴 P0: High Priority
  - 🟠 P1: Mid Priority
  - 🟡 P2: Low Priority
- Three boards (To do, In progress, and Done) display tickets based on their resolution status.
- Workflow:
  - `git` has been used to handle the workflow and version control.
  - A main workflow associated with the `main` branch is established, and finished tickets are merged into it via `pull requests`.
  - Ticket branches follow the `feat/xxx` and `test/yyy` patterns.
  - Once a ticket is resolved, the branch with the resolved issue is merged with `main` using a `pull request` with a `squash` approach.

## 🏁 **Getting Started**

### 🛠 **System Requirements**

- `node: v18`
- `npm: v8`

### 🏗 **Project Installation**

```bash
# Clone this repository
$ git clone https://github.com/acalvom/oompa-loompa-crew.git

# Navigate to the repository
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

⚠️ Note: Docker must be installed on your machine.

```bash
# Build the Docker image with the name `oompa-loompa-crew`. This might take some time.
$ docker build -t oompa-loompa-crew .

# Check the created image
$ docker image ls

# Run the image `oompa-loompa-crew` in the container `oompa-loompa-crew-container`, exposing port 3000
$ docker run --name oompa-loompa-crew-container -p 3000:3000 -d oompa-loompa-crew

# Open `http://localhost:3000/` to access the app running in the Docker container
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

### [☁ Vercel deployment](https://oompa-loompa-crew.vercel.app/)

### 🫂 **You can reach me at:**

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
