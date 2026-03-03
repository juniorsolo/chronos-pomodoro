import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../defaultButton";
import { DefaultInput } from "../defaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm(){
    const {state, setState} = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);
    
    // Ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

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
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };

        const secondsRemaining = newTask.duration * 60;

        setState( prevState => {
            return{
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle, // conferir
                secondsRemaining,
                formmattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
                config: {...prevState.config},
            }
        });
    }

   function handleInterruptionTask(){
     setState(prevState => {
        return {
            ...prevState,
            activeTask: null,
            secondsRemaining: 0, 
            formmattedSecondsRemaining:'00:00',
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
          disabled={!!state.activeTask}
          >
          </DefaultInput>
      </div>

      <div className='formRow'>
          <p>O próximo intervalo é de 20 min</p>
      </div>
      
      {state.currentCycle > 0 && (
        <div className='formRow'>
            <Cycles></Cycles>
        </div>
      )}
      <div className='formRow'>
        {!state.activeTask ? (
            <DefaultButton 
            type="submit" 
            aria-label="Iniciar nova tarefa" 
            title="Iniciar nova tarefa" 
            icon={<PlayCircleIcon />}
            key="Submmit" 
            />

        )  : (
            <DefaultButton 
             type="button"
             aria-label="Interromper tarefa atual"
             title = 'Interromper tarefa atual'
             color="red"
             icon={<StopCircleIcon/>}
             onClick={handleInterruptionTask}
             key="button"
             />
        )}
      </div>          
  </form>
  );
}