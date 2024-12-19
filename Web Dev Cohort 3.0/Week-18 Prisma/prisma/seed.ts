import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createDummyUser(){
        await client.user.create({
                data : {
                        username : "John Doe",
                        password : "12234",
                        city : "Mumbai",
                        age : 32,
                        todos : {
                                create : {
                                        title : "Buy Milk",
                                        description : 'Go to the dairy',
                                        done : false
                                }
                        }

                }
        })
}

createDummyUser()