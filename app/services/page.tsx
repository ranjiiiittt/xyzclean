import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { servicesOverview } from "@/data/site-content";

export const metadata: Metadata = {
  title: servicesOverview.metaTitle,
  description: servicesOverview.metaDescription
};

const serviceGroups = [
  {
    eyebrow: "Residential",
    title: "Residential services",
    intro:
      "Household cleaning support for homes, apartments, rentals, handovers, and one-off resets.",
    links: servicesOverview.residential,
    tone: "section-shell--sand"
  },
  {
    eyebrow: "Commercial",
    title: "Commercial services",
    intro:
      "Cleaning scopes built around presentation standards, access windows, foot traffic, and site priorities.",
    links: servicesOverview.commercial,
    tone: "section-shell--sky"
  },
  {
    eyebrow: "Specialised",
    title: "Support and specialised services",
    intro:
      "Service options for short-stay properties, household support needs, and tailored cleaning plans.",
    links: servicesOverview.specialised,
    tone: "section-shell--mint"
  }
];

export default function ServicesPage() {
  return (
    <main id="top">
      <section className="section page-hero">
        <div className="page-hero__copy">
          <p className="eyebrow">Cleaning services</p>
          <h1>{servicesOverview.heroTitle}</h1>
          <p className="page-hero__lead">{servicesOverview.heroText}</p>
          <div className="hero-copy__actions">
            <Link className="button button--primary" href="/contact">
              Get a Free Quote
            </Link>
            <Link className="button button--ghost" href="/contact?service=Commercial%20Cleaning">
              Request a Site Visit
            </Link>
          </div>
        </div>

        <aside className="page-hero__aside">
          <article className="content-card content-card--media">
            <Image
              src="/quality-checklist.svg"
              alt="Service planning and cleaning checklist illustration"
              width={760}
              height={620}
            />
            <div className="content-card__body">
              <p className="stack-label">Tailored service plans</p>
              <p>
                Choose the service that matches your property, then tailor the scope
                with add-ons, scheduling preferences, and practical site details.
              </p>
            </div>
          </article>

          <article className="content-card">
            <p className="stack-label">Available categories</p>
            <ul className="detail-list">
              <li>Residential cleaning services</li>
              <li>Commercial cleaning services</li>
              <li>Specialised and support services</li>
            </ul>
          </article>
        </aside>
      </section>

      {serviceGroups.map((group) => (
        <section className={`section section-shell ${group.tone}`} key={group.title}>
          <div className="section-heading">
            <p className="eyebrow">{group.eyebrow}</p>
            <h2>{group.title}</h2>
            <p>{group.intro}</p>
          </div>

          <div className="link-grid">
            {group.links.map((link) => (
              <Link className="link-card" href={link.href} key={link.href}>
                <p className="stack-label">{group.eyebrow}</p>
                <h3>{link.label}</h3>
                <span>View service page</span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="section section-shell section-shell--cream">
        <div className="section-shell__split">
          <div className="section-shell__content">
            <div className="section-heading section-heading--compact">
              <p className="eyebrow">Add-on services</p>
              <h2>Extra detail where the property needs it most</h2>
              <p>
                Add-ons help tailor the clean around handovers, guest stays,
                higher-detail kitchens and bathrooms, presentation goals, and site
                operations.
              </p>
            </div>

            <div className="info-grid">
              {servicesOverview.addOns.map((item) => (
                <article className="info-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="section-shell__visual">
            <article className="content-card content-card--media">
              <Image
                src="/essentials-kit.svg"
                alt="Folded linen and cleaning essentials"
                width={760}
                height={620}
              />
              <div className="content-card__body">
                <p className="stack-label">Custom cleaning plans</p>
                <p>
                  If you need a mix of recurring cleaning, one-off detail work, or
                  support across multiple spaces, we can tailor a service plan around
                  your property and schedule.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <CtaBand
          eyebrow="Need a tailored scope?"
          title="Tell us what kind of property you need cleaned"
          body="From houses and apartments to offices, clinics, childcare centres, strata buildings, and short-stay properties, we will guide you to the right service and quote."
          primaryHref="/contact"
          primaryLabel="Get a Free Quote"
          secondaryHref="/contact?service=Commercial%20Cleaning"
          secondaryLabel="Request a Site Visit"
        />
      </section>
    </main>
  );
}
