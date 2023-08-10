# MERN Project with Jest Unit Testing

This repository contains a MERN (MongoDB, Express, React, Node.js) stack project with frontend and backend components. The project utilizes the following libraries:

## Backend

The backend of the project is built using Node.js and Express, along with MongoDB as the database. It includes the following libraries:

- **cors**: Middleware for enabling CORS in the server.
- **express**: Web application framework for Node.js.
- **mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

## Frontend

The frontend of the project is built using React and incorporates the following library:

- **@mui/material** (MUI): Modern UI library for React applications.
- **axios**: Promise-based HTTP client for making API requests.

## Unit Testing

The project uses **Jest** for unit testing. Jest is a popular JavaScript testing framework that is widely used in the React community.

### Instructions for Running Tests

To run unit tests using Jest, follow these steps:

1. Clone the repository:

git clone <https://github.com/mikeislas06/ElectronicColorCode.git>

cd ElectronicColorCode

2. **Project Setup**:

- Create a `.env` file in the `root` directory and configure your MongoDB connection secret key:

  ```
  NODE_ENV=development
  PORT=5000
  MONGODB_URI=<your_mongodb_uri>
  ```

- Navigate to the `root` directory:

  ```

  ```

- Install project dependencies dependencies:
  ```
  npm run install-dependencies
  ```

3. **Populate database**:

- Run the seeder file
  ```
  npm run data:import
  ```

4. **Run the Application**:

- Start the project
  ```
  npm run dev
  ```

5. **Running Tests**:

- Open a terminal and navigate to the root directory of the project.
- Run the following command to run Jest tests:
  ```
  npm run test
  ```

Jest will automatically discover and run tests in files with `.test.js` or `.spec.js` extensions in the project.

6. Make sure to write your test files in the `backend/tests` and `frontend/tests` directories, following the naming convention (`*.test.js` or `*.spec.js`).

Feel free to explore the codebase and customize the project and tests according to your requirements.

Happy coding and testing!
