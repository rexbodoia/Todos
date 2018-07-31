export const allTodos = (state) => {
  let result = [];
  Object.keys(state.todos).forEach((key) => {
    result.push(state.todos[key]);
  });
  return result;
};
