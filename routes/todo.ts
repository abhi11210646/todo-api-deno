import todoCtr from "./../controller/todo.ts";
import urlParser from "./../util/url-parser.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";
export default (req: ServerRequest) => {
  const { url, query } = urlParser(req.url);
  if (url === "/todos" && req.method == "GET") {
    return todoCtr.getTodos(req, query);
  }
  if (url === "/todo" && req.method == "GET") {
    return todoCtr.getTodo(req, query);
  }
  if (req.url === "/todo" && req.method == "DELETE") {
    return todoCtr.deleteTodo(req, query);
  }
  if (req.url === "/todo" && req.method == "PUT") {
    return todoCtr.createTodo(req);
  }
  // other routes here

  // fallback to not found route
  return req.respond(
    { body: `Can not ${req.method} route ${req.url}`, status: 404 },
  );
};
