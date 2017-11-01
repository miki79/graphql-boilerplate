## Boilerplate for graphQL

Basic example of graphQL project, with schema in separated .graphql files, and setup to hot reload webpack for development.

Includes Jest test 

### Installation
`npm install`

### Development
`npm run dev`
Build the code and run the express server. The server will hot reload, anyway due to the nature of the schema, time to time you might need to reload the server manually.

### Lint (using airbnb rules)
`npm run lint` 

### Test JEST
`npm run jest`

### Build for production
`npm run build:prod`

### Run production server
`npm run start`