import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import { useState } from "react";

export function MainForm(){
    const [taskName, setTaskName] = useState('');
    function handleCreateNewTask(event : React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('deu certo', {taskName});

    }

  return (  
  <form onSubmit={handleCreateNewTask} className='form' action=''>
    <h1>{taskName}</h1>
      <div className='formRow'>
          <DefaultInput 
          id="meuInput" 
          labelText="Task"
          type="text" 
          title="preencha aqui"
          placeholder="Digite alguma coisa"
          value ={taskName}
          onChange={ e => setTaskName(e.target.value)}>
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