export interface ProductSize {
  size: string;
  price: number;
  isBestSeller?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number; // Starting price
  sizes: ProductSize[];
  badge?: string;
  image: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  ingredients: string;
  howToUse: string;
  gallery?: string[];
}

export const products: Product[] = [
  {
    id: 'moon-glow',
    name: 'Moon Glow Polish',
    price: 349,
    badge: '🌙 Gentle Everyday Polish',
    sizes: [
      { size: '100 g', price: 349 },
      { size: '200 g', price: 599, isBestSeller: true },
      { size: '300 g', price: 849 }
    ],
    image: '/moon_glow_polish_1777837345593.png',
    shortDesc: 'Luxury Lavender & Oat Body Scrub for an ethereal glow.',
    description: 'Experience the soft, feminine touch of the Moon Glow Polish. A luxurious lavender and oat body scrub designed to gently exfoliate while leaving a sensual, subtle shimmer on your skin. Perfect for an evening self-care routine to calm the mind and soothe the body.',
    benefits: ['Lavender soothing scent', 'Gentle oat exfoliation', 'Ethereal subtle glow', 'Deeply nourishing'],
    ingredients: 'Finely milled oats, Lavender essential oil, Sugar crystals, Jojoba oil, Pearl powder, Vanilla extract.',
    howToUse: 'Massage gently onto damp skin in circular motions. Rinse thoroughly and pat dry.',
  },
  {
    id: 'rose-cloud',
    name: 'Rose Cloud Polish',
    price: 399,
    sizes: [
      { size: '100 g', price: 399 },
      { size: '200 g', price: 649 },
      { size: '300 g', price: 899 }
    ],
    image: '/rose_cloud_polish_1777836603661.png',
    shortDesc: 'Luxurious Pink Whipped Body Scrub infused with real rose petals.',
    description: 'Wrap yourself in the luxurious scent of fresh roses and the light, whipped texture of Rose Cloud. This creamy blush pink scrub buffs away dullness while deeply hydrating the skin, leaving it petal-soft and beautifully scented.',
    benefits: ['Creamy whipped texture', 'Deeply hydrating', 'Petal-soft finish', 'Sensory rose aromatherapy'],
    ingredients: 'Organic cane sugar, Sweet almond oil, Crushed rose petals, Rose essential oil, Shea butter.',
    howToUse: 'Apply to wet skin, gently scrub, and rinse with warm water.',
  },
  {
    id: 'coffee-velvet',
    name: 'Coffee Velvet Scrub',
    price: 379,
    sizes: [
      { size: '100 g', price: 379 },
      { size: '200 g', price: 629 },
      { size: '300 g', price: 879 }
    ],
    image: '/coffee_velvet_scrub_1777836588363.png',
    shortDesc: 'Luxury Coffee & Cocoa Body Scrub for smooth, velvet skin.',
    description: 'Awaken your senses with the rich aroma of roasted coffee and decadent cocoa. This high-performance scrub targets skin texture, exfoliates deeply, and improves circulation, revealing a velvety, firm finish.',
    benefits: ['Rich cocoa hydration', 'Improves circulation', 'Firms skin', 'Exfoliates deeply'],
    ingredients: 'Ground robusta coffee, Pure cocoa butter, Cocoa powder, Coconut oil, Brown sugar, Vitamin E.',
    howToUse: 'Focus on areas needing extra attention. Scrub in circular motions for 2-3 minutes before rinsing.',
  },
  {
    id: 'golden-oat-repair',
    name: 'Golden Oat Repair',
    price: 449,
    badge: '🌿 For Sensitive Skin',
    sizes: [
      { size: '100 g', price: 449 },
      { size: '200 g', price: 799 },
      { size: '300 g', price: 1099 }
    ],
    image: '/golden_oat_repair_1777839874318.png',
    shortDesc: 'Soothing golden oats and honey for sensitive, dry skin.',
    description: 'Wrap your skin in the comforting embrace of oats and honey. This ultra-soothing formula is designed to repair the skin barrier and deeply moisturize dry, sensitive areas.',
    benefits: ['Repairs skin barrier', 'Intensely soothing', 'Deep hydration'],
    ingredients: 'Finely milled oats, Raw honey, Shea butter, Chamomile extract.',
    howToUse: 'Apply gently to dry areas in circular motions. Let sit for 1 minute to absorb nutrients before rinsing.',
  },
  {
    id: 'brightening-botanical',
    name: 'Brightening Botanical Polish',
    price: 449,
    sizes: [
      { size: '100 g', price: 449 },
      { size: '200 g', price: 849 },
      { size: '300 g', price: 1149 }
    ],
    image: '/brightening_botanical_1777839888932.png',
    shortDesc: 'Herbal Luxury Body Scrub to instantly brighten and rejuvenate.',
    description: 'A refreshing morning botanical ritual. Infused with potent green herbs, soothing chamomile, and active green tea, this scrub awakens tired skin, reduces dullness, and imparts a healthy, bright, and natural aesthetic glow.',
    benefits: ['Herbal rejuvenation', 'Instant brightness', 'Awakens dull skin', 'Antioxidant-rich botanicals'],
    ingredients: 'Organic sugar, Green tea extract, Chamomile extract, Mint leaves, Lemon peel oil, Calendula petals.',
    howToUse: 'Use in the morning shower to wake up your skin. Scrub gently in circular motions and rinse.',
  },
  {
    id: 'deep-tan-rescue',
    name: 'Deep Tan Rescue Polish',
    price: 499,
    badge: '🔥 Most Loved for Tan Removal',
    sizes: [
      { size: '100 g', price: 499 },
      { size: '200 g', price: 899 },
      { size: '300 g', price: 1249 }
    ],
    image: '/deep_tan_rescue_1777839903980.png',
    shortDesc: 'Deep Tan Rescue & Repair Scrub to soothe and restore sun-kissed skin.',
    description: 'The ultimate after-sun luxury. The Deep Tan Rescue Polish is formulated to gently exfoliate peeling skin while depositing deep moisture to prolong your natural tan and repair sun-kissed skin with nourishing botanicals, aloe, and turmeric.',
    benefits: ['Deep tan rescue & repair', 'Soothes sun exposure', 'Prolongs natural tan', 'Gently exfoliates and restores'],
    ingredients: 'Sea salt, Aloe vera extract, Turmeric extract, Cocoa butter, Terracotta clay, Lemon extract.',
    howToUse: 'Use on sun-kissed skin with extremely gentle, light motions. Let sit for a minute to soothe before rinsing with cool water.',
  },
  {
    id: 'golden-rio',
    name: 'Golden Rio Body Polish',
    price: 699,
    badge: '✨ BESTSELLER',
    sizes: [
      { size: '100 g', price: 699 },
      { size: '200 g', price: 1299 },
      { size: '300 g', price: 1799 }
    ],
    image: '/golden_rio_scrub_1777836620027.png',
    shortDesc: 'Luxurious Caramel & Shimmer Body Scrub for a sun-kissed glow.',
    description: 'Our most luxurious offering. Golden Rio Body Polish transports you to a sun-drenched beach with its warm, glowing formula. Infused with rich caramel, golden shimmer, and exotic oils that leave your skin deeply soft and wonderfully radiant.',
    benefits: ['Rich caramel skin softening', 'Golden shimmer glow', 'Intense tropical moisture', 'Anti-aging properties'],
    ingredients: 'Decadent caramel, Gold mica, Argan oil, Macadamia nut oil, Dead sea salt, Sweet almond oil.',
    howToUse: 'Use 1-2 times a week for a luxurious, glowing and shimmering finish.',
  },
  {
    id: 'floral-luxury',
    name: 'No.5 Floral Polish',
    price: 749,
    badge: '🌸 Luxury Perfume Collection',
    sizes: [
      { size: '100 g', price: 749 },
      { size: '200 g', price: 1399 },
      { size: '300 g', price: 1899 }
    ],
    image: '/floral_luxury_polish_1777837362238.png',
    shortDesc: 'Luxury Ivory Whipped Floral Body Scrub for ultimate self-care.',
    description: 'A premium, whipped sensory experience. No.5 Floral Polish is a luxurious ivory body scrub designed to elevate your self-care routine into a high-fashion art form. Wrap yourself in rich whipped hydration and a magnificent floral aroma.',
    benefits: ['Ivory whipped hydration', 'Sensory floral escape', 'Ultra-silky skin finish', 'Calms and relaxes the mind'],
    ingredients: 'Whipped shea butter, Jasmine extract, Rosewater, White lily extract, Fine sugar crystals.',
    howToUse: 'Take a generous scoop and gently massage onto damp skin. Breathe in the floral notes and rinse.',
  },
  {
    id: 'bloom-couture',
    name: 'Bloom Couture Polish',
    price: 749,
    badge: '🌸 Luxury Perfume Collection',
    sizes: [
      { size: '100 g', price: 749 },
      { size: '200 g', price: 1399 },
      { size: '300 g', price: 1899 }
    ],
    image: '/bloom_couture_1777839918477.png',
    shortDesc: 'Luxury Lavender & Mixed Bloom Body Scrub for special occasions.',
    description: 'Inspired by high fashion and extravagant French gardens, Bloom Couture Polish is our most vibrant and luxury lavender scrub. It leaves your skin impossibly soft and smelling like an expensive lavender garden in full bloom.',
    benefits: ['Luxury lavender & mixed blooms', 'Extravagant floral fragrance', 'Silky skin feel', 'Elevated self-care ritual'],
    ingredients: 'French lavender buds, Rosehip oil, Jasmine petals, Peony extract, Fine sugar crystals.',
    howToUse: 'Save for special occasions. Massage into damp skin and rinse to reveal an extravagant, beautiful glow.',
  }
];
