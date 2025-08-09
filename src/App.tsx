import { useState } from "react";

import { ListItem } from "../src/components/ListItem";
import { AddArea } from "../src/components/AddArea";
import type { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  };
  return (
    <div
      className={`flex justify-center bg-[#17181F] text-[:#797A8] w-full h-screen`}
    >
      <div className={` w-[900px] p-5`}>
        <div className={`text-white text-center pt-[4rem] pb-[1rem]`}>
          <p className="text-2xl">Lista de Tarefas</p>
        </div>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
