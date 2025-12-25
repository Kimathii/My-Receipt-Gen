// data/companies.js
// Only 3 brands: Eukanuba Pet Food, Pure Encapsulations, Bacardi Ocho

const companies = [
  {
    store: "Eukanuba Pet Food",
    name: "Tractor Supply Co",
    slogan: "For Life Out Here",
    phone: "(502) 874-8000",
    locations: [
      { address: "4331 Bardstown Rd, Louisville, KY 40218", state: "KY" },
      { address: "4000 Shelbyville Rd, Louisville, KY 40207", state: "KY" },
      { address: "1025 Veterans Pkwy, Clarksville, IN 47129", state: "KY" }
    ],
    products: [
 { name: "Eukanuba Puppy Small Breed Fresh Chicken Dry Dog Food", price: 36.99 },
  { name: "Eukanuba Puppy Small/Medium Breed Lamb & Rice Dry Dog Food", price: 38.99 },
  { name: "Eukanuba Puppy Medium Breed Fresh Chicken Dry Dog Food", price: 39.99 },
  { name: "Eukanuba Puppy Large Breed Fresh Chicken Dry Dog Food", price: 42.99 },
  { name: "Eukanuba Adult Small Breed Fresh Chicken Dry Dog Food", price: 41.99 },
  { name: "Eukanuba Adult Small/Medium Breed Lamb & Rice Dry Dog Food", price: 43.99 },
  { name: "Eukanuba Adult Small/Medium Breed Salmon & Barley Dry Dog Food", price: 45.99 },
  { name: "Eukanuba Adult Medium Breed Fresh Chicken Dry Dog Food", price: 44.99 },
  { name: "Eukanuba Adult Large Breed Fresh Chicken Dry Dog Food", price: 47.99 },
  { name: "Eukanuba Adult Large Breed Lamb & Rice Dry Dog Food", price: 46.99 },
  { name: "Eukanuba Grain Free Adult Small/Medium Breed Chicken Dry Dog Food", price: 52.99 },
  { name: "Eukanuba Adult Small Bites Dry Dog Food", price: 40.99 },
  { name: "Eukanuba Adult Dry Dog Food for Medium Dogs", price: 42.99 }
    ]
  },

  {
    store: "Pure Encapsulations",
    name: "The Vitamin Shoppe",
    slogan: "Everyone is deserving of good health",
    phone: "(203) 877-4281",
    locations: [
      { address: "150 E 42nd St, New York, NY 10017", state: "NY" },
      { address: "250 Summer St, Boston, MA 02210", state: "MA" },
      { address: "600 N Michigan Ave, Chicago, IL 60611", state: "IL" }
    ],
    products: [
    
  { name: "Pure Encapsulations Magnesium (Glycinate)", price: 39.99 },
  { name: "Pure Encapsulations O.N.E.™ Multivitamin", price: 49.99 },
  { name: "Pure Encapsulations Vitamin D3 125 mcg (5,000 IU)", price: 29.99 },
  { name: "Pure Encapsulations Quercetin 120 Capsules", price: 34.99 },
  { name: "Pure Encapsulations Digestive Enzymes Ultra", price: 37.99 },
  { name: "Pure Encapsulations NAC (N-Acetyl-L-Cysteine) 600 mg", price: 31.99 },
  { name: "Pure Encapsulations Zinc 30", price: 19.99 },
  { name: "Pure Encapsulations Adrenal 60 Capsules", price: 24.99 },
  { name: "Pure Encapsulations Ashwagandha 60 Capsules", price: 27.99 },
  { name: "Pure Encapsulations DHEA 10 mg", price: 21.99 },
  { name: "Pure Encapsulations Probiotic G.I.", price: 42.99 },
  { name: "Pure Encapsulations Liposomal Glutathione", price: 59.99 }
]
  },

  {
    store: "Bacardi Ocho",
    name: "Amazon",
    slogan: "Work Hard. Have Fun. Make History.",
    phone: "(305) 378-3000",
    locations: [
      { address: "Amazon Returns & Pickup, 3251 20th Ave Suite 340, San Francisco, CA 94132", state: "CA" },
{ address: "Amazon Hub Locker+ (UC Berkeley Student Union), 2495 Bancroft Way, Berkeley, CA 94720", state: "CA" },
{ address: "Amazon Hub Locker - Sacramento (Whole Foods), 4315 Arden Wy, Sacramento, CA 95864", state: "CA" },
{ address: "Amazon Locker - Shirley, Ghirardelli Square, 900 North Point St, San Francisco, CA 94109", state: "CA" },
{ address: "Amazon Hub Locker - Cenzella, 400 Raleys Towne Ctr at Ross Dress for Less, Rohnert Park, CA 94928", state: "CA" },
{ address: "Amazon Locker - Anthony, University of the Pacific, 3268 Donner Way, Sacramento, CA 95817", state: "CA" },
{ address: "Amazon Locker - Arugula (7-Eleven), 281 Washington St, Santa Clara, CA 95050", state: "CA" },
{ address: "Amazon Locker - Manon (Safeway), 150 E El Camino Real, Sunnyvale, CA 94087", state: "CA" },
{ address: "Amazon Locker - Showroom (dd's DISCOUNTS), 3700 Klose Way, Richmond, CA 94806", state: "CA" },
{ address: "Amazon Locker - Claude (Safeway), 1814 19th St, Sacramento, CA 95811", state: "CA" },
{ address: "Amazon Locker - Acapulco (Ross Dress for Less), 1933 Davis St Ste 120, San Leandro, CA 94577", state: "CA" },
{ address: "Amazon Hub Locker+ (UCDavis) Davis Memorial Union, One Shields Ave Rm 182, Davis, CA 95616", state: "CA" },
{ address: "Amazon Counter - 4PX EXPRESS NEWARK (PUDO), 39055 Cedar Blvd #148, Newark, CA 94560", state: "CA" },
{ address: "Amazon Locker - Magma (Ace Hardware), 1695 Mission St, San Francisco, CA 94103", state: "CA" },
{ address: "Amazon Locker - Fuzzy (Safeway), 555 E Calaveras Blvd, Milpitas, CA 95035", state: "CA" },
{ address: "Amazon Hub Locker - Folsom (Safeway), 709 Lincoln Rd W, Vallejo, CA 94590", state: "CA" },
{ address: "Amazon Locker - Kemah (Safeway), 2851 Del Paso Rd, Sacramento, CA 95835", state: "CA" },
{ address: "Amazon Locker - Allen, 545 1st Ave, San Mateo, CA 94401", state: "CA" }
    ],
    products: [
       { name: "Bacardí Reserva Ocho (8-Year-Old) bucket", price: 34.99 },
  { name: "Bacardí Reserva Ocho Sevillian Orange Cask Finish bucket", price: 36.99 },
  { name: "Bacardí Ocho Rye Cask Finish bucket", price: 37.99 },
  { name: "Bacardí Spiced Rum bucket", price: 25.28 },
  { name: "Bacardí Black Rum bucket", price: 25.28 },
  { name: "Bacardí Superior White Rum bucket", price: 25.28 },
  { name: "Bacardí Gold Rum bucket", price: 25.28 },
  { name: "Bacardí Coconut Rum bucket", price: 25.28 },
  { name: "Bacardí Lime Rum bucket", price: 25.28 },
  { name: "Bacardí Limón Rum bucket", price: 25.28 },
  { name: "Bacardí Tropical Rum bucket", price: 25.28 }
    ]
  }
];

export default companies;
