import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: any, res: any) {
    await prisma.untagged.createMany({data: req.body.map((i: string) => {return {url : i}})})
    res.status(200).json({ message: 'Untagged deleted' })
}