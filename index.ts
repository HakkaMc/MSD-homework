import { server } from './server/server';

const port: string | number = process.env.PORT || 4242;

// Start server
server.listen(port, (): void => {
    console.log(`Server started at ${port} port`);
});
