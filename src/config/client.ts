export const client = {
  // Business Details
  name: "Best Garden Design",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Chichester.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07772 623919",
  email: "",
  website: "",

  // Location
  address: "Chichester",
  city: "Chichester",
  county: "",
  postcode: "",
  basedIn: "Chichester",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "6",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Billy English", rating: 5, text: "I recently had the pleasure of working with this landscaping company, and I couldn't be happier with the results! From the initial consultation to the final touches, their team was professional, attentive, and truly passionate about their work. They took the time to understand my vision and offered valuable suggestions that enhanced the overall design.  I highly recommend this landscaping company to anyone looking to transform their outdoor space. Their expertise and dedication to customer satisfaction made the entire process enjoyable, and I look forward to enjoying my beautiful garden for years to come!", date: "a year ago" },
    { name: "Angela Wormald", rating: 5, text: "Chris gave us three designs, including 3D plans, for our back garden. Each of them incorporated the aspects that we wanted to include such as no lawn, a herb garden, a vegetable garden, and a garden that could be easily accessed with limited mobility. It was hard to choose but we settled on a design which was a blend of two of the designs. Surprisingly, we had more space for planting than we had before.  Chris was professional, attentive, and supportive throughout the build process. We couldn’t be more pleased with the final outcome which surpassed our expectations. We thoroughly recommend Best Garden Design.", date: "a year ago" },
    { name: "Peter Smith", rating: 5, text: "From first point of contact to completion Chris was a pleasure to deal with. Our garden was very much a blank canvas. In total we had three on site meetings  where initially we gave Chris our “wants”.  As he is so knowledgeable he was able to point out any problems with our ideas producing three stunning 3D designs. At the last meeting we talked through our ideas  and  a final 3D  plan was produced . Throughout the process Chris was professional, punctual, patient and approachable. I have no hesitation in recommending Best Garden design.", date: "3 years ago" },
    { name: "Laverne Inman", rating: 5, text: "Our garden is definitely a work in progress chris had his work cut out as  we gave him a very vague idea of what we would like Chris came back to us with 3 very different designs all of which we loved it was very hard to decide we can't wait to see the design we chose  come to life in the coming months If you are looking for a garden designer with fantastic ideas and with clear and transparent very fairly priced then look no further than Chris", date: "4 years ago" },
    { name: "David Jones", rating: 5, text: "Excellent design reflected Chris’s readiness to listen to my ideas and translate them into a stunning design utilising his creative flair and vision. All this was brought to a conclusion by the equally professional work of Bosham Landscapes. I am delighted with the end product.", date: "6 years ago" },
    { name: "Talie Wood", rating: 5, text: "Chris was great to work with - happy to accomodate my own ideas while pushing the boundaries of my thinking. Can highly recommend him.", date: "6 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Best Garden Design | Landscaper in Chichester",
    description: "Professional landscaper in Chichester. 5.0-star rated on Google. Call for a free quote.",
  },
};
