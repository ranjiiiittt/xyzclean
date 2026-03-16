import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { homePage, industriesPage } from "@/data/site-content";

export const metadata: Metadata = {
  title: industriesPage.metaTitle,
  description: industriesPage.metaDescription
};

const operatingFactors = [
  "Traffic patterns and high-touch areas",
  "Site access, alarms, and handover requirements",
  "Presentation standards for client-facing spaces",
  "Risk-aware cleaning for sensitive environments",
  "Before-hours, after-hours, or low-disruption scheduling",
  "Recurring quality checks and clear communication"
];

export default function IndustriesPage() {
  return (
    <main id="top">
      <section className="section page-hero">
        <div className="page-hero__copy">
          <p className="eyebrow">Industries</p>
          <h1>{industriesPage.heroTitle}</h1>
          <p className="page-hero__lead">{industriesPage.heroText}</p>
          <div className="hero-copy__actions">
            <Link className="button button--primary" href="/contact?service=Commercial%20Cleaning">
              Request a Site Visit
            </Link>
            <Link className="button button--ghost" href="/services">
              View Services
            </Link>
          </div>
        </div>

        <aside className="page-hero__aside">
          <article className="content-card content-card--media">
            <Image
              src="/office-lounge.svg"
              alt="Polished office and reception environment"
              width={760}
              height={620}
            />
            <div className="content-card__body">
              <p className="stack-label">Tailored by environment</p>
              <p>
                Every site runs differently, so the cleaning scope is shaped around
                how the space is used, how it is accessed, and what needs to stay
                presentation-ready each day.
              </p>
            </div>
          </article>
        </aside>
      </section>

      <section className="section section-shell section-shell--sea">
        <div className="section-heading">
          <p className="eyebrow">Industries we serve</p>
          <h2>Cleaning solutions for different types of sites</h2>
          <p>
            We work across offices, healthcare environments, education spaces,
            managed properties, retail, hospitality, wellness, short-stay
            accommodation, and handover-driven sites.
          </p>
        </div>

        <div className="info-grid">
          {industriesPage.cards.map((item) => (
            <article className="info-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--mint">
        <div className="section-heading">
          <p className="eyebrow">How service adapts</p>
          <h2>What changes from one environment to the next</h2>
          <p>
            A good cleaning plan is shaped around site realities, not generic
            checklists. These are the practical factors that influence scope and
            scheduling across industries.
          </p>
        </div>

        <div className="info-grid">
          {operatingFactors.map((item) => (
            <article className="info-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--sand">
        <div className="section-heading">
          <p className="eyebrow">Popular service pathways</p>
          <h2>Common starting points for business and specialised clients</h2>
          <p>
            These service pages are often the quickest way to find the right scope
            for a workplace, managed property, or presentation-focused site.
          </p>
        </div>

        <div className="link-grid">
          {homePage.popularServices.slice(2).map((service) => (
            <Link className="link-card" href={service.href} key={service.href}>
              <p className="stack-label">Industry service</p>
              <h3>{service.label}</h3>
              <span>Open service page</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <CtaBand
          eyebrow="Commercial quote"
          title="Need a cleaning scope that suits your site?"
          body="Tell us about the property, your opening hours, the level of foot traffic, and any presentation or hygiene priorities, and we will tailor the right plan."
          primaryHref="/contact?service=Commercial%20Cleaning"
          primaryLabel="Request a Site Visit"
          secondaryHref="/contact"
          secondaryLabel="Get a Free Quote"
        />
      </section>
    </main>
  );
}
