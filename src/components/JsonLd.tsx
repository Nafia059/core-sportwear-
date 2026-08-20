interface JsonLdProps {
  type?: string;
  name: string;
  description: string;
  url?: string;
  image?: string;
}

export default function JsonLd({
  type = "Organization",
  name,
  description,
  url = "https://coresportswears.com",
  image = "https://coresportswears.com/og-image.jpg",
}: JsonLdProps) {
  const jsonLd =
    type === "Organization"
      ? {
          "@context": "https://schema.org",
          "@type": "Organization",
          name,
          description,
          url,
          image,
          logo: "https://coresportswears.com/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sadra Badra Town, Daska Road",
            addressLocality: "Sialkot",
            postalCode: "51310",
            addressCountry: "PK",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+92-339-8624992",
            contactType: "sales",
            email: "coresportswears@gmail.com",
          },
          sameAs: [
            "https://www.facebook.com/coresportswear/",
            "https://www.instagram.com/core_sportswears/",
            "https://www.linkedin.com/in/abid-nisar-39270429",
            "https://coresportswears.trustpass.alibaba.com/",
          ],
        }
      : type === "WebSite"
        ? {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name,
            url,
            potentialAction: {
              "@type": "SearchAction",
              target: `${url}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }
        : {
            "@context": "https://schema.org",
            "@type": type as string,
            name,
            description,
            url,
          };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
