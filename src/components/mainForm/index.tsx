import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

export function MainForm(){
    const {state, setState} = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);
    
    //nextCycle
    const nextCycle = getNextCycle(state.currentCycle);
    console.log(nextCycle);
    function handleCreateNewTask(event : React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if(taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();
       
        console.log(taskName);

        if(!taskName){
           alert('Digite o nome da tarefa');
           return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: 1,
            type: "workTime",
        };

        const secondsRemaining = newTask.duration * 60;

        setState( prevState => {
            return{
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle, // conferir
                secondsRemaining,
                formmattedSecondsRemaining: '00:00',
                tasks: [...prevState.tasks, newTask],
                config: {...prevState.config},
            }
        });
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