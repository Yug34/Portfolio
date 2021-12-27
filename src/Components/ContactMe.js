import React, { useState, useContext } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {IsMobileContext} from "../Contexts/IsMobile";

function ContactMe(props) {
  const [state, handleSubmit] = useForm("xpzkbzob");
  const [subjectValue, setSubjectValue] = useState("Yug please work with me");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [sideNoteValue, setSideNoteValue] = useState("");
  const isMobile = useContext(IsMobileContext);

  if (state.succeeded) {
    return (
      <div className={isMobile ? "formBoxMobile" : "formBox"}>
        <div style={{ border: "1px solid greenyellow" }}>
          <p>Thanks for contacting me! You're awesome. :)</p>
        </div>
      </div>
    );
  }

  return (
    <div className={isMobile ? "formBoxMobile" : "formBox"}>
      <div style={{ border: "1px solid white" }}>
        <form onSubmit={handleSubmit}>
          <p>
            Contact me;{" "}
            <i>
              <u>don't</u> be shy!
            </i>
          </p>
          <div className="inputBlock" id="emailBlock">
            <div className="inlineEmail">
              <label
                className="inputLabel"
                id="emailLabel"
                htmlFor="email"
                aria-labelledby="Email Address Input"
              >
                Email Address:
              </label>
              <input
                className="formInput"
                id="email"
                type="email"
                name="email"
                autoComplete="none"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
              />
            </div>
            <div className="inlineSubject">
              <label
                className="inputLabel"
                id="subjectLabel"
                htmlFor="subject"
                aria-labelledby="Email Subject Input"
              >
                Subject:
              </label>
              <input
                name="subject"
                className="formInput"
                id="subject"
                type="text"
                autoComplete="none"
                value={subjectValue}
                onChange={(e) => {
                  setSubjectValue(e.target.value);
                }}
              />
            </div>
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />{" "}
          <div className="inputBlock" id="messageBlock">
            <label
              className="inputLabel"
              id="messageLabel"
              htmlFor="message"
              aria-labelledby="Message Input Area"
            >
              Message:
            </label>
            <textarea
              className="formInput"
              id="message"
              name="message"
              autoComplete="none"
              value={messageValue}
              onChange={(e) => {
                setMessageValue(e.target.value);
              }}
            />
            {isMobile ? null : (
              <div>
                <label
                  className="inputLabel"
                  id="sideNoteLabel"
                  htmlFor="sideNote"
                  aria-labelledby="A nice little side note input"
                >
                  An optional but highly recommended positive message to me
                  pretty please?
                </label>
                <textarea
                  className="formInput"
                  id="sideNote"
                  name="sideNote"
                  autoComplete="none"
                  value={sideNoteValue}
                  onChange={(e) => {
                    setSideNoteValue(e.target.value);
                  }}
                />
              </div>
            )}
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          {/*Do not remove, You need at least one valid input field with autoComplete="on"*/}{" "}
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
          {emailValue && messageValue && subjectValue ? (
            <button
              id="submitEmailBtn"
              className="submitEmail"
              type="submit"
              style={{ border: "1px solid white" }}
              disabled={state.submitting}
              onClick={(e) => {
                if (!(emailValue && messageValue && subjectValue)) {
                  e.preventDefault();
                }
              }}
            >
              Submit
            </button>
          ) : (
            <button
              id="redSubmitEmailBtn"
              className="submitEmail"
              type="submit"
              style={{ border: "1px solid red" }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Can't submit, fill the form
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
export default ContactMe;
