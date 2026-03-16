"use client";

import { FormEvent, useState } from "react";
import { generalEnquirySubjects } from "@/data/site-content";

export function GeneralEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="mini-form" onSubmit={handleSubmit}>
      <label>
        Name *
        <input type="text" name="name" required placeholder="Your name" />
      </label>
      <label>
        Email *
        <input type="email" name="email" required placeholder="name@email.com" />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="+61" />
      </label>
      <label>
        Subject *
        <select name="subject" defaultValue={generalEnquirySubjects[0]} required>
          {generalEnquirySubjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </label>
      <label className="mini-form__wide">
        Message *
        <textarea name="message" rows={5} required placeholder="How can we help?" />
      </label>
      <label className="checkbox-item checkbox-item--inline mini-form__wide">
        <input type="checkbox" required />
        <span>I agree to be contacted about my enquiry.</span>
      </label>
      <button className="button button--primary" type="submit">
        Send Message
      </button>
      <p className={`form-status${submitted ? " is-visible" : ""}`} aria-live="polite">
        Thanks. This message form is ready for your backend integration.
      </p>
    </form>
  );
}
