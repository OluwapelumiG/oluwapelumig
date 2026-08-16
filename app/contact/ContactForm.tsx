"use client";

import { FormEvent, useState } from "react";
import {
  email,
  githubUrl,
  linkedInUrl,
  twitterUrl,
} from "../data/identity";

export default function ContactForm(): JSX.Element {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${from}>`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <h1>
        Inbound
        <span>channel</span>
      </h1>
      <p className="dek">Roles, contracts, and technical collaboration.</p>

      <ul className="record">
        <li>
          <span className="exp">To</span>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <span className="exp">Tel</span>
          <a href="tel:+2348129241613">+234 812 924 1613</a>
        </li>
        <li>
          <span className="exp">Loc</span>
          <span>Ayobo, Lagos, Nigeria</span>
        </li>
      </ul>

      <p className="mail">
        <a href={githubUrl} rel="me noreferrer">
          GitHub
        </a>
        <a href={linkedInUrl} rel="me noreferrer">
          LinkedIn
        </a>
        <a href={twitterUrl} rel="me noreferrer">
          X
        </a>
        <a href="https://wa.me/message/CRHFR45SVC6IH1" rel="noreferrer">
          WhatsApp
        </a>
      </p>

      <form className="lab-form" onSubmit={onSubmit}>
        <label>
          Name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </label>
        <label className="full">
          Message
          <textarea
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
