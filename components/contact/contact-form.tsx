import { useEffect, useState } from "react";
import classes from "../../styles/contact-form.module.css";
import Notification from "../ui/notification";

enum RequestStatus {
  INITIAL = "initial",
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error",
}

async function sendContactData(contactDeatils) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDeatils),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.INITIAL
  );
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (
      requestStatus === RequestStatus.SUCCESS ||
      requestStatus === RequestStatus.ERROR
    ) {
      const timer = setTimeout(() => {
        setRequestStatus(RequestStatus.INITIAL);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus(RequestStatus.PENDING);
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus(RequestStatus.SUCCESS);
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus(RequestStatus.ERROR);
    }
  }

  let notification;

  if (requestStatus === RequestStatus.PENDING) {
    notification = {
      status: RequestStatus.PENDING,
      title: "Sending message...",
      message: "Please wait...",
    };
  }

  if (requestStatus === RequestStatus.SUCCESS) {
    notification = {
      status: RequestStatus.SUCCESS,
      title: "Success!",
      message: "Your message has been sent!",
    };
  }

  if (requestStatus === RequestStatus.ERROR) {
    notification = {
      status: RequestStatus.ERROR,
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
