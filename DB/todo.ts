import TODO from "./../model/todo.ts";
class Todo {
  todos: TODO[] = [];
  private async getToDOsFromFS() {
    const decoder = new TextDecoder("utf-8");
    const data = await Deno.readFile("./data/todos.json");
    this.todos = JSON.parse(decoder.decode(data)).todos;
  }
  private async writeToDosFS(todos: TODO[]) {
    const encoder = new TextEncoder();
    const x = await Deno.writeFile(
      "./data/todos.json",
      encoder.encode(JSON.stringify(todos)),
    );
  }
  constructor() {
    this.getToDOsFromFS();
  }
  async find(condition: any) {
    return this.todos.filter((todo) =>
      JSON.parse(condition.completed) === todo.completed
    );
  }
  async findById(id: string) {
    return this.todos.find((todo) => todo.id == id);
  }
  async findAll() {
    return this.todos;
  }
  async create(data: TODO) {
    this.todos.push(data);
    this.writeToDosFS(this.todos);
    return data;
  }
  async deleteOne(id: string) {
    if (!this.findById(id)) return { deleted: false };
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.writeToDosFS(this.todos);
    return { deleted: id };
  }
  async updateOne(id: string, data: TODO) {
    let todo = this.findById(id);
    if (!todo) return { update: false };
    delete data.id;
    Object.assign(todo, data);
    this.writeToDosFS(this.todos);
    return { updated: id };
  }
}

export default new Todo();
