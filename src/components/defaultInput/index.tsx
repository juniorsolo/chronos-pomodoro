import styles from './styles.module.css';

type DefaultInputProp = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput( { id , type, labelText, ...rest} : DefaultInputProp ){
  return(
    <>
      { labelText && <label htmlFor={id}>{labelText}</label> }
      <input className={styles.input} id={id} type={type} {...rest}/>
    </>
  );
}