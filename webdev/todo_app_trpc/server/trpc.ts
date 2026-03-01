import { initTRPC } from '@trpc/server';

// defining type of context during initialization 
const t = initTRPC.context<{
    username? : String
}>().create();

export const router = t.router;
export const publicProcedure = t.procedure;