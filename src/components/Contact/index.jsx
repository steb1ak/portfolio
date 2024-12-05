import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvwklyy");

  if (state.succeeded) {
    return <p>Thanks for reaching out! I will get back to you soon.</p>;
  }

  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            I am always open to new ideas and cooperation. If you have a project
            or question, don't hesitate to reach out!
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>steblakyaroslava@gmail.com</h5>
              <a
                href="mailto:steblakyaroslava@gmail.com"
                target="__blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__icon" />
              <h3>Messenger</h3>
              <h5>Steblak Yaroslava</h5>
              <a
                href="http://m.me/profile?id=profile-id"
                target="__blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <FaTelegramPlane className="contact__icon" />
              <h3>Telegram</h3>
              <h5>+380681436698</h5>
              <a
                href="https://t.me/s_steblak"
                target="__blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Your Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn__primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
