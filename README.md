# How to run server
```
npm install 
npm start
```
The server starts on **http://localhost:4242**. Port is passed through the **start** command in the **package.json** or the default port is hardcoded in the **index.ts** file.

On the Windows machine it's possible the **npm start** is not working (due to port specification) so try to edit the command in the **package.json** file.

# Project description
## Lint and code formatting
After code update don't forget to call
```
npm run lint:fix
```

## API
Basic routes are in the **server/server.ts**. The specific routes and controllers are in the **controllers** folder.

The API documentation is described in the file **server/spec/v1spec.yaml** and it's running on the **http://localhost:4242/v1/doc**.

## Tests
```
npm run test
```
or
```
npm run test:watch
```