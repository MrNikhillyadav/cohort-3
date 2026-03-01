import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/index.js';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers() {
        return {
            Authorization: "Bearer 123"
        }
      },
    }),
    
  ],
});

async function main(){
  
  const res = await trpc.signUp.mutate({
    email : "nik@gmail.com",
    password : "12345"
  })
  console.log("response: ", res.token);

  const response = await trpc.createTodo.mutate({
      title : "Go to the gym",
      description : "Go to the school"
  })
  console.log("response: ", response);
}


main()