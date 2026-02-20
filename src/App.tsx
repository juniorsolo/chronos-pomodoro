import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/container';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import { CountDown } from './components/countDown';
import { DefaultInput } from './components/defaultInput';
import { Cycles } from './components/cycles';
import { DefaultButton } from './components/defaultButton';
import { PlayCircle, PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import styles from './index.css';


export function App(){
    return (
    <>
       <Container>
            <Logo/>
        </Container> 
        <Container>
            <Menu/>
        </Container>   
        <Container>
            <CountDown/>
        </Container>   
        <Container>
            <form className='form' action=''>
                <div className='formRow'>
                    <DefaultInput 
                    id="meuInput" 
                    labelText="Task" 
                    type="text" 
                    title="preencha aqui"
                    placeholder="Digite alguma coisa"
                    disabled 
                    defaultValue="Valor preenchido">
                    </DefaultInput>
                </div>

                <div className='formRow'>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                
                <div className='formRow'>
                    <Cycles></Cycles>
                </div>
                
                <div className='formRow'>
                    <DefaultButton icon={<PlayCircleIcon />} color='green'></DefaultButton>
                    <DefaultButton icon={<StopCircleIcon />} color='red'></DefaultButton>
                </div>
            </form>
        </Container>   
    </>
    );
    
}
