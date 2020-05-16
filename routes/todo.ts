import todoCtr from "./../controller/todo.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";
export default (req: ServerRequest) => {
  if (req.url === "/todos" && req.method == "GET") {
    return todoCtr.getTodos(req);
  }
  //   if (req.url === "/todos" && req.method == "GET") {
  //     return todoCtr.getTodos(req);
  //   }
  //   if (req.url === "/todos" && req.method == "GET") {
  //     return todoCtr.getTodos(req);
  //   }
  //   if (req.url === "/todos" && req.method == "GET") {
  //     return todoCtr.getTodos(req);
  //   }

  // fallback to not found route
  return req.respond(
    { body: `Can not ${req.method} route ${req.url}`, status: 404 },
  );
};
