import React, { useState } from 'react';
import Checkbox from 'components/Checkbox';

const todosList: { label: string; isComplete: boolean }[] = [
  { label: 'Wash car', isComplete: false },
  { label: 'Clean house', isComplete: false },
  { label: 'Grocery Shop', isComplete: true },
  { label: 'Walk Dog', isComplete: true },
  { label: 'Pay Bills', isComplete: true },
  { label: 'Water Lawn', isComplete: true },
  { label: 'Do Laundry', isComplete: true },
  { label: 'Vacuum', isComplete: true },
  { label: 'Sweep Porch', isComplete: true },
  { label: 'Retrieve Mail', isComplete: true },
];

export default function TodoList() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const ListItems = todosList.map((todo, index) => (
    <li className='checkbox-todo' key={index}>
      <Checkbox label={todo.label} onChange={handleChange} />
    </li>
  ));

  return <ul>{ListItems}</ul>;
}
