import { useState } from "react";
import { useQuery } from "react-query";

import { fetchTodos } from "../../api/todos.api";

export const Todos2 = () => {
  const [show, setShow] = useState(false);

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
    refetchOnWindowFocus: false,
    // Data will be fresh for 10 second (after fetching data, withing 10 second if someone ask for data then return cached data)
    staleTime: 10000,
  });

  return (
    <>
      <div className="todos">
        <div>
          {isLoading ? (
            <div className="loading">Loading ...</div>
          ) : (
            <ul>
              {todos?.map((todo: any) => {
                return <li key={todo.id}>{todo.title}</li>;
              })}
            </ul>
          )}
        </div>

        <button onClick={() => setShow(!show)}>Toggle Same Child Todos</button>
        {show && <TodoChild />}
      </div>
      <div className="description">
        <p>Reusing Previously Fetched Data</p>
        <ul>
          <li>
            Initially we are fetching data from API and storing in cache with
            query key todos (see in devtools)
          </li>
          <li>
            We have given stale time 10 second, so that any component can use
            same cached data within 10 seconds of fetching. Here child component
            is also making api call, but if cached todos data is in fresh state
            then child component will get same data without making new api call.
            (Toggle and anylyze)
          </li>
        </ul>
      </div>
    </>
  );
};

const TodoChild = () => {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
    refetchOnWindowFocus: false,
    staleTime: 10000,
  });

  return (
    <div className="todos">
      <div>
        {isLoading ? (
          <div className="loading">Loading ...</div>
        ) : (
          <ul>
            {todos?.map((todo: any) => {
              return <li key={todo.id}>{todo.title}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
