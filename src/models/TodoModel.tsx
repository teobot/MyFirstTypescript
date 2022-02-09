import { TodoInterface } from "../interfaces/TodoInterface";

// TodoModel with interface TodoInterface
export class TodoModel implements TodoInterface {
  id: number;
  text: string;
  completed: boolean;

  constructor(text: string) {
    this.id = Math.random();
    this.text = text;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }
}
