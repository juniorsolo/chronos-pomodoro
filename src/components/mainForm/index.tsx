import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import { useRef, useState } from "react";

export function MainForm(){
    //const [taskName, setTaskName] = useState('');
    const taskNameInput = useRef<HTMLInputElement>(null);
    function handleCreateNewTask(event : React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('deu certo', taskNameInput.current?.value);

    }

  return (  
  <form onSubmit={handleCreateNewTask} className='form' action=''>

      <div className='formRow'>
          <DefaultInput 
          id="meuInput" 
          labelText="Task"
          type="text" 
          title="preencha aqui"
          placeholder="Digite alguma coisa"
          //value ={taskName}
          //onChange={ e => setTaskName(e.target.value)}
          ref={taskNameInput}
          >
          </DefaultInput>
      </div>

      <div className='formRow'>
          <p>O próximo intervalo é de 20 min</p>
      </div>
      
      <div className='formRow'>
          <Cycles></Cycles>
      </div>
      
      <div className='formRow'>
          <DefaultButton icon={<PlayCircleIcon />} ></DefaultButton>
      </div>          
  </form>
  );
}