import Fastify from "fastify"
import cors from "@fastify/cors"

import { contactUsHome } from "./routes/contactUsHome"

async function bootstrap() {

    const fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
    origin: true
    })
    
    fastify.register(contactUsHome)

    await fastify.listen({ port: 5000 })
}

// inicia o fastify
bootstrap()