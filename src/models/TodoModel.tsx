import { TodoInterface } from "../interfaces/TodoInterface";

// TodoModel with interface TodoInterface
export class TodoModel implements TodoInterface {
  id: number;
  text: string;
  completed: boolean;
  editing: boolean;

  constructor(text: string) {
    this.id = Math.random();
    this.text = text;
    this.completed = false;
    this.editing = false;
  }

  toggleEditing = () => {
    this.editing = !this.editing;
  };

  markComplete = () => {
    this.completed = true;
  };

  editTodo = (text: string) => {
    this.text = text;
  };
}
