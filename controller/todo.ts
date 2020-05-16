import DB from "./../DB/todo.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";
class todoCtr {
  async getTodos(req: ServerRequest) {
    try {
      const todos = await DB.findAll();
      return req.respond({ body: JSON.stringify(todos) });
    } catch (err) {
      return req.respond({ body: JSON.stringify(err.message), status: 500 });
    }
  }
  getTodosbyId() {
    return "+";
  }
}
export default new todoCtr();
