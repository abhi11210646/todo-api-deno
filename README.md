## Todo Rest API
Example to demonstrate working of deno by wtriting REST API's. [Deno](https://deno.land/)

### Learning Outcomes:

  1: Start a server and listen on PORT. [server](https://deno.land/std/http/server.ts)
  
  2: To use .env file for environment variables. [denv](https://deno.land/x/denv)
  
  3: To use filesystem. [fs](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.readFile)
  
  4: Typescript
  
  
   ##### Start server with all due permissions :)
  
  ```
  deno run --allow-read=./  --allow-net=:8000 --allow-env --allow-write=./ server.ts
  ```
   ##### API's
  ```
  GET       path: /todos                  Desc:  get all todos 
  GET       path: /todos?completed=true   Desc:  get all completed todos
  GET       path: /todos?completed=false  Desc:  get all Incompleted todos
  GET       path: /todo                   Desc:  get single todo
  PUT       path: /todo                   Desc:  create todo
  DELETE    path: /todo                   Desc:  delete todo
  ```
