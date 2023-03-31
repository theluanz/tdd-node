const UpdateTodo = require('./UpdateTodo');
const CreateTodo = require('../CreateTodo/CreateTodo');

async function createNewTodo() {
  const todo = await CreateTodo({
    name: 'Nome Antigo',
    date: new Date(),
    isCompleted: false,
  });

  return todo;
}

test('Deve ser possível atualizar Nome, Data e se está completo de um Todo', async () => {
  const preTodoCreated = await createNewTodo();
  const updatedData = {
    name: 'Fazer um Todo atualizado',
    date: new Date(),
    isCompleted: true,
  };

  const updatedTodo = await UpdateTodo({ id: preTodoCreated.id, ...updatedData });

  expect(updatedTodo.name).toBe(updatedData.name);
  expect(updatedTodo.date).toEqual(updatedData.date);
  expect(updatedTodo.isCompleted).toBe(updatedData.isCompleted);
  expect(updatedTodo.id).toBe(preTodoCreated.id);
});

test('Deve ser possível atualizar somente o nome de um Todo', async () => {
  const preTodoCreated = await createNewTodo();

  const updatedData = {
    name: 'Fazer um Todo atualizado',
  };

  const updatedTodo = await UpdateTodo({ id: preTodoCreated.id, ...updatedData });

  expect(updatedTodo.isCompleted).toBe(preTodoCreated.isCompleted);

  expect(updatedTodo.name).toBe(updatedData.name);
  expect(updatedTodo.date).toEqual(preTodoCreated.date);
  expect(updatedTodo.id).toBe(preTodoCreated.id);
});

test('Deve ser possível atualizar somente a data de um Todo', async () => {
  const preTodoCreated = await createNewTodo();

  const updatedData = {
    date: new Date('2023-04-01'),
  };

  const updatedTodo = await UpdateTodo({ id: preTodoCreated.id, ...updatedData });

  expect(updatedTodo.isCompleted).toBe(preTodoCreated.isCompleted);

  expect(updatedTodo.name).toBe(preTodoCreated.name);
  expect(updatedTodo.date).toEqual(updatedData.date);
  expect(updatedTodo.id).toBe(preTodoCreated.id);
});

test('Deve ser possível atualizar somente o status de um Todo', async () => {
  const preTodoCreated = await createNewTodo();

  const updatedData = {
    isCompleted: true,
  };

  const updatedTodo = await UpdateTodo({ id: preTodoCreated.id, ...updatedData });

  expect(updatedTodo.isCompleted).toBe(updatedData.isCompleted);

  expect(updatedTodo.name).toBe(preTodoCreated.name);
  expect(updatedTodo.date).toEqual(preTodoCreated.date);
  expect(updatedTodo.id).toBe(preTodoCreated.id);
});

test('Não deve ser possível atualizar um todo com um ID inexistente', async () => {
  const updatedData = {
    name: 'Fazer um Todo atualizado',
    date: new Date(),
    isCompleted: true,
  };

  const nonExistentId = 'non-existent-id';

  await expect(UpdateTodo({ id: nonExistentId, ...updatedData })).rejects.toThrow(
    'Todo não existe',
  );
});
