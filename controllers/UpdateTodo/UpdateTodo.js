const prismaClient = require('../../prisma/prismaClient');

async function updateTodo({ id, name, date, isCompleted }) {
  const todoExists = await prismaClient.todo.findUniqueOrThrow({ where: { id } }).catch(() => {
    throw new Error('Todo não existe');
  });
  if (!todoExists) throw new Error('Todo não existe');
  console.log('todoExists', todoExists);
  console.log(name, date, isCompleted);

  const updatedTodo = await prismaClient.todo.update({
    where: { id },
    data: { name, date, isCompleted },
  });

  return updatedTodo;
}

module.exports = updateTodo;
