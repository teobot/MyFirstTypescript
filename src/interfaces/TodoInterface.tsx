export interface TodoInterface {
  id: number;
  text: string;
  completed: boolean;
  editing: boolean;
  
  markComplete: () => void;
  editTodo: (text: string) => void;
  toggleEditing: () => void;
}