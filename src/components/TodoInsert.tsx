import { useState, type FormEvent, type ChangeEvent } from "react";

export default function TodoInsert({
  onAdd,
}: {
  onAdd: (text: string) => void;
}) {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
        style={{ padding: "6px", fontSize: "14px" }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "6px",
          padding: "6px 10px",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        추가
      </button>
    </form>
  );
}
