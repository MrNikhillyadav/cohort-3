import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { publicProcedure, router } from './trpc.js';
import {string, z} from "zod";

const todoInputType = z.object({
    title : z.string(),
    description : z.string()
})

const appRouter = router({
    signUp : publicProcedure
        .input(z.object({
            email : z.email(),
            password : z.string()
        }))
        .mutation(async (opts) => {
            const email  = opts.input.email;
            const password  = opts.input.password;

            // do validation here
            // do DB stuff here 
            let token = "1234jkhcdfh"
            return {
                token
            }
        }),

    createTodo : publicProcedure
        .input(todoInputType)
        .mutation(async (opts) => {
            const title =  opts.input.title;
            const description = opts.input.description;

            //do DB stuff here
            return {
                id : "1",
            }
        }), 

});

const server = createHTTPServer({
  router: appRouter,
});
 
server.listen(3000, () => {
    console.log("listening on port 3000")
});

export type AppRouter = typeof appRouter;