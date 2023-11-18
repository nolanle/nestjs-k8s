export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  host: process.env.HOSTNAME || 'NestJS - K8S',
});
