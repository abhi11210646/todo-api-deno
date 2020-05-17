import DB from "./../DB/todo.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";
import { Query } from "./../util/url-parser.ts";
import TODO from "./../model/todo.ts";
class todoCtr {
  async getTodos(req: ServerRequest, query: Query) {
    try {
      let todos: TODO[] = [];
      if (query.has("completed")) {
        todos = await DB.find({ completed: query.get("completed") });
      } else {
        todos = await DB.findAll();
      }
      return req.respond({ body: JSON.stringify({ data: todos }) });
    } catch (err) {
      return req.respond({ body: JSON.stringify(err.message), status: 500 });
    }
  }
  async getTodo(req: ServerRequest, query: Query) {
    if (query.has("todoid")) {
      const todo = await DB.findById(query.get("todoid"));
      if (!todo) {
        return req.respond(
          {
            body: JSON.stringify({ error: true, message: "todo not found!" }),
            status: 404,
          },
        );
      }
      return req.respond({ body: JSON.stringify({ data: todo }) });
    } else {
      return req.respond(
        {
          body: JSON.stringify(
            { error: true, message: "todoid query required!" },
          ),
          status: 502,
        },
      );
    }
  }
  async deleteTodo(req: ServerRequest, query: Query) {
    if (query.has("todoid")) {
      const result = await DB.deleteOne(query.get("todoid"));
      if (result.deleted) {
        return req.respond({ body: "Successfully deleted!" });
      } else {
        return req.respond({
          body: JSON.stringify({ error: true, message: "Couldn't deleted!" }),
        });
      }
    } else {
      return req.respond(
        {
          body: JSON.stringify(
            { error: true, message: "todoid query required!" },
          ),
          status: 502,
        },
      );
    }
  }
  async createTodo(req: ServerRequest) {
    //
  }
}
export default new todoCtr();
