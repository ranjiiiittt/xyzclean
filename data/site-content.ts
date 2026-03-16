export type LinkItem = {
  href: string;
  label: string;
};

export type GroupedList = {
  title: string;
  items: string[];
};

export type ContentSection = {
  eyebrow?: string;
  title: string;
  intro?: string;
  items?: string[];
  groups?: GroupedList[];
  note?: string;
};

export type ServicePageContent = {
  slug: string;
  label: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroText: string;
  primaryCta: string;
  secondaryCta?: string;
  primaryKeywords?: string[];
  secondaryKeywords?: string[];
  supportPoints?: string[];
  sections: ContentSection[];
  faqs?: string[];
  finalCtaTitle: string;
  finalCtaBody: string;
  finalPrimaryCta: string;
  finalSecondaryCta?: string;
};

export const contactDetails = {
  phone: "1300 555 018",
  email: "hello@xyzclean.com.au",
  hours: "Mon-Sat, 7:00am to 7:00pm",
  area: "Metro service coverage across Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, and nearby surrounds.",
};

export const primaryNav: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const footerGroups = [
  {
    title: "Popular Services",
    links: [
      { href: "/services/house-cleaning", label: "House Cleaning" },
      {
        href: "/services/end-of-lease-cleaning",
        label: "End of Lease Cleaning",
      },
      { href: "/services/office-cleaning", label: "Office Cleaning" },
      { href: "/services/commercial-cleaning", label: "Commercial Cleaning" },
      { href: "/services/airbnb-cleaning", label: "Airbnb Cleaning" },
      { href: "/services/ndis-cleaning", label: "NDIS Cleaning" },
    ],
  },
  {
    title: "Business Services",
    links: [
      { href: "/services/strata-cleaning", label: "Strata Cleaning" },
      { href: "/services/medical-cleaning", label: "Medical Cleaning" },
      { href: "/services/childcare-cleaning", label: "Childcare Cleaning" },
      { href: "/services/builders-cleaning", label: "Builders Cleaning" },
      { href: "/industries", label: "Industries" },
      { href: "/locations", label: "Service Areas" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact" },
      { href: "/services", label: "All Services" },
    ],
  },
];

export const homePage = {
  hero: {
    eyebrow: "Professional cleaning services across Australia",
    title: "A cleaner space, less stress, and a team you can rely on",
    text: "From regular home cleaning to detailed commercial and specialised cleaning, xyzclean delivers reliable service tailored to Australian homes, rentals, workplaces, and managed properties.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Call Now",
  },
  heroSupport: [
    "Flexible weekly, fortnightly, and once-off cleaning",
    "Residential, commercial, and specialised services",
    "Fast quotes and tailored service plans",
  ],
  trustPoints: [
    "Fully insured cleaners",
    "Police-checked staff",
    "Flexible scheduling",
    "Residential and commercial coverage",
    "Eco-conscious products available",
    "Quality checklists",
    "Fast quote turnaround",
  ],
  serviceCards: [
    {
      title: "Residential Cleaning",
      copy: "Keep your home fresh, tidy, and easier to manage with regular or one-off cleaning.",
      href: "/services/residential-cleaning",
      cta: "Explore Residential Services",
    },
    {
      title: "Commercial Cleaning",
      copy: "Create a cleaner, healthier, and more presentable workplace with tailored commercial cleaning.",
      href: "/services/commercial-cleaning",
      cta: "Explore Commercial Services",
    },
    {
      title: "End of Lease Cleaning",
      copy: "Detailed move-out cleaning designed around inspection standards and property handovers.",
      href: "/services/end-of-lease-cleaning",
      cta: "View End of Lease Cleaning",
    },
    {
      title: "Airbnb Cleaning",
      copy: "Fast turnarounds and guest-ready presentation for short-stay properties.",
      href: "/services/airbnb-cleaning",
      cta: "View Airbnb Cleaning",
    },
    {
      title: "NDIS Cleaning",
      copy: "Respectful household assistance tailored to participant needs and routines.",
      href: "/services/ndis-cleaning",
      cta: "View NDIS Cleaning",
    },
    {
      title: "Strata Cleaning",
      copy: "Reliable upkeep of common areas, entries, lifts, bin rooms, and shared spaces.",
      href: "/services/strata-cleaning",
      cta: "View Strata Cleaning",
    },
  ],
  whyChooseUs: [
    "Clear communication from quote to completion",
    "Tailored cleaning plans for each property",
    "Attention to detail in high-use areas",
    "Flexible scheduling, including after-hours options",
    "Quality checklists and follow-up support",
    "Friendly, professional cleaners",
  ],
  howItWorks: [
    "Tell us what you need",
    "Receive a tailored quote",
    "Confirm your preferred schedule",
    "We clean to your agreed scope",
    "Ongoing service or one-off support",
  ],
  popularServices: [
    { href: "/services/house-cleaning", label: "House Cleaning" },
    { href: "/services/end-of-lease-cleaning", label: "End of Lease Cleaning" },
    { href: "/services/office-cleaning", label: "Office Cleaning" },
    { href: "/services/commercial-cleaning", label: "Commercial Cleaning" },
    { href: "/services/airbnb-cleaning", label: "Airbnb Cleaning" },
    { href: "/services/ndis-cleaning", label: "NDIS Cleaning" },
    { href: "/services/medical-cleaning", label: "Medical Cleaning" },
    { href: "/services/childcare-cleaning", label: "Childcare Cleaning" },
  ],
  industries: [
    "Houses and apartments",
    "Offices",
    "Retail shops",
    "Strata buildings",
    "Medical clinics",
    "Childcare centres",
    "Gyms",
    "Construction handovers",
  ],
  serviceAreas: {
    title: "Local cleaning services across Australia",
    body: "We service homes, offices, rental properties, and commercial sites across key suburbs, major cities, and surrounding metro areas.",
    cta: "View Service Areas",
  },
  testimonials: [
    {
      quote:
        "We get the consistency we need without having to chase updates. The service is reliable, practical, and easy to manage.",
      source: "Operations manager, Sydney",
    },
    {
      quote:
        "Their end of lease clean helped us hand the property over with far less pressure in the final week.",
      source: "Tenant client, Melbourne",
    },
    {
      quote:
        "The team works around our hours, keeps the office presentable, and communicates clearly when anything changes.",
      source: "Office manager, Brisbane",
    },
  ],
  faqs: [
    "What cleaning services do you offer?",
    "Do you bring your own equipment and products?",
    "Can I book weekly or fortnightly cleaning?",
    "Do you offer after-hours commercial cleaning?",
    "Can you provide a tailored quote for my property?",
  ],
  finalCta: {
    title: "Ready for a cleaner home, workplace, or property?",
    body: "Get a fast quote for one-off, regular, or specialised cleaning, with flexible scheduling and tailored service plans.",
    primary: "Get a Free Quote",
    secondary: "Call Our Team",
  },
};

export const servicesOverview = {
  metaTitle:
    "Cleaning Services in Australia | Residential, Commercial and Specialised",
  metaDescription:
    "Explore residential, commercial and specialised cleaning services including house, end of lease, office, Airbnb, NDIS, strata, childcare and medical cleaning.",
  heroTitle: "The right cleaning service for every space",
  heroText:
    "Choose from home, commercial, and specialised cleaning services tailored to your property, schedule, and cleaning goals.",
  residential: [
    { href: "/services/house-cleaning", label: "House Cleaning" },
    { href: "/services/end-of-lease-cleaning", label: "End of Lease Cleaning" },
    {
      href: "/services/residential-cleaning",
      label: "Residential Cleaning Overview",
    },
  ],
  commercial: [
    { href: "/services/commercial-cleaning", label: "Commercial Cleaning" },
    { href: "/services/office-cleaning", label: "Office Cleaning" },
    { href: "/services/strata-cleaning", label: "Strata Cleaning" },
    { href: "/services/medical-cleaning", label: "Medical Cleaning" },
    { href: "/services/childcare-cleaning", label: "Childcare Cleaning" },
    { href: "/services/builders-cleaning", label: "Builders Cleaning" },
  ],
  specialised: [
    { href: "/services/airbnb-cleaning", label: "Airbnb Cleaning" },
    { href: "/services/ndis-cleaning", label: "NDIS Cleaning" },
  ],
  addOns: [
    "Carpet steam cleaning",
    "Interior window cleaning",
    "Oven cleaning",
    "Fridge cleaning",
    "Deep bathroom detailing",
    "Consumable restocking",
    "Linen changeover",
    "Bin sanitising",
  ],
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "residential-cleaning",
    label: "Residential Cleaning",
    category: "Residential services",
    metaTitle:
      "Residential Cleaning Services in Australia | Homes, Apartments and Rentals",
    metaDescription:
      "Professional residential cleaning for houses, apartments and rental properties. Regular, deep, spring, and move-related cleaning available.",
    heroTitle: "Enjoy a cleaner home without giving up your weekends",
    heroText:
      "Our residential cleaning services help busy households stay on top of the mess with flexible one-off and ongoing options.",
    primaryCta: "Request a Residential Quote",
    secondaryCta: "View House Cleaning",
    sections: [
      {
        title: "Who it is for",
        items: [
          "Busy households that need reliable routine support",
          "Apartment residents and homeowners",
          "Rental properties between occupants",
          "Families balancing work, school, and home life",
        ],
      },
      {
        title: "Types of residential cleaning",
        items: [
          "House Cleaning",
          "Regular Cleaning",
          "Deep Cleaning",
          "End of Lease Cleaning",
          "Move In and Move Out Cleaning",
          "Spring Cleaning",
          "Carpet Steam Cleaning",
          "Window Cleaning",
        ],
      },
      {
        title: "Why clients choose residential support",
        intro:
          "Flexible service options make it easier to keep the home manageable, clean, and ready for everyday life.",
        items: [
          "One-off or ongoing schedules",
          "Add-ons for higher-detail areas",
          "Service plans shaped around your priorities",
          "Friendly teams and clear communication",
        ],
      },
    ],
    faqs: [
      "Can I arrange one-off or recurring home cleaning?",
      "Do you bring your own products and equipment?",
      "Can I add oven, window, or carpet cleaning?",
      "Do you work with rentals and move-related cleaning?",
    ],
    finalCtaTitle: "Need practical help keeping the home under control?",
    finalCtaBody:
      "Talk to our team about the right mix of regular cleaning, deep cleaning, and move-related support for your household.",
    finalPrimaryCta: "Get a Residential Quote",
    finalSecondaryCta: "View All Services",
  },
  {
    slug: "house-cleaning",
    label: "House Cleaning",
    category: "Residential services",
    metaTitle: "House Cleaning in Australia | Reliable Home Cleaners",
    metaDescription:
      "Professional house cleaning for busy households. Weekly, fortnightly and one-off home cleaning tailored to your routine and priorities.",
    heroTitle: "Come home to a cleaner, fresher space",
    heroText:
      "Whether you need weekly help or a one-off reset, our house cleaning service is designed to make home life easier, tidier, and less stressful.",
    primaryCta: "Get My House Cleaning Quote",
    secondaryCta: "Call Now",
    primaryKeywords: ["house cleaning [city]"],
    secondaryKeywords: [
      "home cleaning [city]",
      "regular house cleaning [city]",
      "domestic cleaning [city]",
    ],
    supportPoints: ["Weekly", "Fortnightly", "Monthly", "Once-off"],
    sections: [
      {
        title: "Ideal for",
        items: [
          "Busy professionals",
          "Families",
          "Older homeowners",
          "Shared households",
          "Anyone needing routine support",
        ],
      },
      {
        title: "What is included",
        groups: [
          {
            title: "Kitchen",
            items: [
              "Benchtops wiped",
              "Sink cleaned",
              "Exterior of appliances wiped",
              "Splashback cleaned",
              "Floors vacuumed and mopped",
            ],
          },
          {
            title: "Bathrooms",
            items: [
              "Toilet cleaned and sanitised",
              "Shower and bath cleaned",
              "Vanity and mirror cleaned",
              "Floors mopped",
              "High-touch points wiped",
            ],
          },
          {
            title: "Living areas and bedrooms",
            items: [
              "Surfaces dusted",
              "Floors vacuumed",
              "Beds made if requested",
              "General tidying",
              "Skirting and detail work as needed by package",
            ],
          },
        ],
      },
      {
        title: "Why this service works",
        intro:
          "We focus on the areas that quickly make a home feel messy, used, or hard to stay on top of. That means practical cleaning that helps your space look better and function better between visits.",
        items: [
          "Flexible weekly, fortnightly, monthly, or once-off support",
          "Easy add-ons for higher-detail work",
          "A practical scope built around how the home is used",
        ],
      },
      {
        title: "Add-ons",
        items: [
          "Oven cleaning",
          "Fridge cleaning",
          "Inside windows",
          "Linen change",
          "Deep clean upgrade",
        ],
      },
    ],
    faqs: [
      "Do I need to be home during the clean?",
      "Can I choose weekly or fortnightly visits?",
      "Do you use your own products?",
      "Can I customise the areas cleaned?",
    ],
    finalCtaTitle: "Need reliable help around the house?",
    finalCtaBody:
      "Choose a one-off reset or recurring support and we will tailor the scope around your home and priorities.",
    finalPrimaryCta: "Get a Free Quote",
    finalSecondaryCta: "Book House Cleaning",
  },
  {
    slug: "end-of-lease-cleaning",
    label: "End of Lease Cleaning",
    category: "Residential services",
    metaTitle: "End of Lease Cleaning in Australia | Move-Out Cleaning",
    metaDescription:
      "Detailed end of lease cleaning for tenants, landlords and property managers. Inspection-focused cleaning with optional carpet, oven and window add-ons.",
    heroTitle: "Move out with less stress and a cleaner handover",
    heroText:
      "Our end of lease cleaning service is designed around the areas most commonly checked during final inspections, helping tenants, landlords, and property managers prepare properties for handover.",
    primaryCta: "Get an End of Lease Quote",
    secondaryCta: "Call About My Move-Out Clean",
    primaryKeywords: ["end of lease cleaning [city]"],
    secondaryKeywords: [
      "move out cleaning [city]",
      "vacate cleaning [city]",
      "bond cleaning [city]",
    ],
    sections: [
      {
        title: "Best for",
        items: [
          "Tenants preparing for inspection",
          "Landlords between occupants",
          "Property managers",
          "Sellers preparing a property for presentation",
        ],
      },
      {
        title: "What is typically included",
        items: [
          "Deep kitchen clean",
          "Oven exterior and interior option",
          "Rangehood exterior",
          "Bathroom detailing",
          "Wall spot marks where practical",
          "Skirting boards",
          "Cupboards and wardrobes",
          "Floors vacuumed and mopped",
          "Cobweb removal",
          "Internal windows optional",
          "Carpet steam cleaning optional",
        ],
      },
      {
        title: "Important note",
        note: "In some states and agencies, final inspection expectations can vary. We recommend sharing your property manager checklist so we can align the clean to your handover requirements.",
      },
      {
        title: "Why clients book this service",
        items: [
          "Save time during a hectic move",
          "Focus on inspection-critical areas",
          "Add carpet, oven, and window services",
          "Reduce last-minute cleaning pressure",
        ],
      },
    ],
    faqs: [
      "Do you follow property manager checklists?",
      "Can carpet steam cleaning be added?",
      "How long does end of lease cleaning take?",
      "Can you clean after furniture has been moved out?",
    ],
    finalCtaTitle: "Need a cleaner handover before inspection day?",
    finalCtaBody:
      "Send through the property details and any checklist requirements and we will tailor the clean around handover expectations.",
    finalPrimaryCta: "Request a Quote",
    finalSecondaryCta: "Send My Property Checklist",
  },
  {
    slug: "commercial-cleaning",
    label: "Commercial Cleaning",
    category: "Commercial services",
    metaTitle: "Commercial Cleaning in Australia | Tailored Business Cleaning",
    metaDescription:
      "Tailored commercial cleaning for offices, retail, strata, healthcare, childcare, gyms and more. Flexible scheduling and custom site plans available.",
    heroTitle:
      "Commercial cleaning that supports presentation, hygiene, and daily operations",
    heroText:
      "We provide tailored cleaning solutions for workplaces and commercial sites, with scopes built around foot traffic, risk level, opening hours, and site priorities.",
    primaryCta: "Request a Site Inspection",
    secondaryCta: "Get a Commercial Quote",
    sections: [
      {
        title: "Suitable sites",
        items: [
          "Offices",
          "Retail stores",
          "Medical clinics",
          "Childcare centres",
          "Gyms",
          "Warehouses",
          "Strata properties",
          "Hospitality venues",
        ],
      },
      {
        title: "What businesses care about",
        items: [
          "Consistency",
          "Low disruption",
          "Trained cleaners",
          "Clear communication",
          "Checklists and accountability",
          "Flexible morning, evening, or after-hours service",
        ],
      },
      {
        title: "Service options",
        items: [
          "Daily cleaning",
          "Weekly cleaning",
          "After-hours cleaning",
          "Day porter services",
          "Consumable restocking",
          "Washroom checks",
          "Periodic deep cleans",
        ],
      },
    ],
    finalCtaTitle: "Need a cleaning scope built around your business?",
    finalCtaBody:
      "Book a site inspection or request a commercial quote and we will map the service around your opening hours, traffic, and standards.",
    finalPrimaryCta: "Request a Site Inspection",
    finalSecondaryCta: "Get a Commercial Quote",
  },
  {
    slug: "office-cleaning",
    label: "Office Cleaning",
    category: "Commercial services",
    metaTitle: "Office Cleaning in Australia | Reliable Workplace Cleaning",
    metaDescription:
      "Professional office cleaning tailored to your business hours, team size and workspace needs. After-hours and routine cleaning plans available.",
    heroTitle:
      "Keep your workplace clean, presentable, and ready for every workday",
    heroText:
      "From reception areas to desks, kitchens, washrooms, and meeting rooms, our office cleaning service helps create a healthier and more professional environment.",
    primaryCta: "Book a Site Visit",
    secondaryCta: "Request Office Cleaning Quote",
    primaryKeywords: ["office cleaning [city]"],
    secondaryKeywords: [
      "office cleaners [city]",
      "workplace cleaning [city]",
      "commercial office cleaning [city]",
    ],
    sections: [
      {
        title: "Who it is for",
        items: [
          "Shared offices and coworking spaces",
          "Professional services teams",
          "Studios and small workplaces",
          "Businesses that need a presentable front-of-house",
        ],
      },
      {
        title: "What is included",
        items: [
          "Desk and surface wipe-down",
          "Kitchenette cleaning",
          "Washroom sanitising",
          "Floor vacuuming and mopping",
          "Bin removal and liner replacement",
          "Touchpoint disinfection",
          "Reception and meeting room presentation",
        ],
      },
      {
        title: "Cleaning schedules",
        items: [
          "Daily",
          "2-3 times per week",
          "Weekly",
          "After-hours only",
          "Weekend service",
        ],
      },
      {
        title: "Why choose this service",
        items: [
          "Flexible scheduling around office hours",
          "Clear checklists and presentation-focused detail",
          "Consistent workplace hygiene and reduced disruption",
        ],
      },
    ],
    faqs: [
      "Can office cleaning be done after hours?",
      "Can you tailor the scope to different departments or rooms?",
      "Do you handle kitchens, washrooms, and reception areas?",
      "Can we arrange recurring service?",
    ],
    finalCtaTitle: "Need a workplace cleaning plan that fits your hours?",
    finalCtaBody:
      "Tell us about the site, schedule, and foot traffic and we will tailor a practical office cleaning scope.",
    finalPrimaryCta: "Book a Site Visit",
    finalSecondaryCta: "Request Office Cleaning Quote",
  },
  {
    slug: "airbnb-cleaning",
    label: "Airbnb Cleaning",
    category: "Specialised services",
    metaTitle: "Airbnb Cleaning in Australia | Short-Stay Turnover Cleaning",
    metaDescription:
      "Reliable Airbnb and short-stay cleaning with guest-ready turnovers, linen changes, restocking support, and fast scheduling between bookings.",
    heroTitle: "Fast, guest-ready cleaning between every stay",
    heroText:
      "We help hosts maintain a clean, welcoming, review-ready property with detailed short-stay turnovers and reliable scheduling.",
    primaryCta: "Get My Airbnb Quote",
    secondaryCta: "Ask About Turnover Scheduling",
    primaryKeywords: ["airbnb cleaning [city]"],
    secondaryKeywords: [
      "short stay cleaning [city]",
      "holiday rental cleaning [city]",
      "turnover cleaning [city]",
    ],
    sections: [
      {
        title: "What hosts need",
        items: [
          "Fast turnaround",
          "Consistency",
          "Linen changes",
          "Amenity checks",
          "Damage and issue reporting",
          "Guest-ready presentation",
        ],
      },
      {
        title: "Typical inclusions",
        items: [
          "Bathroom reset",
          "Kitchen reset",
          "Floors vacuumed and mopped",
          "Bed making and linen change",
          "Towels replaced",
          "Consumable restocking if supplied",
          "Visual issue reporting",
        ],
      },
      {
        title: "Add-ons",
        items: [
          "Deep cleans",
          "Inside fridge",
          "Balcony tidy",
          "Extra linen service",
          "Same-day turnover support",
        ],
      },
    ],
    finalCtaTitle: "Need a reliable short-stay turnover partner?",
    finalCtaBody:
      "Keep every stay guest-ready with turnover cleaning built around booking windows, linen changes, and presentation checks.",
    finalPrimaryCta: "Get My Airbnb Quote",
    finalSecondaryCta: "Ask About Turnover Scheduling",
  },
  {
    slug: "ndis-cleaning",
    label: "NDIS Cleaning",
    category: "Support services",
    metaTitle: "NDIS Cleaning in Australia | Household Support Services",
    metaDescription:
      "Respectful household cleaning and domestic assistance tailored to participant needs, routines, and home environments. Contact us for a tailored service plan.",
    heroTitle:
      "Respectful household support that helps make everyday living easier",
    heroText:
      "We provide cleaning and household assistance tailored to participant routines, preferences, and support needs, with a strong focus on consistency, dignity, and communication.",
    primaryCta: "Discuss Your Support Needs",
    secondaryCta: "Request a Tailored Quote",
    primaryKeywords: ["ndis cleaning [city]"],
    secondaryKeywords: [
      "disability cleaning services [city]",
      "household assistance [city]",
      "domestic support [city]",
    ],
    sections: [
      {
        title: "Important wording note",
        intro:
          "We work with participants, families, support coordinators, and plan managers. Services are tailored to participant needs and plan arrangements, and we encourage clients to discuss their situation and service requirements directly.",
      },
      {
        title: "Who we support",
        items: [
          "Self-managed participants",
          "Plan-managed participants",
          "Families and carers",
          "Support coordinators",
          "SIL and supported living environments",
        ],
      },
      {
        title: "Support tasks may include",
        items: [
          "General cleaning",
          "Laundry support",
          "Bed linen changes",
          "Kitchen tidy and wipe-down",
          "Bathroom cleaning",
          "Vacuuming and mopping",
          "Household organisation support",
          "Routine domestic assistance within agreed scope",
        ],
      },
      {
        title: "Why this page converts",
        items: [
          "Respectful language",
          "Personalisation",
          "Clear boundaries",
          "Easy enquiry path",
        ],
      },
    ],
    faqs: [
      "Do you work with self-managed or plan-managed participants?",
      "Can cleaning be tailored to participant preferences?",
      "Can I arrange a recurring household support schedule?",
      "Do you work with support coordinators and families?",
    ],
    finalCtaTitle: "Need a respectful household support plan?",
    finalCtaBody:
      "Tell us about the support needs, preferred routine, and home environment and we will tailor a practical service plan.",
    finalPrimaryCta: "Discuss Your Support Needs",
    finalSecondaryCta: "Request a Tailored Quote",
  },
  {
    slug: "strata-cleaning",
    label: "Strata Cleaning",
    category: "Commercial services",
    metaTitle:
      "Strata Cleaning in Australia | Common Area and Body Corporate Cleaning",
    metaDescription:
      "Reliable strata cleaning for apartment buildings, townhouse complexes and managed properties. Common areas, foyers, lifts, stairwells, bin rooms and more.",
    heroTitle:
      "Consistent common-area cleaning for buildings that need to stay presentable",
    heroText:
      "We help strata managers and body corporate clients keep shared spaces clean, safe, and well maintained with reliable recurring schedules and clear communication.",
    primaryCta: "Request a Strata Site Visit",
    secondaryCta: "Get a Strata Cleaning Quote",
    sections: [
      {
        title: "Typical areas",
        items: [
          "Entries and foyers",
          "Lifts",
          "Hallways",
          "Stairwells",
          "Bin rooms",
          "Car park touchpoints",
          "Glass doors",
          "Mail areas",
          "Shared amenities",
        ],
      },
      {
        title: "Key selling points",
        items: [
          "Routine schedules",
          "Site checklists",
          "Cleaner accountability",
          "Resident-friendly service",
          "Coordination with strata managers",
        ],
      },
    ],
    finalCtaTitle: "Need dependable common-area cleaning for your building?",
    finalCtaBody:
      "Book a site visit and we will build a recurring strata cleaning scope around the property layout and resident traffic.",
    finalPrimaryCta: "Request a Strata Site Visit",
    finalSecondaryCta: "Get a Strata Cleaning Quote",
  },
  {
    slug: "medical-cleaning",
    label: "Medical Cleaning",
    category: "Commercial services",
    metaTitle:
      "Medical Cleaning in Australia | Clinics, Allied Health and Healthcare Spaces",
    metaDescription:
      "Professional medical and allied health cleaning tailored to clinics, consulting rooms and patient-facing spaces with attention to hygiene and risk-sensitive protocols.",
    heroTitle:
      "Cleaning for healthcare environments where hygiene standards matter",
    heroText:
      "We support clinics and allied health practices with cleaning programs tailored to patient-facing environments, high-touch areas, and daily operational requirements.",
    primaryCta: "Book a Site Assessment",
    secondaryCta: "Request Medical Cleaning Quote",
    sections: [
      {
        title: "Important wording guidance",
        intro:
          "We describe medical cleaning as aligned to site protocols, risk-aware cleaning, trained staff, and appropriate disinfection processes. We avoid overclaiming hospital-grade protocols or clinical accreditation unless they are formally supported.",
      },
      {
        title: "Suitable facilities",
        items: [
          "GP clinics",
          "Dental clinics",
          "Physio practices",
          "Allied health rooms",
          "Day treatment spaces",
          "Specialist consulting suites",
        ],
      },
      {
        title: "Operational priorities",
        items: [
          "High-touch areas",
          "Patient-facing spaces",
          "Scheduling around patient flow",
          "Quality assurance and clear communication",
        ],
      },
    ],
    finalCtaTitle: "Need risk-aware cleaning for a patient-facing site?",
    finalCtaBody:
      "Tell us about the clinic, patient flow, and site protocols and we will tailor a suitable cleaning scope.",
    finalPrimaryCta: "Book a Site Assessment",
    finalSecondaryCta: "Request Medical Cleaning Quote",
  },
  {
    slug: "childcare-cleaning",
    label: "Childcare Cleaning",
    category: "Commercial services",
    metaTitle:
      "Childcare Cleaning in Australia | Early Learning and Daycare Cleaning",
    metaDescription:
      "Reliable childcare cleaning for early learning centres and daycare facilities, with attention to hygiene, touchpoints, bathrooms, floors and shared spaces.",
    heroTitle:
      "Cleaning for childcare environments that need extra care and consistency",
    heroText:
      "We help early learning and daycare centres maintain cleaner, safer, and more presentable spaces for children, staff, and families.",
    primaryCta: "Get a Childcare Cleaning Quote",
    secondaryCta: "Arrange a Site Visit",
    sections: [
      {
        title: "What to highlight",
        items: [
          "High-touch surfaces",
          "Bathrooms and nappy areas within agreed scope",
          "Floors and shared play areas",
          "Entry points and parent-facing spaces",
          "Flexible after-hours scheduling",
        ],
      },
    ],
    finalCtaTitle: "Need childcare cleaning that works around the centre day?",
    finalCtaBody:
      "Arrange a site visit and we will tailor the scope around room use, handover timing, and agreed hygiene priorities.",
    finalPrimaryCta: "Get a Childcare Cleaning Quote",
    finalSecondaryCta: "Arrange a Site Visit",
  },
  {
    slug: "builders-cleaning",
    label: "Builders Cleaning",
    category: "Commercial services",
    metaTitle:
      "Builders Cleaning in Australia | Post-Construction and Handover Cleaning",
    metaDescription:
      "Detailed post-construction and builders cleaning for new builds, renovations, fit-outs and handovers. Dust removal, surface detailing and presentation-ready finishes.",
    heroTitle: "Post-construction cleaning that gets sites ready for handover",
    heroText:
      "We help builders, renovators, and property teams remove dust, debris, and residue so the finished space looks ready for inspection, occupancy, or presentation.",
    primaryCta: "Request Builders Cleaning Quote",
    secondaryCta: "Book a Site Inspection",
    sections: [
      {
        title: "Best suited to",
        items: [
          "New builds",
          "Renovations",
          "Fit-outs",
          "Practical completion cleans",
          "Presentation and handover preparation",
        ],
      },
      {
        title: "What clients care about",
        items: [
          "Dust removal",
          "Surface detailing",
          "Glass and joinery presentation",
          "Low-disruption coordination",
          "A space that looks ready for handover",
        ],
      },
    ],
    finalCtaTitle: "Need the site presentation-ready before handover?",
    finalCtaBody:
      "Book a site inspection and we will scope the clean around the stage of works, finishes, and handover timeline.",
    finalPrimaryCta: "Request Builders Cleaning Quote",
    finalSecondaryCta: "Book a Site Inspection",
  },
];

