const DeleteTodo = require('./DeleteTodo');
const CreateTodo = require('../CreateTodo/CreateTodo');


async function createNewTodo() {
  const todo = await CreateTodo({
    name: 'Nome Antigo',
    date: new Date(),
    isCompleted: false,
  });

  return todo;
}

test("Deve ser possível deletar um todo", async () => {
  const preTodoCreated = await createNewTodo();

  const deletedTodo = await DeleteTodo(preTodoCreated.id);

  expect(deletedTodo).toBe(true);

});

test("Não deve ser possível deletar um todo com ID inválido", async () => {
  const invalidId = "asdaunsfuiasbfashjifbiasufb";

  expect(async ()=> {
    await DeleteTodo(invalidId);

  }).rejects.toThrow(
    'Todo não existe',
  );

});