import styles from './styles.module.css';

type DefaultButtonProp = {
 icon: React.ReactNode;
 color?: 'red' | 'green';
} & React.ComponentProps<'button'>;

export function DefaultButton( {icon, color="green", ...props} : DefaultButtonProp ){
  return(
    <>
      <button className={`${styles.button}  ${styles[color]}`}  {...props}>
        {icon}
      </button>
    </>
  );
}