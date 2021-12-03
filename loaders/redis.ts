import Redis from 'ioredis';

const client = new Redis({
    port: 6379,
    host: '127.0.0.1',
});

client.on('connect', (_channel, _message) => {
    console.log('Redis connected');
});

export default client;
