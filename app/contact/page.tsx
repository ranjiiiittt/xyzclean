import type { Metadata } from "next";
import Image from "next/image";
import { GeneralEnquiryForm } from "@/components/general-enquiry-form";
import { QuoteForm } from "@/components/quote-form";
import { contactPage } from "@/data/site-content";

type ContactPageProps = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export const metadata: Metadata = {
  title: contactPage.metaTitle,
  description: contactPage.metaDescription
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams;

  return (
    <main id="top">
      <section className="section page-hero">
        <div className="page-hero__copy">
          <p className="eyebrow">Contact</p>
          <h1>{contactPage.heroTitle}</h1>
          <p className="page-hero__lead">{contactPage.heroText}</p>
        </div>

        <aside className="page-hero__aside">
          <article className="content-card content-card--media">
            <Image
              src="/essentials-kit.svg"
              alt="Cleaning essentials and neatly folded towels"
              width={760}
              height={620}
            />
            <div className="content-card__body">
              <p className="stack-label">Fast, tailored responses</p>
              <p>
                Share the property type, service needed, suburb or postcode, and any
                timing or access notes, and we will tailor the quote around your job.
              </p>
            </div>
          </article>
        </aside>
      </section>

      <section className="section section-shell section-shell--cream">
        <div className="contact-layout">
          <div className="contact-panel">
            <div className="section-heading section-heading--compact">
              <p className="eyebrow">Request a quote</p>
              <h2>Tell us about the property and the service you need</h2>
              <p>
                Use the main quote form for residential, commercial, and specialised
                enquiries, including end of lease, office, strata, Airbnb, and
                support-related cleaning.
              </p>
            </div>
            <QuoteForm initialService={service} />
          </div>

          <div className="contact-stack">
            <aside className="contact-panel">
              <p className="stack-label">Contact details</p>
              <ul className="contact-list">
                {contactPage.detailPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>

            <aside className="contact-panel">
              <div className="section-heading section-heading--compact">
                <p className="eyebrow">General enquiry</p>
                <h2>Need to ask a question first?</h2>
                <p>
                  Use the shorter contact form if you have a general question, want
                  to clarify a service, or need help before requesting a full quote.
                </p>
              </div>
              <GeneralEnquiryForm />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
