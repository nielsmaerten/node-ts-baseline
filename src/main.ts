import httpServer from './server';
import process from 'node:process';

async function main() {
  await httpServer.listen({
    port: Number(process.env.NODE_PORT) || 3000,
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
