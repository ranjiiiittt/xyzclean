import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { FaqGrid } from "@/components/faq-grid";
import { homePage, locationsPage } from "@/data/site-content";

type CityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

function toLocationSlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

function fromLocationSlug(slug: string) {
  return locationsPage.cities.find((city) => toLocationSlug(city) === slug);
}

export function generateStaticParams() {
  return locationsPage.cities.map((city) => ({
    city: toLocationSlug(city)
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = fromLocationSlug(citySlug);

  if (!city) {
    return {
      title: "Location not found | xyzclean"
    };
  }

  return {
    title: `Cleaning Services in ${city} | Homes, Offices and More`,
    description: `Explore cleaning services in ${city} for homes, rentals, workplaces, short-stay properties, and managed buildings.`
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = fromLocationSlug(citySlug);

  if (!city) {
    notFound();
  }

  const cityFaqs = [
    `What cleaning services are available in ${city}?`,
    `Can I book weekly or fortnightly cleaning in ${city}?`,
    `Do you offer end of lease and office cleaning in ${city}?`,
    `Can you tailor a quote for my property in ${city}?`
  ];

  const nearbyCities = locationsPage.cities.filter((item) => item !== city);

  return (
    <main id="top">
      <section className="section page-hero">
        <div className="page-hero__copy">
          <p className="eyebrow">Local service area</p>
          <h1>Cleaning services in {city}</h1>
          <p className="page-hero__lead">
            We provide cleaning support across {city} for homes, apartments, rental
            properties, offices, short-stay accommodation, and managed sites, with
            service plans tailored to local access, timing, and property needs.
          </p>
          <div className="hero-copy__actions">
            <Link className="button button--primary" href="/contact">
              Get a Free Quote
            </Link>
            <Link className="button button--ghost" href="/services">
              View Services
            </Link>
          </div>
        </div>

        <aside className="page-hero__aside">
          <article className="content-card content-card--media">
            <Image
              src="/australia-coverage.svg"
              alt="Australia metro service area illustration"
              width={760}
              height={620}
            />
            <div className="content-card__body">
              <p className="stack-label">Local service in {city}</p>
              <p>
                Whether you need regular home cleaning, commercial support, or a
                one-off handover clean, we tailor the service around the property and
                schedule.
              </p>
            </div>
          </article>
        </aside>
      </section>

      <section className="section section-shell section-shell--sand">
        <div className="section-heading">
          <p className="eyebrow">Popular services</p>
          <h2>Cleaning services clients in {city} ask for most</h2>
          <p>
            These are some of the most commonly requested service types for local
            households, workplaces, and managed properties.
          </p>
        </div>

        <div className="link-grid">
          {homePage.popularServices.map((service) => (
            <Link className="link-card" href={service.href} key={service.href}>
              <p className="stack-label">{city}</p>
              <h3>{service.label}</h3>
              <span>View service page</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--mint">
        <div className="section-heading">
          <p className="eyebrow">Property types served</p>
          <h2>Homes, rentals, workplaces, and specialised sites in {city}</h2>
          <p>
            We tailor local cleaning support to the property type, the amount of foot
            traffic, and the outcome you need the space to be ready for.
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

      <section className="section section-shell section-shell--sea">
        <div className="section-heading">
          <p className="eyebrow">Why locals book us</p>
          <h2>Practical service support for busy properties in {city}</h2>
          <p>
            Local clients choose cleaning providers that are easy to communicate
            with, flexible around access and timing, and reliable from one visit to
            the next.
          </p>
        </div>

        <div className="info-grid">
          {homePage.whyChooseUs.map((item) => (
            <article className="info-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--cream">
        <div className="section-heading">
          <p className="eyebrow">Nearby service areas</p>
          <h2>Explore other city pages</h2>
          <p>
            If your property is in a neighbouring metro area or you manage multiple
            sites, you can explore nearby city pages as well.
          </p>
        </div>

        <div className="link-grid">
          {nearbyCities.map((item) => (
            <Link className="link-card" href={`/locations/${toLocationSlug(item)}`} key={item}>
              <p className="stack-label">Nearby city</p>
              <h3>{item}</h3>
              <span>Open city page</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-shell section-shell--sky">
        <div className="section-heading">
          <p className="eyebrow">FAQs</p>
          <h2>Questions people ask about cleaning in {city}</h2>
          <p>
            If you are comparing service types, planning around access, or not sure
            what to include in the quote request, these are good places to start.
          </p>
        </div>
        <FaqGrid items={cityFaqs} />
      </section>

      <section className="section">
        <CtaBand
          eyebrow="Local quote"
          title={`Need cleaning services in ${city}?`}
          body={`Tell us about the property, the service you need, and your preferred timing in ${city}, and we will send a tailored quote.`}
          primaryHref="/contact"
          primaryLabel="Get a Free Quote"
          secondaryHref="/services"
          secondaryLabel="Browse Services"
        />
      </section>
    </main>
  );
}
