import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function contactUsHome(fastify: FastifyInstance) {
	 // rotas abaixo

     // ROTAS CONTATO US
    
        // Contagem de quantos contatos (home) registrados
        fastify.get('/count', async ()=> {
            const count = await prisma.contatoUs.count()
            return { count }
        })

        fastify.post('/contatous', async (request, reply) => {
        
            
            const createNewsBody = z.object({
                nome: z.string(),
                phone: z.string(),
                email: z.string(),
                interested: z.string(),
                message: z.string()
            })
            
            const { nome, 
                phone, 
                email, 
                interested, 
                message } = createNewsBody.parse(request.body)
            
            await prisma.contatoUs.create({
                data: {
                    nome, 
                    phone, 
                    email, 
                    interested, 
                    message 
                }
            })

            return reply.status(201).send({ status: 'Contato Registrado' })
        })

    // FIM ROTA CONTATO US

}