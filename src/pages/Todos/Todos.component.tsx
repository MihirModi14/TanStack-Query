import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { addTodo, fetchTodos } from "../../api/todos.api";

export const Todos = () => {
  // Router Query Hooks
  const queryClient = useQueryClient();

  // State Variables
  const [addText, setAddText] = useState("");

  // Cached todos response with query key 'todos'
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"], // Query Key
    refetchOnWindowFocus: false,
    // Data will be fresh state for 5 second from fetching time, (after that it will be in stale state)
    staleTime: 5000,
  });

  const { mutateAsync: addTodoMutation, isLoading: isMounting } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // Node: By invalidating 'todos' we are telling them that: Hey, some changes are made in todos api,
      // please remove the cached data of 'todos' query and make api call again.
      queryClient.invalidateQueries(["todos"]);
    },
  });

  // Page Events
  const onClickAddBtn = () => {
    addTodoMutation(addText);
    setAddText("");
  };

  return (
    <>
      <div className="todos">
        <div>
          <input
            type="text"
            value={addText}
            placeholder="Add"
            onChange={(e) => setAddText(e.target.value)}
          />
          <button disabled={isMounting} onClick={onClickAddBtn}>
            Add Todos
          </button>
        </div>

        <div>
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <ul>
              {todos?.map((todo: any) => {
                return <li key={todo.id}>{todo.title}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="description">
        <p>Data Invalidation Example</p>
        <ul>
          <li>
            Initially we are fetching data from API and storing in cache with
            query key todos (see in devtools)
          </li>
          <li>
            We have given stale time 5 second so that any component can use
            cached data within 5 second of fetching. After 5 second data will be
            in stale (out dated) state.
          </li>
          <li>
            On add button click we are invalidating todos data which will make
            new api call, so that we can get updated data. (If you do not
            invalidate todos key on add button click then you will only get old
            data)
          </li>
        </ul>
      </div>
    </>
  );
};
