import classes from "./contact-form.module.css";
import { useRef, useState, useContext } from "react";
import NotificationContext from "../../store/notificationContext";

export default function ContactForm() {
  const [isInvalid, setIsInvalid] = useState(false);
  const notificationContext = useContext(NotificationContext);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();
    notificationContext.showNotification({
      title: "NewsletterRegistration",
      message: "Registrations for Newsletter",
      status: "pending",
    });
    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }
    const cData = {
      email: enteredEmail,
      name: enteredName,
      msg: enteredComment,
    };

    fetch(`/api/contact/`, {
      method: "POST",
      body: JSON.stringify(cData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        notificationContext.showNotification({
          title: "NewsletterRegistration",
          message: "Registrations Done for Newsletter",
          status: "success",
        });
        console.log(data);
      })
      .catch((err) => {
        notificationContext.showNotification({
          title: "NewsletterRegistration",
          message: "Error in Registrations for Newsletter",
          status: "failed",
        });
        console.log(data);
      });
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form className={classes.form} onSubmit={sendCommentHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" ref={nameInputRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="comment">Your Message</label>
          <textarea id="comment" rows="5" ref={commentInputRef}></textarea>
        </div>
        {isInvalid && <p>Please enter a valid email address and comment!</p>}
        <button>Submit</button>
      </form>
    </section>
  );
}
