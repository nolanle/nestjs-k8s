export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  host: process.env.HOSTNAME || 'NestJS - K8S',

  redis: {
    port: +process.env.QUEUE_PORT || 6379,
    host: process.env.QUEUE_HOST || 'localhost',
    pass: process.env.QUEUE_PASS,
  },
});
