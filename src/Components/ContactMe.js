import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactMe() {
  const [state, handleSubmit] = useForm("xpzkbzob");
  const [value, setValue] = useState("Yug please work with me");

  if (state.succeeded) {
    return (
      <div className="formBox">
        <div style={{ border: "1px solid greenyellow" }}>
          <p>Thanks for contacting me! You're awesome. :)</p>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="formBox">
      <div style={{ border: "1px solid white" }}>
        <form onSubmit={handleSubmit}>
          Contact me!
          <div className="inputBlock" id="emailBlock">
            <div className="inlineEmail">
              <label className="inputLabel" id="emailLabel" htmlFor="email">
                Email Address:
              </label>
              <input
                className="formInput"
                id="email"
                type="email"
                name="email"
                autoComplete="none"
              />
            </div>
            <div className="inlineSubject">
              <label className="inputLabel" id="subjectLabel" htmlFor="subject">
                Subject:
              </label>
              <input
                name="subject"
                className="formInput"
                id="subject"
                type="text"
                autoComplete="none"
                value={value}
                onChange={handleChange}
              />
            </div>
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="inputBlock" id="messageBlock">
            <label className="inputLabel" id="messageLabel" htmlFor="message">
              Message:
            </label>
            <textarea
              className="formInput"
              id="message"
              name="message"
              autoComplete="none"
            />
            <label className="inputLabel" id="sideNoteLabel" htmlFor="sideNote">
              An optional but highly recommended positive message to me pretty
              please?
            </label>
            <textarea
              className="formInput"
              id="sideNote"
              name="sideNote"
              autoComplete="none"
            />
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          {/*Do not remove, You need at least one valid input field with autoComplete="on"*/}
          <input
            type="text"
            autoComplete="on"
            value=""
            style={{
              display: "none",
              opacity: 0,
              position: "absolute",
              left: "-100000px",
            }}
            readOnly={true}
          />
          <button id="submitEmail" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
