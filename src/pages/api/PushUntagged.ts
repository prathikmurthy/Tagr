import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: any, res: any) {
    // const { id } = req.params
    // console.log(req.body.id)
    // await prisma.untagged.delete({ where: { id: req.body.id } })
    // prisma.$disconnect()
    console.log(req.body)
    // map every element in req.body to an array of objects where url is the key and value is the value
    // const untagged = req.body.map((element: any) => {
    //     return {
    //         url: element,
    //     }
    // })
    // console.log( req.body.map((i: string) => {return {url : i}}))
    await prisma.untagged.createMany({data: req.body.map((i: string) => {return {url : i}})})
    res.status(200).json({ message: 'Untagged deleted' })
    
    // for (let i = 0; i < req.body.length; i++) {
    //     await prisma.untagged.createMany(req.body.map(untagged => ({})
    // }
}