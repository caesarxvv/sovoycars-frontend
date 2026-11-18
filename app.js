/* ========================================
   SOVOYCARS - Vanilla JS Application
   Navigation, mobile menu, forms, FAQ accordion, fleet filters
   ======================================== */

// ========================================
// DATA IMPORTS (inlined from data.js)
// ========================================

const site = {
  name: "Sovoycars",
  phone: "+212 614 65 65 65",
  phoneHref: "tel:+212****6565",
  tangierPhone: "+212 656 14 14 14",
  tangierPhoneHref: "tel:+212****1414",
  email: "contact@sovoy.co.ma",
  whatsapp: "https://wa.me/message/C3GK5PLGSPXHM1",
  copyright: "©️ 2008 – 2026 Sovoycars. All Rights Reserved."
};

const pickupLocations = [
  "Casablanca Airport Mohammed V (CMN)",
  "Casablanca Downtown",
  "Marrakesh Airport (RAK)",
  "Rabat Airport (RBA)",
  "Rabat Downtown",
  "Tangier–Ibn Battouta Airport (TNG)",
  "Tangier Downtown",
  "Agadir Airport (AGA)"
];

const reviews = [
  { quote: "We had a very good experience with SOVOY CARS TEAM , they are 24 hours available and whenever we require car they arrange for us for every trip of us", author: "RJ HOLDINGS", meta: "3 years ago" },
  { quote: "I took my car in Rabat and it worked well. They are very professional and the price are the cheaper i found in Morocco.", author: "Mattia Biazzi", meta: "3 years ago" },
  { quote: "The service ,the staff were very co-operative ,time to time they were aksing if anything required we are at your service and definatly I will recommend ti take rentals from savoy cars ,their services are awsome", author: "Shehzad Gadit", meta: "3 years ago" },
  { quote: "Everything was amazing and all the staff the guys and girl are very professional", author: "Oumayma Ghouraf", meta: "3 years ago" },
  { quote: "Excelent service and very good value-for-money-ratio. My customer relation with Sovoy Cars stared in 2020 and since, I am highly satisfied.", author: "Mohamed Elmahdi", meta: "3 years ago" }
];

const locations = [
  { slug: "casablanca-airport", title: "Casablanca Airport Mohammed V (CMN)", shortTitle: "Casablanca Mohammed 5 Airport", description: "Rent a car at Casablanca Airport Mohammed V (CMN) direct from Sovoycars. Collect at the terminal, free cancellation, no hidden fees, 24/7 local support." },
  { slug: "casablanca", title: "Casablanca Downtown", shortTitle: "Casablanca City", description: "Find the perfect rental car for your Casablanca trip at unbeatable prices. Easy booking, no hidden fees, and 24/7 support. Drive more, save more with Sovoy." },
  { slug: "marrakech-airport", title: "Marrakesh Airport (RAK)", shortTitle: "Marrakech Airport", description: "Rent a car at Marrakech Menara Airport (RAK) direct from Sovoycars. 15 minutes from the medina, free cancellation, no hidden fees and 24/7 local support." },
  { slug: "rabat-airport", title: "Rabat Airport (RBA)", shortTitle: "Rabat airport", description: "Rent a car at Rabat–Salé Airport (RBA) with Sovoycars. Airport pick-up 8 km from the capital, free cancellation, no hidden fees and 24/7 local support." },
  { slug: "rabat-city", title: "Rabat Downtown", shortTitle: "Rabat City", description: "Car rental in central Rabat with Sovoycars. City pick-up with no airport surcharge, ideal for Al Boraq train arrivals. No hidden fees, 24/7 support." },
  { slug: "tanger-airport", title: "Tangier–Ibn Battouta Airport (TNG)", shortTitle: "Tanger airport", description: "Book your car rental at Tangier Airport (TNG) with Sovoycars. New cars, airport pickup, full insurance options and 24/7 support for car rental in Tangier." },
  { slug: "tangier-city", title: "Tangier Downtown", shortTitle: "Tangier City", description: "Car rental in central Tangier with Sovoycars. City pick-up for ferry and Al Boraq train arrivals, no airport surcharge, no hidden fees, 24/7 support." },
  { slug: "agadir-airport", title: "Agadir Airport (AGA)", shortTitle: "Agadir Airport", description: "Rent a car at Agadir Al Massira Airport (AGA) with Sovoycars. Airport pick-up 20 km from the city, free cancellation, no hidden fees and 24/7 local support." }
];

