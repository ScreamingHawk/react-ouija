# React-Express-Frame

A framework for creating an Express App with a ReactJS front end.

## Design

Client code is under `/client`. Server code is under `/server`.

The `package.json` in the root folder is for the server. The `package.json` in the `/client` folder is for the client.

The client connects to the server using `socket.io` because it's cool.

## Manual Creation

If you like this framework, but want to set it up manually, do the following.

Create git repo.

```sh
git init
```

Copy the `.gitignore` from the root of this repository to the root of your repository.

Init yarn.
Use sensible values for each, but ensure the `main` is set to `server/server.js`.
Then add dependencies.

```sh
yarn init
yarn add express body-parser http socket.io winston
yarn add --dev concurrently nodemon
```

Add the following scripts to the `package.json`.

```json
  "scripts": {
    "start": "node server/server.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "concurrently \"cd client && yarn start\" \"yarn watch\"",
    "watch": "nodemon server/server.js",
    "heroku-postbuild": "cd client && yarn && yarn build"
  },
```

Create `server` folder.

```sh
mkdir server
```

Copy the contents of the `server` folder from this repository to your repository.

Use `create-react-app` to create the client.

```sh
npx create-react-app client
```

Add dependencies to the generated `client/package.json`.

```sh
cd client
yarn add socket.io-client http-proxy-middleware
cd ..
```

Copy the contents of the `client/src` folder from this repository into your repository.
This includes hook up to sockets and the proxy.

**Done.**

Test it with the instructions below.

Commit this as your initial framework.

```sh
git add .
git commit -m "Initial framework"
```

Draw the rest of the owl.

## Usage

This is how to use the framework after you've cloned / copied it.

### Set Up

Install dependencies

```sh
yarn && cd client && yarn
```

### Start

Single command, this enables *watching*

```sh
yarn dev
```

### Test

```sh
yarn test
```

### Deploy

Set up heroku

```sh
heroku login
heroku create
```

Do the deployment

```sh
git push heroku master
```

## Credits

[Michael Standen](https://michael.standen.link)

This software is provided under the [MIT License](https://tldrlegal.com/license/mit-license) so it's free to use so long as you give me credit.
