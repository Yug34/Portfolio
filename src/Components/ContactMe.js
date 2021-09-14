import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactMe() {
  const [state, handleSubmit] = useForm("xpzkbzob");

  if (state.succeeded) {
    return (
      <div className="formBox-success">
        <p>Thanks for contacting me!</p>
      </div>
    );
  }

  return (
    <div className="formBox">
      <form onSubmit={handleSubmit}>
        Contact me!
        <div className="inputBlock" id="emailBlock">
          <label className="inputLabel" id="emailLabel" htmlFor="email">
            Email Address
          </label>
          <input
            className="formInput"
            id="email"
            type="email"
            name="email"
            autoComplete={false}
          />
          <label className="inputLabel" id="subjectLabel" htmlFor="subject">
            Email Address
          </label>
          <input
            className="formInput"
            id="subject"
            type="text"
            name="subject"
            autoComplete={false}
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div className="inputBlock" id="messageBlock">
          <label className="inputLabel" id="messageLabel" htmlFor="message">
            Message
          </label>
          <textarea className="formInput" id="message" name="message" />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
