import TODO from "./../model/todo.ts";
class Todo {
  todos = [];
  private async getToDOs() {
    const decoder = new TextDecoder("utf-8");
    const data = await Deno.readFile("./data/todos.json");
    this.todos = JSON.parse(decoder.decode(data)).todos;
  }
  constructor() {
    this.getToDOs();
  }
  async find(id: string) {
    //
  }
  async findAll() {
    return this.todos;
  }
  async create(data: TODO) {
    //
  }
  async deleteOne(id: string) {
    //
  }
  async updateOne(id: string, data: TODO) {
    //
  }
}

export default new Todo();
