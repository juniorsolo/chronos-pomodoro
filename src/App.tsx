import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/container';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import { CountDown } from './components/countDown';
import { DefaultInput } from './components/defaultInput';
import { Cycles } from './components/cycles';


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
                    <button>Enviar</button>
                </div>
            </form>
        </Container>   
    </>
    );
    
}
