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
        <div id="emailBlock">
          <label id="emailLabel" htmlFor="email">
            Email Address
          </label>
          <input id="email" type="email" name="email" />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div id="messageBlock">
          <label id="messageLabel" htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" />
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
