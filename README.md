# NASA Mission Control Project
A NASA Mission Control Dashboard project to find habitable kepler exoplanets.
# Getting Started
1. Ensure you have Node.js installed.
2. Create a free Mongo Atlas database online or start a local MongoDB database.
3. Create a server/.env file with a [Mongo Atlas](https://www.mongodb.com/products/platform/atlas-database) property set to your MongoDB connection string.
4. In the terminal, run: npm install
# Running the Project
1. In the terminal, run: `npm run deploy`
2. Browse to the mission control frontend at localhost:8000 and schedule an interstellar launch!
# Docker
1. Ensure you have the latest version of Docker installed
2. Run `docker build -t nasa-project`
3. Run `docker run -it -p 8000:8000 nasa-project`
# Running the Tests
To run any automated tests, run `npm test`. This will:

* Run all the client-side tests: `npm test --prefix client`
* Run all the server-side tests: `npm test --prefix server`
