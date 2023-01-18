import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@Prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/', async ()=>{
    const habits = await prisma.habit.findMany({
    })
    return habits;
})

app.get('/detalhe', async ()=>{
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })
    return habits;
})

app.listen({
    port: 3333
}).then(()=>{
    console.log('Servidor HTTP rodando show!')
});