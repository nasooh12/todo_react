import type { Todo } from "../App";

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <li
      style={{
        margin: "6px 0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{
          flex: 1,
          marginLeft: "8px",
          textDecoration: todo.done ? "line-through" : "none",
          color: todo.done ? "gray" : "black",
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onRemove(todo.id)}
        style={{
          marginLeft: "10px",
          background: "none",
          border: "none",
          color: "red",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ✕
      </button>
    </li>
  );
}
