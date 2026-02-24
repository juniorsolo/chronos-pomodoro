import { Container } from "../../container";
import { CountDown } from "../../countDown";
import { MainForm } from "../../mainForm";
import { MainTemplate } from "../../templates/mainTemplate";


export function Home(){

  return (
    <MainTemplate>
      <Container>
        <CountDown/>
      </Container>
        <MainForm/>
    </MainTemplate>
  );

}