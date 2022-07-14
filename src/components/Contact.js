import { StyledContact } from './styles/Contact.styled';
import emailService from '../emailService';
import emailjs from 'emailjs-com';
import ContactTile from './ContactTile';
import 'aos/dist/aos.css';

function Contact() {
  return (
    <StyledContact id="Contact" className="snap">
      <div className="mask">
        <h1 data-aos="in">Contact Form</h1>
      </div>
      <div className="mask">
        <h2 id="subtitle" data-aos="in">
          Wanna talk? Fill out the form with your email address and message, I’ll try to get back to
          you.
        </h2>
      </div>
      <form
        id="form"
        onSubmit={(event) => {
          document.getElementById('confirmation').innerText = 'Sending...';
          event.preventDefault();
          emailjs
            .sendForm(
              emailService.SERVICE_ID,
              emailService.TEMPLATE_ID,
              document.getElementById('form'),
              emailService.USER_ID
            )
            .then(
              () => {
                document.getElementById('confirmation').innerText =
                  'Thank you! We received your email and will respond soon!';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
                document.getElementById('ReCaptcha').reset();
              },
              (err) => {
                document.getElementById('confirmation').innerText =
                  'Opps! Something went wrong, please try again.';
              }
            );
        }}
      >
        <input
          data-aos="fade-left"
          data-aos-delay="1000"
          type="email"
          name="email"
          id="email"
          required
          placeholder="email address"
        />
        <textarea
          type="text"
          data-aos-delay="1000"
          data-aos="fade-left"
          name="message"
          id="message"
          required
          placeholder="message"
        />

        <div id="buttonGroup" data-aos="fade-left" data-aos-delay="1000">
          <button type="submit" id="button" value="Send Email">
            <h3>Send Email</h3>
          </button>
          <p id="confirmation"></p>
        </div>
      </form>

      <div id="contactTilesGrid">
        <ContactTile
          img="github.svg"
          h2="View My Github!"
          para="I have my projects source code on GitHub, take a look and get a glimpse into how I develop things!"
          link="https://github.com/Philip-Clark"
        />

        <ContactTile
          img="indeed.svg"
          h2="View My Resume on Indeed!"
          para="If your interested in working with me, feel free to check out my Indeed resume!"
          link="https://my.indeed.com/p/pr0sv1r"
        />

        <ContactTile
          img="linkedin.svg"
          h2="Let’s Connect on Linkedin!"
          para="Networking is a great tool, and I’d love to connect with you on Linkedin!"
          link="https://www.linkedin.com/in/-philip-clark/"
        />
      </div>
    </StyledContact>
  );
}
export default Contact;
