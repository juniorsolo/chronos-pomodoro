import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/container';
import { Heading } from './components/heading';


export function App(){
    return (
    <>
       <Container>
            <Heading>Logo</Heading>
        </Container> 
        <Container>
            <Heading>Menu</Heading>
        </Container>   
    </>
    );
    
}