export const industriesPage = {
  metaTitle:
    "Cleaning for Offices, Clinics, Childcare, Strata and More | xyzclean",
  metaDescription:
    "Explore cleaning solutions by industry, including offices, medical clinics, childcare, strata, retail, hospitality and short-stay accommodation.",
  heroTitle: "Industries We Serve",
  heroText:
    "Every site runs differently. Our industry pages help clients understand how service adapts to traffic patterns, risk level, presentation standards, and day-to-day operations.",
  cards: [
    "Offices",
    "Medical and Allied Health",
    "Childcare and Education",
    "Strata and Body Corporate",
    "Retail",
    "Hospitality",
    "Fitness and Wellness",
    "Short-Stay Accommodation",
    "Construction and Handover",
  ],
};

export const locationsPage = {
  metaTitle: "Service Areas | Local Cleaning Services Across Australia",
  metaDescription:
    "Explore city and suburb service areas, priority metros, and the property types we support across Australia.",
  heroTitle: "Locations We Service",
  heroText:
    "Location pages help clients understand where service is available and how scopes are tailored to local homes, offices, managed properties, and commercial sites.",
  cities: [
    "Perth",
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Adelaide",
    "Canberra",
    "Gold Coast",
    "Darwin",
  ],
  structure: ["/locations", "/locations/[city]", "/locations/[city]/[suburb]"],
  sectionStructure: [
    "Hero with suburb or city keyword",
    "Services offered in that area",
    "Why locals book this service",
    "Property types served",
    "Local CTA",
    "FAQs",
    "Nearby areas links",
  ],
};

