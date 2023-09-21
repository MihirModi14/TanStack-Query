import { useState } from "react";
import { useQuery } from "react-query";

import { fetchTodos } from "../../api/todos.api";

export const Todos3 = () => {
  const [searchText, setSearchText] = useState("");

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(searchText),
    queryKey: ["todos", { searchText }], // Custom Paramter
    refetchOnWindowFocus: false,
    staleTime: 20000,
  });

  return (
    <>
      <div className="todos">
        <input
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
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
      <div className="description">
        <p>Caching Data with Custom Parameters</p>
        <ul>
          <li>
            Initially we are fetching data from API and storing in cache with
            query key [todos, serchText: ""] (see in devtools)
          </li>
          <li>
            Once we enter anything in search then it will cache the response
            with the query key which contain search text. when we again search
            same text then we will get cache response.
          </li>
        </ul>
      </div>
    </>
  );
};
