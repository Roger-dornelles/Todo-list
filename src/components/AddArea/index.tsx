import { useState } from "react";

type Props = {
  onEnter: (taskName: string) => void;
};
export const AddArea = ({ onEnter }: Props) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text !== "") {
      onEnter(text);
      setText("");
    }
  };

  return (
    <div className={`flex items-center border-b-[1px] border-white mb-4`}>
      <input
        type="text"
        placeholder="Adicionar Tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`flex-1 text-white text-bold outline-0 pl-3`}
      />
      <button
        className={`flex items-center justify-center text-white cursor-pointer py-1 px-3  border-[1px] rounded border-[#8380C6] ml-[1rem] mb-2`}
        onClick={handleClick}
      >
        ➕
      </button>
    </div>
  );
};
