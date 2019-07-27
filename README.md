# How to run server
```
npm install 
npm start
```
The server starts on http://localhost:4242 (port is hardcoded in index.ts).

# Project description
## Lint and code formatting
After code update don't forget to call
```
npm run lint:fix
```

## API
Basic routes are in the **server/server.ts**. The specific routes and controllers are in the **controllers** folder.

The API documentation is described in the file **spec.yaml** and it's running on the **http://localhost:4242/v1/doc**.

## Tests
```
npm run test
```
or
```
npm run test:watch
```