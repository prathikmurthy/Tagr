import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: {body: {idnum: number, url: string, tag: string}}, res: any) {
    await prisma.tagged.create({
        data: {
            idnum: req.body.idnum,
            url: req.body.url,
            tag: req.body.tag,
        }
    });
    return res.json({
        Status: 200,
    });
}