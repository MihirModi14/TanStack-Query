import axios from "axios";

export const fetchTodos = async (searchText = "") => {
  console.log("Fetching Todos from API !!");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return axios.get("http://localhost:3000/todos").then((res) => {
    const todos = res.data;

    if (searchText === "") return todos;

    const newTodos = todos.filter((todo: any) => {
      return todo.title.toLowerCase().includes(searchText.toLowerCase());
    });

    return newTodos;
  });
};

export const addTodo = async (title: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const params = { title: title };

  return axios.post("http://localhost:3000/add", params).then(() => {
    return {};
  });
};
