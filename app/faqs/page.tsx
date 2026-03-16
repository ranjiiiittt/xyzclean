import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { faqGroups } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Cleaning Service FAQs | Booking, Pricing, Inclusions and Scheduling",
  description:
    "Get answers to common questions about booking, service inclusions, products, scheduling, commercial cleaning, residential cleaning, and quote requests."
};

export default function FaqsPage() {
  return (
    <main id="top">
      <section className="section page-hero">
        <div className="page-hero__copy">
          <p className="eyebrow">FAQs</p>
          <h1>Frequently Asked Questions</h1>
          <p className="page-hero__lead">
            Find answers about booking, inclusions, cleaning products, scheduling,
            residential and commercial service options, end of lease add-ons, support
            needs, and quote requests.
          </p>
          <div className="hero-copy__actions">
            <Link className="button button--primary" href="/contact">
              Get a Free Quote
            </Link>
            <Link className="button button--ghost" href="/services">
              Browse Services
            </Link>
          </div>
        </div>

        <aside className="page-hero__aside">
          <article className="content-card content-card--media">
            <Image
              src="/quality-checklist.svg"
              alt="Checklist illustration representing service questions and planning"
              width={760}
              height={620}
            />
            <div className="content-card__body">
              <p className="stack-label">What this page covers</p>
              <p>
                If you are not sure what is included, how scheduling works, or what
                details we need for a quote, this page covers the questions we hear
                most often.
              </p>
            </div>
          </article>
        </aside>
      </section>

      <section className="section section-shell section-shell--cream">
        <div className="section-heading">
          <p className="eyebrow">Answers by topic</p>
          <h2>Questions grouped by booking stage and service type</h2>
          <p>
            Browse the topic that matches what you are planning, whether you need a
            regular clean, a site visit, a move-out clean, or more specialised
            support.
          </p>
        </div>

        <div className="group-grid">
          {faqGroups.map((group, index) => (
            <article className={`group-card group-card--${index % 4}`} key={group.title}>
              <h3>{group.title}</h3>
              <ul className="detail-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <CtaBand
          eyebrow="Still need help?"
          title="Need an answer that depends on your property or schedule?"
          body="Send us the details of the home, workplace, or managed property and we will answer the question while preparing the right quote."
          primaryHref="/contact"
          primaryLabel="Get a Free Quote"
          secondaryHref="/services"
          secondaryLabel="View Services"
        />
      </section>
    </main>
  );
}
