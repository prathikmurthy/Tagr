import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


// This is commented out to prevent accidentally deleting all the tagged images.

// export default async function handler(req: any, res: any) {
//     // const { id } = req.params
//     // console.log(req.body.id)
//     await prisma.tagged.deleteMany({})
//     prisma.$disconnect()
//     res.status(200).json({ message: 'Tagged deleted' })
// }