const auto = "Automatic";
const manual = "Manual";

const cars = [
  { 
    name: "Dacia Logan", 
    category: "Economy", 
    fuel: "Gasoline", 
    gearbox: manual, 
    doors: 5, 
    people: 5, 
    bags: "2+1", 
    ac: true, 
    shape: "sedan",
    pricePerDay: 200,
    currency: "MAD",
    image: "images/cars/dacia-logan.jpg",
    description: "Reliable and economical sedan perfect for city driving and long trips. Great fuel efficiency and low rental cost.",
    shortDescription: "Economical sedan with great fuel efficiency"
  },
  { 
    name: "Range Rover", 
    category: "SUV", 
    fuel: "Diesel", 
    gearbox: auto, 
    doors: 5, 
    people: 5, 
    bags: "4+2", 
    ac: true, 
    shape: "suv",
    pricePerDay: 600,
    currency: "MAD",
    image: "images/cars/range-rover.webp",
    description: "Iconic luxury SUV with exceptional off-road capability and premium interior. Perfect for both city and desert adventures.",
    shortDescription: "Iconic luxury SUV with off-road capability"
  },
  { 
    name: "Mercedes", 
    category: "Luxury", 
    fuel: "Diesel", 
    gearbox: auto, 
    doors: 5, 
    people: 5, 
    bags: "3+2", 
    ac: true, 
    shape: "sedan",
    pricePerDay: 400,
    currency: "MAD",
    image: "images/cars/mercedes.webp",
    description: "Elegant German engineering with cutting-edge technology and supreme comfort. Ideal for business and leisure travel.",
    shortDescription: "Elegant German luxury sedan"
  },
  { 
    name: "Maybach", 
    category: "Luxury", 
    fuel: "Gasoline", 
    gearbox: auto, 
    doors: 5, 
    people: 5, 
    bags: "4+2", 
    ac: true, 
    shape: "sedan",
    pricePerDay: 1000,
    currency: "MAD",
    image: "images/cars/maybach.webp",
    description: "Ultimate luxury automotive experience. Handcrafted interior, advanced technology, and unparalleled comfort for the discerning traveler.",
    shortDescription: "Ultimate automotive luxury experience"
  },
  { 
    name: "Land Rover Evoque", 
    category: "SUV", 
    fuel: "Diesel", 
    gearbox: auto, 
    doors: 5, 
    people: 5, 
    bags: "4", 
    ac: true, 
    shape: "suv",
    pricePerDay: 550,
    currency: "MAD",
    image: "images/cars/land-rover-evoque.jpg",
    description: "Stylish compact luxury SUV with distinctive design and advanced technology. Perfect for urban exploration.",
    shortDescription: "Stylish compact luxury SUV"
  },
  { 
    name: "Land Rover Sport", 
    category: "Luxury", 
    fuel: "Diesel", 
    gearbox: auto, 
    doors: 5, 
    people: 5, 
    bags: "4+2", 
    ac: true, 
    shape: "suv",
    pricePerDay: 700,
    currency: "MAD",
    image: "images/cars/land-rover-sport.webp",
    description: "Dynamic luxury SUV with powerful performance and refined interior. Combines sportiness with elegance.",
    shortDescription: "Dynamic luxury SUV with powerful performance"
  },
  { 
    name: "Land Rover Velar", 
    category: "Luxury", 
    fuel: "Diesel", 
    gearbox: auto, 
    doors: 5, 
    people: 5, 
    bags: "3+3", 
    ac: true, 
    shape: "suv",
    pricePerDay: 750,
    currency: "MAD",
    image: "images/cars/land-rover-velar.webp",
    description: "Avant-garde design meets refined luxury. Minimalist interior with cutting-edge technology.",
    shortDescription: "Avant-garde design meets refined luxury"
  },
  { 
    name: "Hyundai Sonata Hybrid", 
    category: "Hybrid", 
    fuel: "Gasoline", 
    gearbox: auto, 
    doors: 5, 
    people: 5, 
    bags: "2", 
    ac: true, 
    shape: "sedan",
    pricePerDay: 300,
    currency: "MAD",
    image: "images/cars/hyundai-sonata-hybrid.jpg",
    description: "Efficient hybrid sedan with modern design and advanced safety features. Excellent fuel economy.",
    shortDescription: "Efficient hybrid with modern design"
  },
  { 
    name: "Hyundai Kona Hybrid", 
    category: "Hybrid", 
    fuel: "Gasoline", 
    gearbox: auto, 
    doors: 5, 
    people: 5, 
    bags: "2+2", 
    ac: true, 
    shape: "suv",
    pricePerDay: 280,
    currency: "MAD",
    image: "images/cars/hyundai-kona-hybrid.jpg",
    description: "Compact hybrid SUV with bold design and excellent efficiency. Perfect for city and weekend trips.",
    shortDescription: "Compact hybrid SUV with bold design"
  },
  { 
    name: "Dacia Sandero", 
    category: "Economy", 
    fuel: "Diesel", 
    gearbox: manual, 
    doors: 5, 
    people: 5, 
    bags: "2+1", 
    ac: true, 
    shape: "compact",
    pricePerDay: 180,
    currency: "MAD",
    image: "images/cars/dacia-sandero.jpg",
    description: "Practical and affordable hatchback with surprising space and low running costs.",
    shortDescription: "Affordable hatchback with great space"
  },
  { 
    name: "Hyundai Tucson", 
    category: "SUV", 
    fuel: "Diesel", 
    gearbox: auto, 
    doors: 5, 
    people: 5, 
    bags: "3+2", 
    ac: true, 
    shape: "suv",
    pricePerDay: 350,
    currency: "MAD",
    image: "images/cars/hyundai-tucson.jpg",
    description: "Modern SUV with bold styling, spacious interior, and advanced safety features.",
    shortDescription: "Modern SUV with bold styling"
  },
  { 
    name: "Mercedes Vito", 
    category: "Passenger Van", 
    fuel: "Diesel", 
    gearbox: auto, 
    doors: 5, 
    people: 8, 
    bags: "2", 
    ac: true, 
    shape: "van",
    pricePerDay: 500,
    currency: "MAD",
    image: "images/cars/mercedes-vito.jpg",
    description: "Spacious passenger van for group travel. Comfortable seating and ample luggage space.",
    shortDescription: "Spacious van for group travel"
  }
];

