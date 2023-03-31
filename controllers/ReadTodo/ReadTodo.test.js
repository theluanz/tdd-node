const ReadTodo = require('./ReadTodo');
const CreateTodo = require('../CreateTodo/CreateTodo');


async function createNewTodo() {
  const todo = await CreateTodo({
    name: 'Nome Antigo',
    date: new Date(),
    isCompleted: false,
  });

  return todo;
}

test("Deve ser possível ler um todo", async () => {
  const preTodoCreated = await createNewTodo();

  const todo = await ReadTodo(preTodoCreated.id);

  expect(todo.name).toBe(preTodoCreated.name);
  expect(todo.id).toBe(preTodoCreated.id);
  expect(todo.date).toEqual(preTodoCreated.date);
 

});

test("Não deve ser possível ler um todo com ID inválido", async () => {
  const invalidId = "asdaunsfuiasbfashjifbiasufb";

  expect(async ()=> {
    await ReadTodo(invalidId);

  }).rejects.toThrow(
    'Todo não existe',
  );

});