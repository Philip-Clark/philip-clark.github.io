import { StyledContact } from './styles/Contact.styled';
import emailService from '../emailService';
import emailjs from 'emailjs-com';
import ContactTile from './ContactTile';

function Contact() {
  return (
    <StyledContact>
      <h1>Contact Form</h1>
      <h2 id="subtitle">
        Wanna talk? Fill out the form with your email address and message, I’ll try to get back to
        you.
      </h2>
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
        <input type="email" name="email" id="email" required placeholder="email address" />
        <textarea type="text" name="message" id="message" required placeholder="message" />

        <button type="submit" id="button" value="Send Email">
          <h2>Send Email</h2>
        </button>
        <p id="confirmation"></p>
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
          h2="Hire Me on Indeed!"
          para="If your interested in working with me, feel free to check out my Indeed profile!"
          link="https://indeed.com/"
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
