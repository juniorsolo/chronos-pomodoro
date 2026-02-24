import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";

export function MainForm(){

  return (  
  <form className='form' action=''>
      <div className='formRow'>
          <DefaultInput 
          id="meuInput" 
          labelText="Task"
          type="text" 
          title="preencha aqui"
          placeholder="Digite alguma coisa"
          defaultValue="">
          </DefaultInput>
      </div>

      <div className='formRow'>
          <p>Lorem ipsum dolor sit amet.</p>
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