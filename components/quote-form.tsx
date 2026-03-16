"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  addOnOptions,
  frequencyOptions,
  propertyTypeOptions,
  quoteServiceOptions
} from "@/data/site-content";

type QuoteFormProps = {
  compact?: boolean;
  initialService?: string;
};

export function QuoteForm({
  compact = false,
  initialService = "House Cleaning"
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const serviceValue = useMemo(() => {
    return quoteServiceOptions.includes(initialService) ? initialService : "Other";
  }, [initialService]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className={`form-grid${compact ? " form-grid--compact" : ""}`}>
        <label>
          Full Name *
          <input name="name" type="text" placeholder="Your full name" required />
        </label>
        <label>
          Phone Number *
          <input name="phone" type="tel" placeholder="+61" required />
        </label>
        <label>
          Email Address *
          <input name="email" type="email" placeholder="name@email.com" required />
        </label>
        <label>
          Postcode / Suburb *
          <input name="suburb" type="text" placeholder="Suburb or postcode" required />
        </label>
        <label>
          Service Type *
          <select name="service" defaultValue={serviceValue} required>
            {quoteServiceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          Property Type *
          <select name="propertyType" defaultValue="House" required>
            {propertyTypeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        {!compact ? (
          <>
            <label>
              Bedrooms
              <input name="bedrooms" type="number" min="0" placeholder="0" />
            </label>
            <label>
              Bathrooms
              <input name="bathrooms" type="number" min="0" placeholder="0" />
            </label>
            <label>
              Approx. Site Size / Square Metres
              <input name="siteSize" type="text" placeholder="Optional" />
            </label>
            <label>
              Preferred Service Frequency
              <select name="frequency" defaultValue="Once-Off">
                {frequencyOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Preferred Date
              <input name="date" type="date" />
            </label>
            <label>
              Preferred Time Window
              <input name="timeWindow" type="text" placeholder="Morning / afternoon / after-hours" />
            </label>
          </>
        ) : null}

        {!compact ? (
          <fieldset className="form-grid__wide checkbox-fieldset">
            <legend>Do you need any add-ons?</legend>
            <div className="checkbox-grid">
              {addOnOptions.map((option) => (
                <label className="checkbox-item" key={option}>
                  <input type="checkbox" name="addons" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {!compact ? (
          <label className="form-grid__wide">
            Access Details / Parking Notes
            <input name="accessNotes" type="text" placeholder="Gate codes, parking, arrival notes, or site access details" />
          </label>
        ) : null}

        <label className="form-grid__wide">
          Tell Us About Your Cleaning Needs *
          <textarea
            name="details"
            rows={compact ? 4 : 6}
            placeholder="Tell us about the property, priorities, timing, and anything we should know."
            required
          />
        </label>

        {!compact ? (
          <>
            <label>
              Upload Photos (optional)
              <input name="photos" type="file" multiple />
            </label>
            <label>
              Preferred Contact Method
              <select name="contactMethod" defaultValue="Phone">
                <option>Phone</option>
                <option>Email</option>
                <option>SMS</option>
              </select>
            </label>
          </>
        ) : null}

        <label className="form-grid__wide checkbox-item checkbox-item--inline">
          <input type="checkbox" name="consent" required />
          <span>
            I agree to be contacted about my enquiry and understand my information will
            be handled according to the Privacy Policy.
          </span>
        </label>
      </div>

      <div className="quote-form__footer">
        <button className="button button--primary" type="submit">
          Get My Quote
        </button>
        <p className={`form-status${submitted ? " is-visible" : ""}`} aria-live="polite">
          Thanks. This demo form is ready to connect to your CRM or backend.
        </p>
      </div>
    </form>
  );
}
