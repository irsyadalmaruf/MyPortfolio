import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>OneBox CRM (Intern Project)</h3>
              <p>
              OneBox CRM (Customer Relationship Management) is an ERP-based application that helps companies improve customer service across multiple channels, accelerate complaint handling, enhance productivity, and support sales operations.
              With features such as task management, knowledge systems, and customer data integration, OneBox CRM provides a faster, easier, and more cost-effective operational solution.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>Phalcon Framework</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Futsal Booking App with Midtrans</h3>
              <p> This web-based application enables users to book futsal fields quickly and easily, anytime and anywhere. Integrated with Midtrans Payment Gateway, the platform ensures secure and seamless online payments.
              It is designed to simplify the reservation process, provide real-time field availability, manage schedules efficiently, and automate payment transactions — making it ideal for futsal centers and sports facility operators. </p>
            </div>
            <footer> <ul className="tech-list"> 
              <li>PHP</li> 
              <li>Code Igniter</li> 
              <li>JavaScript</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                {/* <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Web-Based Car Rental App</h3>
              <p>
              This application allows customers to rent vehicles online through a user-friendly web interface. With Midtrans Payment Gateway integration, it offers secure digital payment options to enhance customer convenience.
              The system includes features such as real-time vehicle availability, rental scheduling, customer management, and digital payment confirmation — providing a modern, efficient, and reliable vehicle rental solution for both businesses and individuals.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}