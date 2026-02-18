import styles from './Heading.module.css';

type HeadingProps = {
    children: React.ReactNode;
}

export function Heading(props: HeadingProps){
    console.log(props);
    const {children} = props;
    return   <h2 className={`${styles.heading}`}>{children}</h2>
}