const featuredCars = [cars[0], cars[1], cars[2], cars[0], cars[1], cars[2], cars[0], cars[1], cars[2]];

const fleetCategories = [
  "All", "SUV", "Luxury", "Hybrid", "Economy", "Compact",
  "Compact SUV", "Comfort", "Crossover", "Passenger Van"
];

const faqs = [
  { q: "What documents do I need to rent a car?", a: "Bring your passport or national ID, a valid driving licence held for at least two years, and a credit card in the driver's name for the security deposit. For non-residents an International Driving Permit is recommended alongside the original licence." },
  { q: "What is the minimum age to rent?", a: "The standard minimum age is 21. Drivers under 30 may be subject to a young-driver fee, and some vehicle categories require the driver to be at least 25 or 30. The exact conditions are confirmed before your booking is finalised." },
  { q: "Do I need an International Driving Permit?", a: "An IDP is not always mandatory for short tourist stays, but we strongly recommend carrying one together with your original licence. It makes checks at the airport desk quicker and is required by some insurers." },
  { q: "Is a deposit required?", a: "Yes. A refundable security deposit is blocked on your credit card at pick-up. The amount depends on the vehicle category and is released after the car is returned in the same condition." },
  { q: "Is insurance included?", a: "All rentals include third-party liability and the basic collision cover shown in your quote. You can add full protection, zero-excess cover and roadside assistance at the desk or when booking." },
  { q: "Can I drive to other Moroccan cities?", a: "Yes. Our cars may be driven throughout Morocco. Cross-border travel is not allowed without written permission, and some mountain or desert routes may have restrictions depending on the vehicle." },
  { q: "Can I pick up and drop off at different locations?", a: "Yes. Tick “Different Drop-off Location?” in the booking form and choose the return office. A one-way fee may apply depending on the distance between the two locations." },
  { q: "What are your opening hours, and what about after hours?", a: "Airport desks are open for every arrival and our team is available 24/7 by phone, email and WhatsApp. After-hours pick-ups are arranged in advance and confirmed by our local team." },
  { q: "How do I cancel my booking?", a: "Use “Manage booking” at the top of the page with your email address and reservation number, or contact us. Free cancellation applies up to 48 hours before pick-up on most rates." },
  { q: "How do I reserve a car rental at Casablanca Airport with Sovoy?", a: "Choose Casablanca Airport Mohammed V (CMN) as your pick-up location, select your dates and press START BOOKING. You will receive a confirmation with the meeting point and the local team's phone number." },
  { q: "What documents do I need to rent a car at Mohammed V Airport?", a: "Your passport, driving licence, a credit card for the deposit and your booking confirmation. Non-resident drivers should also bring an International Driving Permit." },
  { q: "Can I pick up my rental car at Casablanca Airport and return it at another location?", a: "Yes. Select a different drop-off office in the booking form. We serve Marrakech, Rabat, Tangier and Agadir, and the one-way fee is shown before you confirm." },
  { q: "What types of vehicles does Sovoy offer at Casablanca Airport?", a: "Economy hatchbacks, compact sedans, SUVs, hybrids, luxury Land Rovers and passenger vans. All vehicles are recent models with air conditioning and are prepared at our airport desk." },
  { q: "What is the minimum age to rent a car at Casablanca Airport?", a: "21 for economy vehicles, with a young-driver surcharge for drivers under 30. SUVs and luxury models require the driver to be at least 25." },
  { q: "How much deposit is required for car rental at Mohammed V Airport?", a: "Deposits start at 3,000 MAD for economy cars and increase with the vehicle category. The amount is blocked on a credit card and released after return." },
  { q: "What insurance is included with Sovoy car rental at Casablanca Airport?", a: "Third-party liability and basic collision damage cover are included. Full protection with a reduced excess can be added to your reservation." },
  { q: "What is Sovoy's fuel policy for Casablanca Airport rentals?", a: "Cars are supplied with a full tank and should be returned full. If you prefer, we can arrange a pre-paid fuel option so you can return the car at any level." },
  { q: "Are there mileage restrictions on Sovoy rentals?", a: "Most rentals include unlimited mileage within Morocco. A fair-use limit may apply to long-term and luxury rentals, and it is always stated in your confirmation." },
  { q: "Do you offer automatic transmission cars at Mohammed V Airport?", a: "Yes. We keep automatic models across economy, SUV, hybrid and luxury categories. Filter the fleet by category and look for “Automatic” in the specifications." },
  { q: "Where is Sovoy's desk located at Casablanca Airport?", a: "Our representative meets you in the arrivals hall of Terminal 1 or 2, next to the main exit. The exact meeting point and a WhatsApp contact are sent with your confirmation." },
  { q: "Can I add an additional driver to my rental?", a: "Yes. Additional drivers must present a valid licence at pick-up and be added to the contract. A small daily fee may apply." },
  { q: "What happens if I return my car late?", a: "Contact us as soon as you know you will be late. We allow a short grace period, after which an extra day may be charged. Returning early does not normally reduce the price." },
  { q: "Can I drive my Sovoy rental car outside Morocco?", a: "No. Cross-border travel requires written authorisation and additional insurance, and is not available on standard rentals. The car must remain in Morocco." },
  { q: "Do you provide child car seats for families?", a: "Yes. Baby seats, child seats and booster cushions can be reserved in advance. Tell us the child's age and weight when booking so we fit the correct seat." },
  { q: "What should I do if I have an accident in my rental car?", a: "Make sure everyone is safe, call the local police and then contact our 24/7 assistance line. Do not move the vehicles until the police have attended, and complete the accident report with the other driver." },
  { q: "Can I modify my booking after confirmation?", a: "Yes, subject to availability. Use Manage booking or contact us with your reservation number. Changes to dates, vehicle or drop-off may change the price." },
  { q: "What payment methods does Sovoy accept?", a: "Visa, Mastercard and American Express credit cards, plus bank transfer for corporate bookings. A credit card in the main driver's name is required for the deposit." },
  { q: "Is GPS navigation available with Sovoy rentals?", a: "Yes. A GPS unit can be added to your booking, and most cars support smartphone navigation through Apple CarPlay or Android Auto." },
  { q: "Is an International Driving Permit (IDP) required to rent a car in Morocco?", a: "It is not required for every nationality on a short visit, but it is recommended. Your original licence must be valid and written in Latin characters or accompanied by an IDP." },
  { q: "What are the age requirements for renting a car in Morocco?", a: "The legal minimum is generally 21, with higher minimums for larger vehicles. Drivers under 30 usually pay a young-driver fee, and some insurers require drivers to be 25 or older." },
  { q: "Is it necessary to have car insurance when renting a car in Morocco?", a: "Yes. Third-party liability insurance is compulsory and is included in every Sovoy rental. Collision cover is also included, with an excess that can be reduced." }
];