export const aboutPage = {
  metaTitle: "About xyzclean | Professional Cleaning Team",
  metaDescription:
    "Learn about xyzclean, our service values, and how we help homes, businesses, and managed properties stay cleaner and better maintained.",
  heroTitle: "A cleaning company built on reliability, detail, and service",
  heroText:
    "We help households, businesses, and property managers keep spaces cleaner, more presentable, and easier to maintain with dependable service and clear communication.",
  sections: [
    {
      title: "Our story",
      intro:
        "xyzclean is designed around practical service. We focus on what makes cleaning easier to manage for the client: clear scope, reliable communication, and strong follow-through.",
    },
    {
      title: "What we stand for",
      items: [
        "Reliable communication",
        "Respect for client spaces",
        "Strong attention to detail",
        "Flexible service options",
        "Practical problem-solving",
      ],
    },
    {
      title: "How we work",
      items: [
        "Clear quote and scope",
        "Service tailored to the property",
        "Cleaner accountability and checklists",
        "Follow-up support when needed",
      ],
    },
    {
      title: "Who we serve",
      items: [
        "Households and apartments",
        "Rental and managed properties",
        "Offices and commercial sites",
        "Property managers and strata clients",
        "Short-stay and specialised environments",
      ],
    },
    {
      title: "Why quality control matters",
      intro:
        "Clients stay with cleaning companies that make service easy to trust. That means consistent scopes, clear expectations, and visible attention to detail in the areas that matter most.",
    },
  ],
};

