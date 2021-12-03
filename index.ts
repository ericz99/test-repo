import http from 'http';
import { createApp } from './server';

const { app } = createApp();
const httpServer = http.createServer(app);

httpServer.listen(5000, () => {
    console.log('running on port 5000');
});
