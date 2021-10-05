import{ useState } from 'react';
import * as C from './styles';
import {Item} from '../../types/Item';

type Props = {
    item: Item
}


export const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const handleDone = ()=>{
        if(item.done === false){
            item.done = true;
        }else{
            item.done = false;
        }
    }
    return(
            <C.Container done={isChecked}>
                
                <input type='checkbox' 
                    checked={isChecked} 
                    onChange={e=>setIsChecked(e.target.checked)}
                    onClick={handleDone}
                />
                <label>{item.name}</label>
            </C.Container>
        )
}