export const faqGroups = [
  {
    title: "Booking and scheduling",
    items: [
      "How do I request a quote?",
      "Do you offer weekly or fortnightly home cleaning?",
      "Can you clean outside normal business hours?",
    ],
  },
  {
    title: "What is included",
    items: [
      "Can I customise my cleaning service?",
      "What add-ons are available for end of lease cleaning?",
      "What information do you need to price a quote?",
    ],
  },
  {
    title: "Products and equipment",
    items: [
      "Do you bring your own cleaning supplies?",
      "Can you tailor cleaning around site requirements or sensitive environments?",
    ],
  },
  {
    title: "Residential cleaning",
    items: [
      "Can I arrange one-off or recurring home cleaning?",
      "Can I customise the areas cleaned?",
      "Do I need to be home during the clean?",
    ],
  },
  {
    title: "Commercial cleaning",
    items: [
      "Can office and commercial cleaning be done after hours?",
      "Can you tailor the scope for different rooms or departments?",
      "Do you offer recurring service plans for businesses?",
    ],
  },
  {
    title: "End of lease cleaning",
    items: [
      "Do you follow property manager checklists?",
      "Can carpet steam cleaning be added?",
      "Can you clean once the property is fully vacant?",
    ],
  },
  {
    title: "NDIS cleaning",
    items: [
      "Do you work with self-managed and plan-managed participants?",
      "Can cleaning be tailored to participant preferences?",
      "Can I arrange a recurring household support schedule?",
      "Do you work with support coordinators and families?",
    ],
  },
  {
    title: "Payments and cancellations",
    items: [
      "What information do you need to confirm my quote?",
      "Can I make changes to a booking after enquiring?",
      "How do cancellations or schedule changes work?",
    ],
  },
];

