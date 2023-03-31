const prismaClient = require('../../prisma/prismaClient');

async function DeleteTodo (id) {
  const todoExists = await prismaClient.todo.findUniqueOrThrow({ where: { id } }).catch(() => {
    throw new Error('Todo não existe');
  });

  if (!todoExists) throw new Error('Todo não existe');

  await prismaClient.todo.delete({
    where: { id },
  });
  return true;
  
}

module.exports = DeleteTodo;