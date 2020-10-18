# Todo Application

- Problem statement

Create a to-do application where the following functionalities are present -
1. User can create, delete and edit a to-do.
2. They should also be able to mark a to-do done and vice-versa.
3. They should be able to create a to-do under a bucket. The user has the flexibility to name this bucket according to his/her choice.
a. All the existing buckets the user has created should be given as options, next time the user tries to create a new bucket.

# Technologies used
- [React](https://reactjs.org/): A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/): A Predictable State Container for JS Apps
- [redux-thunk](https://github.com/reduxjs/redux-thunk): Thunk middleware for Redux.

# Docker images used
- [tiangolo/node-frontend](https://hub.docker.com/r/tiangolo/node-frontend/) - for base image

# Prerequisites
- Install Docker
> $ curl -fsSL https://get.docker.com -o get-docker.sh
> $ sudo sh get-docker.sh
- Install Git
> $ sudo apt install git

# Installation
- Clone repo & cd to project directory
> $ git clone https://github.com/anonyxhappie/todo-frontend.git; cd todo-frontend
- Update BASE_URL in todo-frontend/todoapp/src/environment.js if todo-backend not hosted on http://localhost:8000/
- Create docker image
> $ docker build -t todoapp:v1 .
- Run todo-ui webserver & open http://localhost in browser
> $ docker run -d -it -p 80:80 todoapp:v1

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
