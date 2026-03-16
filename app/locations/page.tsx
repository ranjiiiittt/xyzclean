import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { homePage, locationsPage } from "@/data/site-content";

export const metadata: Metadata = {
  title: locationsPage.metaTitle,
  description: locationsPage.metaDescription
};

function toLocationSlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

export default function LocationsPage() {
  return (
    <main id="top">
      <section className="section page-hero">
        <div className="page-hero__copy">
          <p className="eyebrow">Locations</p>
          <h1>{locationsPage.heroTitle}</h1>
          <p className="page-hero__lead">
            We service homes, offices, rental properties, and commercial sites across
            major cities and surrounding metro areas, with localised quotes and
            service plans tailored to each property.
          </p>
          <div className="hero-copy__actions">
            <Link className="button button--primary" href="/contact">
              Get a Free Quote
            </Link>
            <Link className="button button--ghost" href="/services">
              Explore Services
            </Link>
          </div>
        </div>

        <aside className="page-hero__aside">
          <article className="content-card content-card--media">
            <Image
              src="/australia-coverage.svg"
              alt="Australia metro cleaning coverage illustration"
              width={760}
              height={620}
            />
            <div className="content-card__body">
              <p className="stack-label">Major service areas</p>
              <p>
                From major metros to surrounding suburbs, we tailor cleaning support
                for local homes, workplaces, short-stay properties, and managed sites.
              </p>
            </div>
          </article>
        </aside>
      </section>

      <section className="section section-shell section-shell--sky">
        <div className="section-heading">
          <p className="eyebrow">Cities we service</p>
          <h2>Browse key metro service areas</h2>
          <p>
            Start with your city to explore local pages, service coverage, and the
            cleaning options available for your area.
          </p>
        </div>

        <div className="link-grid">
          {locationsPage.cities.map((city) => (
            <Link className="link-card" href={`/locations/${toLocationSlug(city)}`} key={city}>
              <p className="stack-label">Local service area</p>
              <h3>{city}</h3>
              <span>View city page</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--sand">
        <div className="section-heading">
          <p className="eyebrow">Popular local services</p>
          <h2>Cleaning support available across these areas</h2>
          <p>
            Whether you need a house clean, a move-out clean, an office schedule, or
            a more specialised service, we can tailor the scope around the property
            and local access requirements.
          </p>
        </div>

        <div className="link-grid">
          {homePage.popularServices.map((service) => (
            <Link className="link-card" href={service.href} key={service.href}>
              <p className="stack-label">Popular service</p>
              <h3>{service.label}</h3>
              <span>View service page</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--mint">
        <div className="section-heading">
          <p className="eyebrow">Property types</p>
          <h2>Homes, rentals, workplaces, and managed properties</h2>
          <p>
            Our location pages support a mix of residential, commercial, and
            specialised cleaning needs across local property types and industries.
          </p>
        </div>

        <div className="info-grid">
          {homePage.industries.map((item) => (
            <article className="info-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <CtaBand
          eyebrow="Local quote"
          title="Need cleaning services in your city or suburb?"
          body="Tell us where the property is located, what type of cleaning you need, and how often you want service, and we will tailor the quote around your area."
          primaryHref="/contact"
          primaryLabel="Get a Free Quote"
          secondaryHref="/services"
          secondaryLabel="Browse Services"
        />
      </section>
    </main>
  );
}
