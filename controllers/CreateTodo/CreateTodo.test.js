const CreateTodo = require('./CreateTodo');

test('Deve ser possível criar um todo usando nome e data', async () => {
  const data = {
    name: 'Fazer um Todo',
    date: new Date(),
  };

  const response = await CreateTodo(data);
  expect(response.name).toBe(data.name);
  expect(response.date).toEqual(data.date);
  expect(Number.isInteger(response.id)).toBe(true);
  expect(response.isCompleted).toBe(false);
});

test('Deve ser possível criar um todo usando nome, data e se está completo', async () => {
  const data = {
    name: 'Fazer um Todo',
    date: new Date(),
    isCompleted: true,
  };

  const response = await CreateTodo(data);

  expect(response.name).toBe(data.name);
  expect(response.date).toEqual(data.date);
  expect(Number.isInteger(response.id)).toBe(true);
  expect(response.isCompleted).toBe(data.isCompleted);
});

test('Não deve ser possível criar um todo usando só nome', async () => {
  const data = {
    name: 'Fazer um Todo',
  };

  expect(async () => await CreateTodo(data)).rejects.toThrow('Name and Date are required');
});

test('Não deve ser possível criar um todo usando só a data', async () => {
  const data = {
    date: Date.now(),
  };

  expect(async () => {
    // Code that should throw an error
    await CreateTodo(data);
  }).rejects.toThrow('Name and Date are required');
});
