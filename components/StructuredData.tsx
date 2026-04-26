export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "name": "The Quissett Landing",
    "description":
      "A three-story New England home in the Quissett Harbor area of Woods Hole, Falmouth MA. Four bedrooms, sleeps 12, with a legendary third-floor bunk room. Book direct and skip the platform fees.",
    "url": "https://thequissettlanding.com",
    "telephone": "+16173475660",
    "email": "thequissettlanding@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "245 Woods Hole Road",
      "addressLocality": "Falmouth",
      "addressRegion": "MA",
      "postalCode": "02540",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.5256,
      "longitude": -70.6673,
    },
    "image": [
      "https://thequissettlanding.com/images/hero.jpg",
      "https://thequissettlanding.com/images/outdoor.jpg",
      "https://thequissettlanding.com/images/bunkroom.jpg",
    ],
    "numberOfRooms": 4,
    "occupancy": {
      "@type": "QuantitativeValue",
      "maxValue": 12,
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Kitchen", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Washer/Dryer", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Outdoor dining area", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Deck", "value": true },
    ],
    "checkinTime": "16:00",
    "checkoutTime": "10:00",
    "petsAllowed": false,
    "containsPlace": [
      { "@type": "Bedroom", "name": "King Bedroom", "numberOfBeds": 1, "bed": { "@type": "BedDetails", "typeOfBed": "King" } },
      { "@type": "Bedroom", "name": "Queen Bedroom", "numberOfBeds": 1, "bed": { "@type": "BedDetails", "typeOfBed": "Queen" } },
      { "@type": "Bedroom", "name": "Queen Bedroom", "numberOfBeds": 1, "bed": { "@type": "BedDetails", "typeOfBed": "Queen" } },
      { "@type": "Bedroom", "name": "Bunk Room", "numberOfBeds": 5, "bed": { "@type": "BedDetails", "typeOfBed": "Bunk bed" } },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "2",
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Kimberly G." },
        "reviewBody":
          "This house is absolutely amazing from top to bottom — we felt completely at home. The original wood floors are just incredible. My only complaint is that we didn't book a long enough stay.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Mike" },
        "reviewBody":
          "Had a great stay with extended family. Perfect for both adults and kids. The third floor bunk room was a highlight.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
