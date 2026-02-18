import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading';


function App(){

    console.log('strict mode');
    return (
    <>
        <Heading attr={123} attr2='teste'>Ola mundo!</Heading>
        <h3>Teste app </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat odit nulla aperiam unde exercitationem nostrum consequuntur delectus atque veniam neque iure doloremque mollitia laborum, praesentium sunt pariatur perferendis harum.</p>
    </>  
    );  
}

export {App};