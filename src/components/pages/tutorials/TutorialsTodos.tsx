import { useState } from 'react';
import Checkbox from 'components/Checkbox';

type Todo = { label: string; isComplete: boolean; index: number };

const initialTodos: Todo[] = [
  { label: 'Clean house', isComplete: false, index: 0 },
  { label: 'Do Laundry', isComplete: true, index: 1 },
  { label: 'Grocery Shop', isComplete: true, index: 2 },
  { label: 'Pay Bills', isComplete: true, index: 3 },
  { label: 'Retrieve Mail', isComplete: true, index: 4 },
  { label: 'Sweep Porch', isComplete: true, index: 5 },
  { label: 'Vacuum', isComplete: true, index: 6 },
  { label: 'Walk Dog', isComplete: true, index: 7 },
  { label: 'Wash car', isComplete: false, index: 8 },
  { label: 'Water Lawn', isComplete: true, index: 9 },
];

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleChange = (checked: boolean, changedTodo: Todo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.index === changedTodo.index ? { ...todo, isComplete: checked } : todo,
      ),
    );
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li className='checkbox-todo' key={todo.index}>
          <Checkbox
            index={todo.index}
            label={todo.label}
            isChecked={todo.isComplete}
            onChange={(checked) => handleChange(checked, todo)}
          />
        </li>
      ))}
    </ul>
  );
}
