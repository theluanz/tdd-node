const prismaClient = require('../../prisma/prismaClient');

async function CreateTodo({ name, date, isCompleted = false }) {
  if (!name) {
    throw new Error('Name is required');
  }
  if (!date) {
    throw new Error('Date is required');
  }

  return await prismaClient.todo.create({
    data: {
      name,
      date,
      isCompleted,
    },
  });
}

module.exports = CreateTodo;
