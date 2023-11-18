export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  host: process.env.HOSTNAME || 'NestJS - K8S',

  redis: {
    host: process.env.QUEUE_HOST || 'localhost',
    port: +process.env.QUEUE_PORT || 6379,
  },
});
