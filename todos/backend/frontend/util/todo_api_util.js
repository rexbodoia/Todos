export const fetchTodos = () => (
  $.ajax({
    method: 'get',
    url: 'api/todos',
    dataType: 'json'
  })
);

export const createTodo = (todo) => (
  $.ajax({
    method: 'post',
    url: 'api/todos',
    dataType: 'json',
    data: {
      todo: {
        title: todo.title,
        body: todo.body
      }
    }
  })
);
