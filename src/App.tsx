import { AboutPomodoro } from './components/pages/aboutPomodoro';
import { Home } from './components/pages/home';
import { NotFound } from './components/pages/notFound';
import { MainTemplate } from './components/templates/mainTemplate';
import './styles/global.css';
import './styles/theme.css';


export function App(){
    // const [numero, setNumero] = useState( () => {
    //     console.log('Lazy initialization');
    //     return 0;
    // });

    // function handleClick(){
    //     setNumero(prevState => prevState +1); // manipula sempre o estado atual 
    // }

    return  <NotFound />;
    
}
