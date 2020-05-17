import { serve } from "https://deno.land/std/http/server.ts";
import "https://deno.land/x/denv/mod.ts";
const port: number = Number(Deno.env.get("PORT")) || 8000;
import routes from "./routes/todo.ts";
const server = serve({ port });
for await (const req of server) {
  // Handle Routes
  routes(req);
}
