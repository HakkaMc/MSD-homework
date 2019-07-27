import { server } from './server/server';

// Start server
server.listen(4242, (): void => {
    console.log('Server started at 4242 port');
});
