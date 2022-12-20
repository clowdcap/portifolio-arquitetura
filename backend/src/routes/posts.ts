import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function posts(fastify: FastifyInstance) {
	 // rotas abaixo

     // ROTAS
    
        // Contagem de quantos projetos registrados
        fastify.get('/posts', async (request, reply)=> {
            const posts = await prisma.post.findMany()

            return posts
        })


        // Criar um Post
        fastify.post('/post', async (request, reply) => {
            
            
            const createNewsBody = z.object({
                title: z.string(),
                subtitle: z.string(),
                description: z.string(),
                content: z.string(),
                createdUser: z.string(),
                imgCapa: z.string()
            })
            
            const { 
                title, 
                subtitle, 
                description, 
                content,
                createdUser,
                imgCapa } = createNewsBody.parse(request.body)
            
            await prisma.post.create({
                data: {
                    title, 
                    subtitle, 
                    description, 
                    content,
                    createdUser,
                    imgCapa
                }
            })

            return reply.status(201).send({ status: 'Post Registrado' })
        })

    // FIM ROTA CONTATO US

}