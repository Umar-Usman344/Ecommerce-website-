import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {

  const { user, isAuthenticated} = useAuth0();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.480960217201!2d72.7054752107873!3d31.290449358359247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3923accd16620f6b%3A0x89436570b0d65280!2sShahpur%2C%20Toba%20Tek%20Singh%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696238335342!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mrgwopbo"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="Enter your Name..."
              name="username"
              value={isAuthenticated? user.name : ""}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Enter your email..."
              value={isAuthenticated? user.email : ""}
              autoComplete="off"
              required
            />

            <textarea
              name="Type Message Here..."
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
