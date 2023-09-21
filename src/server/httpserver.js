import http from "http";
import express from "express";
import cors from "cors";

const port = 3000;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

// APIs
app.get("/todos", (req, res) => {
  res.statusCode = 200;

  if (todos) {
    res.status(200).json(todos);
  } else {
    res.status(404).json({ error: "Todos not found" });
  }
});

app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.post("/add", (req, res) => {
  const params = req.body;

  const newTodo = {
    id: todos.length + 1,
    title: params.title,
  };

  todos.push(newTodo);

  res.status(200).json(newTodo);
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Data
const todos = [
  {
    id: 1,
    title: "Do something nice for someone I care about",
  },
  {
    id: 2,
    title: "Memorize the fifty states and their capitals",
  },
  {
    id: 3,
    title: "Watch a classic movie",
  },
];
