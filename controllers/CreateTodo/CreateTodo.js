const prismaClient = require('../../prisma/prismaClient');

async function CreateTodo( {name, date, isCompleted = false}) {

  if (!name || !date) {
    throw new Error('Name and Date are required');
  }
  
  const todo = await prismaClient.todo.create({
    data: {
      name,
      date,
      isCompleted,
    },
  });
  return todo;
}

module.exports = CreateTodo;
