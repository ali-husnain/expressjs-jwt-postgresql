#Todo Rest Node Api

## What is this?

This is a proof-of-concept (POC), [RESTful Web Services](https://restfulapi.net/) application built on top of [NodeJS](https://nodejs.org/en/).

## Get Started

* Install dependencies.
```
npm install
```
* Verify the .env file having `PORT, NODE_ENV` and other variables.

* Verify the Database configuration in `config/config.json`.
* Like that 
```
{
   "username": "postgres",
   "password": admin,
   "database": "todo-app",
   "host": "localhost",
   "dialect": "postgres",
   "logging": false,
   "pool": {
     "max": 5,
     "min": 0,
     "acquire": 30000,
     "idle": 10000
   }
}
```

* Start the application.
```
npm run start
```