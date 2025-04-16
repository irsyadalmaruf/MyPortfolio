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
                <a href="https://github.com/irsyadalmaruf/Futsal-Booking-App-with-Midtrans" target="_blank" rel="noreferrer">
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
              <li>CodeIgniter 3</li> 
              <li>JavaScript</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/irsyadalmaruf/Car-Rental-WebApp" target="_blank" rel="noreferrer">
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

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/irsyadalmaruf/sims-webapp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Simplified Web App - SIMS</h3>
              <p>
                This is a simple web application for managing products, built with PHP and CodeIgniter 4.
                The app includes a login system, basic CRUD functionality for managing products, 
                category-based filtering, and an export-to-Excel feature. 
                It's designed to help small businesses easily manage their product inventories using a PostgreSQL database.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>CodeIgniter 4</li>
                <li>PostgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/irsyadalmaruf/gstore-platform-webapp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Online Game Store</h3>
              <p>
                This is a web-based Online Game Store application built using CodeIgniter 3 and MySQL, developed as a collaborative project.
                The platform allows users to browse games, add them to their cart, and manage transactions. Admins can manage orders, and users can view their purchase history. The application has a responsive design to work on various devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>odeIgniter 3</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/irsyadalmaruf/Aplikasi-Layanan-Pengaduan-Masyarakat" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Layanan Pengaduan Masyarakat (LPM)</h3>
              <p>
                LPM is a public complaint service application facilitated by the local government to allow citizens to file complaints regarding abuse of power, neglect of duties, or violations of regulations committed by specific parties within the village environment. Complaints that indicate violations can be easily followed up by authorities.
              </p>
              <p>
                This application enables the community to submit complaints, and the admin or officers can process and follow up on the complaints effectively. Users (citizens) can login to file complaints, while admins and officers can manage and resolve complaints.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>JavaScript</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}