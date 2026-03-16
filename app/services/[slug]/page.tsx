import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/service-page-template";
import { getServicePage, servicePages } from "@/data/site-content";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({
  params
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    return {
      title: "Service not found | xyzclean"
    };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    notFound();
  }

  return <ServicePageTemplate page={page} />;
}
