import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: any, res: any) {
    // const { id } = req.params
    // console.log(req.body.id)
    await prisma.untagged.delete({ where: { id: req.body.id } })
    prisma.$disconnect()
    res.status(200).json({ message: 'Untagged deleted' })
}