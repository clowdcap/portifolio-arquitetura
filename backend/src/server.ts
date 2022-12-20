import Fastify from "fastify"
import cors from "@fastify/cors"

import { contactUsHome } from "./routes/contactUsHome"
import { posts } from "./routes/posts"

async function bootstrap() {

    const fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
    origin: true
    })
    
    fastify.register(contactUsHome)
    fastify.register(posts)

    await fastify.listen({ port: 5000 })
}

// inicia o fastify
bootstrap()