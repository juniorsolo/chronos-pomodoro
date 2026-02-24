import React from "react";
import { Container } from "../../container";
import { Footer } from "../../footer";
import { Heading } from "../../heading";
import { Logo } from "../../logo";
import { Menu } from "../../menu";

type MainTemplateProps = {
  children : React.ReactNode
}

export function MainTemplate({children} : MainTemplateProps){
  return (
     <>
       <Heading children={undefined}></Heading>

       <Container>
            <Logo/>
        </Container> 
        <Container>
            <Menu/>
        </Container>   
        {children}
        <Container>
            <Footer/>
        </Container>   
    </>
  );
}