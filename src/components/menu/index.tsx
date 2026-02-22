import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu(){
    
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault(); // nao segue o link
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme; 
        });
    }

     // useEffect(() => {
  //   console.log('useEffect sem dependências', Date.now());
  // }); // Executado todas vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('useEffect com array deps vazio', Date.now());
  // }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez

    useEffect(() => {
    console.log('Theme mudou', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('Olha, este componente será atualizado');
    };
  }, [theme]); 

    return  (
    <nav className={`${styles.menu}`}>
        <h1>
            {theme}
        </h1>
        <a className={styles.menuLink} href="#" 
        aria-label='Ir para Home' title='Ir para Home'>
            <HouseIcon/>
        </a>
        <a className={styles.menuLink} href="#" 
            aria-label='Ver Histórico' title='Ver Histórico'>
            <HistoryIcon/>
        </a>
        <a className={styles.menuLink} href="#" 
            aria-label='Configurações' title='Configurações'>
            <SettingsIcon/>
        </a>
        <a className={styles.menuLink} href="#" 
          aria-label='Mudar Tema' title='Mudar Tema'
          onClick={(event) => handleThemeChange(event)}>
            <SunIcon/>
        </a>
    </nav>
    );
}
