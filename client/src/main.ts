import './style.css';
import { AppRouter } from '../../server/src/main';
import { createTRPCClient, httpBatchLink } from '@trpc/client';

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      // https://trpc.io/docs/client/cors
      fetch: (url, options) => {
        return fetch(url, {
          ...options,
          mode: 'cors'
          //credentials: 'include'
        });
      }
    })
  ]
});
const unit = await client.units.hello.query({ name: 'Chigz Jupsiz', life: 10 });
// eslint-disable-next-line no-console
console.log(JSON.stringify(unit));
