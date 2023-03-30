const CreateTodo = require('./CreateTodo');

test('Deve ser possível criar um todo usando nome e data', () => {
  const data = {
    name: 'Fazer um Todo',
    date: new Date(),
  };

  const response = CreateTodo(data);

  expect(response.name).toBe(data.name);
  expect(response.date).toBe(data.date);
  expect(response.id).toBeInteger();
  expect(response.isCompleted).toBe(false);
});

test('Deve ser possível criar um todo usando nome, data e se está completo', () => {
  const data = {
    name: 'Fazer um Todo',
    date: new Date(),
    isCompleted: true,
  };

  const response = CreateTodo(data);

  expect(response.name).toBe(data.name);
  expect(response.date).toBe(data.date);
  expect(response.id).toBeInteger();
  expect(response.isCompleted).toBe(true);
});

// test('Não deve ser possível criar um todo usando só nome', () => {
//   const data = {
//     name: 'Fazer um Todo',
//   };

//   expect(() => CreateTodo(data)).toThrow();
// });

// test('Não deve ser possível criar um todo usando só a data', () => {
//   const data = {
//     date: Date.now(),
//   };
//   expect(() => CreateTodo(data)).toThrow();
// });
