import { useState } from "react";
import type { Item } from "../../types/Item";

type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleDone = () => {
    item.done = !item.done;
  };

  return (
    <div className="flex items-center bg-[#20212c] p-[.8rem] rounded mb-[.4rem]">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        onClick={handleDone}
        className="w-5 h-5 accent-[#8380C6] cursor-pointer"
      />
      <label
        className={`text-[#ccc] pl-2 text-lg leading-none
          ${
            isChecked ? "line-through decoration-2 decoration-[#ccc]" : ""
          } truncate`}
      >
        {item.name}
      </label>
    </div>
  );
};
