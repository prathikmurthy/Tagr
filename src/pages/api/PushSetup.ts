import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: any, res: any) {
    // loop 100 times
    for (let i = 0; i < 100; i++) {
        // create new entry in Untagged prisma database where url = picsum image
        await prisma.untagged.create({
            data: {
                url: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/600/280`
            }
        })
    }
}