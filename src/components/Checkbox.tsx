export interface Props {
  index?: number;
  label: string;
  isChecked?: boolean;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({ index, label, isChecked, onChange }: Props) {
  return (
    <div className='checkbox'>
      <label>
        <input
          type='checkbox'
          name={label}
          value={index}
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </label>
    </div>
  );
}