// FAQ categories
const faqCategories = [
  "All",
  "Documents & Requirements",
  "Age & Licence",
  "Insurance & Deposit",
  "Booking & Changes",
  "Pickup & Return",
  "Policies"
];

// Map FAQs to categories
function getFaqCategory(faq) {
  const q = faq.q.toLowerCase();
  if (q.includes("document") || q.includes("licence") || q.includes("permit") || q.includes("idp")) return "Documents & Requirements";
  if (q.includes("age") || q.includes("young") || q.includes("25") || q.includes("30")) return "Age & Licence";
  if (q.includes("insurance") || q.includes("deposit") || q.includes("excess") || q.includes("fuel") || q.includes("mileage")) return "Insurance & Deposit";
  if (q.includes("book") || q.includes("cancel") || q.includes("modif") || q.includes("reserv") || q.includes("pay")) return "Booking & Changes";
  if (q.includes("pick") || q.includes("drop") || q.includes("locat") || q.includes("airport") || q.includes("desk") || q.includes("hour")) return "Pickup & Return";
  return "Policies";
}

// ========================================
// SVG ICONS
// ========================================

const icons = {
  transmission: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12h8M12 8v8M5 12h3M16 12h3"/></svg>`,
  fuel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 17v-8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8"/><path d="M5 17h14"/></svg>`,
  doors: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18"/></svg>`,
  people: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  bags: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/></svg>`,
  ac: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/><path d="M12 6v6l4 2"/></svg>`
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $$(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function createElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ========================================
// RENDER FUNCTIONS
// ========================================

function renderFeaturedCars() {
  const container = $('#featured-cars');
  if (!container) return;

  container.innerHTML = featuredCars.map((car, index) => `
    <article class="car-card" data-index="${index}">
      <div class="car-image">
        <img src="${car.image}" alt="${escapeHtml(car.name)}" loading="lazy" onerror="this.src='images/cars/placeholder.svg'">
        <span class="car-badge">${car.category || 'Car'}</span>
      </div>
      <div class="car-info">
        <h3 class="car-name">${escapeHtml(car.name)}</h3>
        <div class="car-specs">
          <span class="car-spec">${icons.transmission} ${car.gearbox}</span>
          <span class="car-spec">${icons.fuel} ${car.fuel}</span>
          <span class="car-spec">${icons.doors} ${car.doors} doors</span>
          <span class="car-spec">${icons.people} ${car.people} seats</span>
          <span class="car-spec">${icons.bags} ${car.bags} bags</span>
          ${car.ac ? `<span class="car-spec">${icons.ac} A/C</span>` : ''}
        </div>
        <div class="car-footer">
          <span class="car-category">${car.category || 'Car'}</span>
          <span class="car-price">${car.pricePerDay} ${car.currency}/day</span>
        </div>
      </div>
    </article>
  `).join('');
}

function renderLocationsPreview() {
  const container = $('#locations-preview');
  if (!container) return;

  const previewLocations = locations.slice(0, 6);
  container.innerHTML = previewLocations.map(loc => `
    <article class="location-card">
      <div class="location-image">
        <img src="images/locations/${loc.slug}.svg" alt="${escapeHtml(loc.title)}" loading="lazy" onerror="this.src='images/locations/placeholder.svg'">
      </div>
      <div class="location-info">
        <h3 class="location-title">${escapeHtml(loc.shortTitle)}</h3>
        <p class="location-desc">${escapeHtml(loc.description)}</p>
        <a href="#booking-confirmation" class="location-link" data-location="${loc.slug}">View details →</a>
      </div>
    </article>
  `).join('');
}

function renderLocationsGrid() {
  const container = $('#locations-grid');
  if (!container) return;

  container.innerHTML = locations.map(loc => `
    <article class="location-card">
      <div class="location-image">
        <img src="images/locations/${loc.slug}.svg" alt="${escapeHtml(loc.title)}" loading="lazy" onerror="this.src='images/locations/placeholder.svg'">
      </div>
      <div class="location-info">
        <h3 class="location-title">${escapeHtml(loc.title)}</h3>
        <p class="location-desc">${escapeHtml(loc.description)}</p>
        <a href="#booking-confirmation" class="location-link">Book now →</a>
      </div>
    </article>
  `).join('');
}

function renderFleetFilters() {
  const container = $('#fleet-filters');
  if (!container) return;

  container.innerHTML = fleetCategories.map((cat, index) => `
    <button class="fleet-filter${index === 0 ? ' active' : ''}" data-category="${cat}" role="tab" aria-selected="${index === 0}">${cat}</button>
  `).join('');
}

function renderFleetGrid(category = 'All') {
  const container = $('#fleet-grid');
  if (!container) return;

  const filtered = category === 'All' ? cars : cars.filter(c => c.category === category);
  container.innerHTML = filtered.map((car, index) => `
    <article class="car-card" data-category="${escapeHtml(car.category)}">
      <div class="car-image">
        <img src="${car.image}" alt="${escapeHtml(car.name)}" loading="lazy" onerror="this.src='images/cars/placeholder.svg'">
        <span class="car-badge">${car.category || 'Car'}</span>
      </div>
      <div class="car-info">
        <h3 class="car-name">${escapeHtml(car.name)}</h3>
        <div class="car-specs">
          <span class="car-spec">${icons.transmission} ${car.gearbox}</span>
          <span class="car-spec">${icons.fuel} ${car.fuel}</span>
          <span class="car-spec">${icons.doors} ${car.doors} doors</span>
          <span class="car-spec">${icons.people} ${car.people} seats</span>
          <span class="car-spec">${icons.bags} ${car.bags} bags</span>
          ${car.ac ? `<span class="car-spec">${icons.ac} A/C</span>` : ''}
        </div>
        <div class="car-footer">
          <span class="car-category">${car.category || 'Car'}</span>
          <span class="car-price">${car.pricePerDay} ${car.currency}/day</span>
        </div>
      </div>
    </article>
  `).join('');
}

function renderFaqCategories() {
  const container = $('#faq-categories');
  if (!container) return;

  container.innerHTML = faqCategories.map((cat, index) => `
    <button class="faq-category${index === 0 ? ' active' : ''}" data-category="${cat}" role="tab" aria-selected="${index === 0}">${cat}</button>
  `).join('');
}

function renderFaqList(category = 'All') {
  const container = $('#faq-list');
  if (!container) return;

  const filtered = category === 'All' ? faqs : faqs.filter(f => getFaqCategory(f) === category);
  container.innerHTML = filtered.map((faq, index) => `
    <article class="faq-item" data-index="${index}">
      <button class="faq-question" aria-expanded="false">
        <span>${escapeHtml(faq.q)}</span>
      </button>
      <div class="faq-answer">
        <p>${escapeHtml(faq.a)}</p>
      </div>
    </article>
  `).join('');
}

function renderReviews() {
  const container = $('#reviews-grid');
  if (!container) return;

  container.innerHTML = reviews.map(review => `
    <article class="review-card">
      <p class="review-quote">"${escapeHtml(review.quote)}"</p>
      <div class="review-author">${escapeHtml(review.author)}</div>
      <div class="review-meta">${escapeHtml(review.meta)}</div>
    </article>
  `).join('');
}

function renderBookingSummary() {
  const container = $('#booking-summary');
  if (!container) return;

  // Params are in the hash (e.g., #booking-confirmation?pickup=...)
  const hash = window.location.hash;
  const queryStart = hash.indexOf('?');
  const queryString = queryStart >= 0 ? hash.substring(queryStart + 1) : '';
  const params = new URLSearchParams(queryString);
  
  const pickup = params.get('pickup') || 'Not specified';
  const dropoff = params.get('dropoff') || pickup;
  const pickupDate = params.get('pickup_date') || 'Not specified';
  const dropoffDate = params.get('dropoff_date') || 'Not specified';

  // Format dates nicely
  function formatDate(dateStr) {
    if (!dateStr || dateStr === 'Not specified') return 'Not specified';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  container.innerHTML = `
    <div class="booking-summary-card">
      <h2>Booking Summary</h2>
      <div class="summary-row">
        <span class="summary-label">Pickup Location</span>
        <span class="summary-value">${escapeHtml(pickup)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Drop-off Location</span>
        <span class="summary-value">${escapeHtml(dropoff)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Pickup Date & Time</span>
        <span class="summary-value">${formatDate(pickupDate)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Drop-off Date & Time</span>
        <span class="summary-value">${formatDate(dropoffDate)}</span>
      </div>
      <div class="summary-row summary-total">
        <span class="summary-label">Estimated Total</span>
        <span class="summary-value">From 150 MAD/day</span>
      </div>
    </div>
  `;
}

// ========================================
// NAVIGATION & PAGE MANAGEMENT
// ========================================

const pages = ['home', 'locations', 'fleet', 'faq', 'help', 'manage-booking', 'booking-confirmation', 'intro'];
let currentPage = 'home';

function showPage(pageId) {
  // Extract page name from hash (remove query params)
  const pageName = pageId.split('?')[0];
  if (!pages.includes(pageName)) return;

  // Update page visibility
  pages.forEach(p => {
    const page = $(`#${p}`);
    if (page) {
      page.classList.toggle('active', p === pageName);
    }
  });

  // Update nav links
  $$('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${pageName}`);
  });

  // Close mobile menu
  closeMobileMenu();

  // Update URL hash (preserve query params)
  history.replaceState(null, '', `#${pageId}`);

  // Scroll to top
  window.scrollTo(0, 0);

  currentPage = pageName;

  // Initialize page-specific content
  initializePage(pageName);
}

function initializePage(pageId) {
  switch (pageId) {
    case 'home':
      if (!$('#featured-cars').children.length) renderFeaturedCars();
      if (!$('#locations-preview').children.length) renderLocationsPreview();
      if (!$('#reviews-grid').children.length) renderReviews();
      break;
    case 'intro':
      // Booking form is already set up in setupBookingForm()
      break;
    case 'locations':
      if (!$('#locations-grid').children.length) renderLocationsGrid();
      break;
    case 'fleet':
      if (!$('#fleet-filters').children.length) renderFleetFilters();
      if (!$('#fleet-grid').children.length) renderFleetGrid();
      break;
    case 'faq':
      if (!$('#faq-categories').children.length) renderFaqCategories();
      if (!$('#faq-list').children.length) renderFaqList();
      break;
    case 'booking-confirmation':
      renderBookingSummary();
      break;
  }
}

// ========================================
// MOBILE MENU
// ========================================

const navToggle = $('#navToggle');
const navMenu = $('#navMenu');

function toggleMobileMenu() {
  const isOpen = navMenu.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  navMenu.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// ========================================
// FAQ ACCORDION
// ========================================

function setupFaqAccordion() {
  document.addEventListener('click', e => {
    const question = e.target.closest('.faq-question');
    if (!question) return;

    const item = question.closest('.faq-item');
    const isActive = item.classList.toggle('active');
    question.setAttribute('aria-expanded', isActive);
  });
}

// ========================================
// FLEET FILTERS
// ========================================

function setupFleetFilters() {
  document.addEventListener('click', e => {
    const filter = e.target.closest('.fleet-filter');
    if (!filter) return;

    $$('.fleet-filter').forEach(f => {
      f.classList.toggle('active', f === filter);
      f.setAttribute('aria-selected', f === filter);
    });

    renderFleetGrid(filter.dataset.category);
  });
}

// ========================================
// FAQ CATEGORIES
// ========================================

function setupFaqCategories() {
  document.addEventListener('click', e => {
    const cat = e.target.closest('.faq-category');
    if (!cat) return;

    $$('.faq-category').forEach(c => {
      c.classList.toggle('active', c === cat);
      c.setAttribute('aria-selected', c === cat);
    });

    renderFaqList(cat.dataset.category);
  });
}

// ========================================
// BOOKING FORM
// ========================================

function setupBookingForm() {
  const form = $('#booking-form');
  if (!form) return;

  // Set min date to today
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const minDate = now.toISOString().slice(0, 16);

  $('#pickup-date').min = minDate;
  $('#dropoff-date').min = minDate;

  // Update dropoff min when pickup changes
  $('#pickup-date').addEventListener('change', e => {
    $('#dropoff-date').min = e.target.value;
    if ($('#dropoff-date').value && $('#dropoff-date').value < e.target.value) {
      $('#dropoff-date').value = e.target.value;
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const params = new URLSearchParams();
    params.set('pickup', data.get('pickup'));
    params.set('dropoff', data.get('dropoff') || data.get('pickup'));
    params.set('pickup_date', data.get('pickup_date'));
    params.set('dropoff_date', data.get('dropoff_date'));
    window.location.href = `#booking-confirmation?${params.toString()}`;
  });
}

// ========================================
// MANAGE BOOKING FORM
// ========================================

function setupManageForm() {
  const form = $('#manage-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    // In a real app, this would call an API
    alert('Booking management would connect to your reservation system. This is a demo.');
  });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

function setupSmoothScroll() {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (href === '#') return;

    const target = $(href);
    if (target) {
      e.preventDefault();
      showPage(href.slice(1));
    }
  });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================

function setupHeaderScroll() {
  const header = $('#header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = 'var(--shadow-md)';
      header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.boxShadow = 'var(--shadow-sm)';
      header.style.background = 'var(--color-white)';
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// ========================================
// HASH CHANGE HANDLING
// ========================================

function handleHashChange() {
  const hash = window.location.hash.slice(1);
  const pageName = hash.split('?')[0];
  if (pages.includes(pageName)) {
    showPage(hash);
  } else if (hash === '' || hash === 'hero') {
    showPage('hero');
  } else {
    showPage('home');
  }
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================

function setupKeyboardNav() {
  document.addEventListener('keydown', e => {
    // Escape closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMobileMenu();
      navToggle.focus();
    }

    // Tab trapping in mobile menu
    if (e.key === 'Tab' && navMenu.classList.contains('active')) {
      const focusable = navMenu.querySelectorAll('a, button');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

// ========================================
// LAZY LOAD IMAGES (placeholder)
// ========================================

function setupLazyImages() {
  // In a real implementation, this would use IntersectionObserver
  // to load actual car/location images when they enter viewport
  console.log('Lazy loading ready - replace placeholder images with real assets');
}

// ========================================
// INITIALIZATION
// ========================================

function init() {
  // Setup all event handlers
  setupSmoothScroll();
  setupHeaderScroll();
  setupFaqAccordion();
  setupFleetFilters();
  setupFaqCategories();
  setupBookingForm();
  setupManageForm();
  setupKeyboardNav();
  setupLazyImages();

  // Mobile menu toggle
  navToggle.addEventListener('click', toggleMobileMenu);

  // Close mobile menu on nav link click
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Handle hash changes
  window.addEventListener('hashchange', handleHashChange);

  // Initial page load
  const initialHash = window.location.hash.slice(1);
  if (pages.includes(initialHash)) {
    showPage(initialHash);
  } else {
    showPage('home');
  }

  console.log('Sovoycars app initialized');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
// Safety net: always call init() to handle environments where readyState
// is already complete but script executes after DOMContentLoaded fired
init();

console.log('Sovoycars app initialized (forced)');

// Export for debugging
window.Sovoycars = {
  showPage,
  cars,
  locations,
  faqs,
  reviews,
  currentPage: () => currentPage
};
