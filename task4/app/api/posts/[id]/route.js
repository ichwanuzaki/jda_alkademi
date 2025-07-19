import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function PUT(req, { params }) {
  const body = await req.json()
  const updated = await prisma.post.update({
    where: { id: Number(params.id) },
    data: {
      title: body.title,
      content: body.content,
    },
  })
  return Response.json(updated)
}

export async function DELETE(_, { params }) {
  const deleted = await prisma.post.delete({
    where: { id: Number(params.id) },
  })
  return Response.json(deleted)
}
