import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:irsyadalmaruf12345@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:irsyadalmaruf12345@gmail.com">irsyadalmaruf12345@gmail.com</a>
        </div>
        <div>
        <a href="tel:+6285157578438"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+6285157578438">(+62) 851 5757 8438</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}