export const contactPage = {
  metaTitle: "Contact xyzclean | Request a Cleaning Quote",
  metaDescription:
    "Contact our team to request a residential, commercial or specialised cleaning quote. Fast response and tailored service options available.",
  heroTitle: "Tell us what you need and we'll send a tailored quote",
  heroText:
    "Whether you need house cleaning, office cleaning, end of lease, Airbnb, strata, or specialised cleaning, our team can help.",
  detailPoints: [
    `Phone: ${contactDetails.phone}`,
    `Email: ${contactDetails.email}`,
    `Service hours: ${contactDetails.hours}`,
    `Service area: ${contactDetails.area}`,
  ],
};

export const quoteServiceOptions = [
  "House Cleaning",
  "End of Lease Cleaning",
  "Office Cleaning",
  "Commercial Cleaning",
  "Airbnb Cleaning",
  "NDIS Cleaning",
  "Strata Cleaning",
  "Medical Cleaning",
  "Childcare Cleaning",
  "Builders Cleaning",
  "Other",
];

export const propertyTypeOptions = [
  "House",
  "Apartment",
  "Office",
  "Retail",
  "Medical Clinic",
  "Childcare Centre",
  "Strata Building",
  "Construction Site",
  "Other",
];

export const frequencyOptions = [
  "Once-Off",
  "Weekly",
  "Fortnightly",
  "Monthly",
  "Custom Schedule",
];

export const addOnOptions = [
  "Carpet Steam Cleaning",
  "Oven Cleaning",
  "Window Cleaning",
  "Fridge Cleaning",
  "Linen Change",
  "Consumable Restocking",
  "Deep Clean Upgrade",
];

export const generalEnquirySubjects = [
  "New cleaning enquiry",
  "Service question",
  "Commercial site visit",
  "Residential booking",
  "Other",
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
