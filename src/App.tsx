import {  useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from '../src/components/ListItem';
import {AddArea} from '../src/components/AddArea';

const App = ()=>{

  const [ list, setList ] = useState<Item[]>([

    {id:1,name:'Comprar pão',done:false},
    {id:2,name:'Comprar bolo ',done:false}

  ]);

  const handleAddTask = (taskName:string)=>{

    let newList = [...list];
    newList.push({
      id:list.length + 1,
      name:taskName,
      done: false
    });

    setList(newList);

  }
  return (
    <>
      <C.Container>
        <C.Area>
          <C.Header>
          <h2>Lista de Tarefas</h2>
          </C.Header>
          <AddArea onEnter={handleAddTask} />
          {list.map((item, index)=>(
            <ListItem key={index} item={item}  />
          ))}
        </C.Area>
      </C.Container>
    </>  
  );
}

export default App;
