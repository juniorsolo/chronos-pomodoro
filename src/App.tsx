import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/container';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import { CountDown } from './components/countDown';
import { DefaultInput } from './components/defaultInput';
import { Cycles } from './components/cycles';
import { DefaultButton } from './components/defaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/footer';
import { Heading } from './components/heading';
import { useState } from 'react';


export function App(){
    // const [numero, setNumero] = useState( () => {
    //     console.log('Lazy initialization');
    //     return 0;
    // });

    // function handleClick(){
    //     setNumero(prevState => prevState +1); // manipula sempre o estado atual 
    // }

    return (
    <>
       <Heading></Heading>

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
        </Container>
        <Container>
            <Footer/>
        </Container>   
    </>
    );
    
}
