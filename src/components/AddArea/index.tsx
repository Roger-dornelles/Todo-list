import { useState,KeyboardEvent } from 'react';
import * as C from './styled';

type Props = {
    onEnter:(taskName:string) => void;
}
export const AddArea = ({onEnter}: Props) => {

    const [text,setText ] = useState('');

    const handleKeyUp = (e: KeyboardEvent)=>{
        if(e.code === 'Enter' && text !== ''){
            onEnter(text);
            setText('');
        }
    }

    return (
        <>

            <C.Container>
                <div className="image">+</div>
                <input type="text" 
                    placeholder="Adicionar Tarefa" 
                    value={text}
                    onChange={e=>setText(e.target.value)}
                    onKeyUp={handleKeyUp}
                />
            </C.Container>
        </> 
    )
}