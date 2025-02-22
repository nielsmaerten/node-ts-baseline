import fastify from 'fastify';

const server = fastify({
  logger: true,
});

server.get(
  '/',
  async (_request, reply) => {
    reply.send({ hello: 'world' });
  },
);

export default server;
