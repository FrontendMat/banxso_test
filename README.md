# Project Description

Modern website for rocket enthusiasts with authentication capability

---

### Key Features

- **Login and Registration:** any user can sign up (with 2FA) or sign in and use all the features of the app
- **Like Rockets:** only auth user can like rockets and see his liked list

---

### Technologies Used

- **Vite**
- **React + TS** 
- **React-router-dom** 
- **SCSS** 
- **Redux Toolkit** 
- **Axios** 
- **Swiper:** for ui Swiper  
- **Jest:** for unit tests. Configuration is located in [./config/jest](./config/jest)
- **Cypress:** for e2e tests

---

### Architecture

The project is written according to the Feature-Sliced Design methodology.

Read more (documentation): [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

### Scripts

### `npm start`
Starts the frontend project using Vite.

### `npm run build`
Builds the project by compiling TypeScript and bundling with Vite.

### `npm run preview`
Previews the production build locally using Vite.

### `npm run lint:ts`
Runs ESLint on ts/tsx files.

### `npm run lint:ts:fix`
Runs ESLint with auto-fix on ts/tsx files.

### `npm run test`
Runs all tests using Jest.

### `npm run unit`
Runs unit tests with Jest (can choose file to run test)

---

### CI pipeline

The GitHub Actions configuration is located in /.github/workflows.
In CI all project tests and builds are executed.

---

### Deployment

Run `npm run unit` to ensure there are no errors,
then push your code into main branch.

---

### Development Environment

Run `npm install` to install dependencies.

In the project, the [vite.config.ts](./vite.config.ts) file contains the `__API_URL__` variable, 
which is used to connect to the server. 

---

### Entities
- [User](./src/entities/User) - only auth User
- [Rocket](./src/entities/Rocket) - Rocket entitie
- [Person](./src/entities/Person) - team User

---

### Features
- [authByEmail](./src/features/authByEmail) - user Login and Registration

---

### Page Features
- [toggleLike](./src/pages/RocketDetailsPage) - ability to like or unlike