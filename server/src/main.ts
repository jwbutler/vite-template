import { initTRPC } from '@trpc/server';
import { unitPropsSchema, unitSchema } from './gen-zod/types';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';

const trpc = initTRPC.create();
const appRouter = trpc.router({
  units: {
    hello: trpc.procedure
      .input(unitPropsSchema)
      .output(unitSchema)
      .query(({ input }) => {
        // eslint-disable-next-line no-console
        console.log(`input: ${JSON.stringify(input)}`);
        return {
          id: '212d5fcb-796a-4de8-a4cc-bc3d7a058208',
          name: input.name,
          life: 10
        };
      })
  }
});
export type AppRouter = typeof appRouter;
const server = createHTTPServer({
  router: appRouter,
  middleware: cors()
});
server.listen(3000);
// eslint-disable-next-line no-console
console.log('Server listening on port 3000');
