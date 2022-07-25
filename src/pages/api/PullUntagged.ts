import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: any, res: any) {
    const data = await prisma.untagged.findMany({
        take: 1,
        skip: Math.floor(Math.random() * await prisma.untagged.count()),
        select: {
            id: true,
            url: true,
        }
    });
    prisma.$disconnect();
    return res.json(data);
}