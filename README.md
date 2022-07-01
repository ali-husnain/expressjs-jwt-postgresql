#JWT Authentication Using PostgreSql

## Explanation

Let me explain it briefly.
```
# config

configure PostgreSQL database & Sequelize
configure Auth Key
````
```
#routes

auth.routes.js: POST signup & signin
user.routes.js: GET public & protected resources
```
```
#middlewares

verifySignUp.js: check duplicate Username or Email
authJwt.js: verify Token, check User roles in database
```
```
#controllers

auth.controller.js: handle signup & signin actions
user.controller.js: return public & protected content
```
```
#Models for Sequelize Models

user.model.js
role.model.js
```
```
server.js: import and initialize neccesary modules and routes, listen for connections.
```
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
