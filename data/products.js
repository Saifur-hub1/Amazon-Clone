export function getProducts(productId){
  let matchingProduct;

  products.forEach((product)=>{
    if(product.id===productId){
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: 'p1',
    image: '/image/products/coffeemaker-with-glass-carafe-black.jpg',
    name: 'coffeemaker-with-glass-carafe-black.jpg',
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p2',
    image: 'image/products/6-piece-non-stick-baking-set.webp',
    name: '6-Piece Nonstick, Carbon Steel Oven Bakeware',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'kitchen',
      'cookware'
    ]
  },
  {
    id: 'p3',
    image: 'image/products/6-piece-white-dinner-plate-set.jpg',
    name: '6 Piece White Dinner Plate Set',
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      'plates',
      'kithcen',
      'dining'
    ]
  },
  {
    id: 'p4',
    image: 'image/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apperal",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: 'p5',
    image: 'image/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: 'p6',
    image: 'image/products/backpack.jpg',
    name: 'School bag',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p7',
    image: 'image/products/bathroom-rug.jpg',
    name: 'Bathroom Rug',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p8',
    image: 'image/products/black-2-slot-toaster.jpg',
    name: '2 Slot Toaster - Black',
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 3499,
    keywords: [
      'toaster',
      'kithchen',
      'appliances'
    ]
  },
  {
    id: 'p9',
    image: 'image/products/blackout-curtain-set-beige.webp',
    name: 'Blackout curtain set beige',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p10',
    image: 'image/products/blackout-curtains-black.jpg',
    name: 'Blackout Curtain set Black',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p11',
    image: 'image/products/cotton-bath-towels-teal.webp',
    name: 'Towel',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p12',
    image: 'image/products/countertop-blender-64-oz.jpg',
    name: 'CounterTop Blender',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p13',
    image: 'image/products/double-elongated-twist-french-wire-earrings.webp',
    name: 'Double elongated Twist french wire earrings',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p14',
    image: 'image/products/duvet-cover-set-blue-twin.jpg',
    name: 'Duvet Cover Set Blue Twin',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p15',
    image: 'image/products/electric-glass-and-steel-hot-water-kettle.webp',
    name: 'Electric glass and stell hot water kettle',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p16',
    image: 'image/products/facial-tissue-2-ply-18-boxes.jpg',
    name: 'Facial tissue 2 ply 18 boxes',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p17',
    image: 'image/products/floral-mixing-bowl-set.jpg',
    name: 'Floral mixing bowl set',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p18',
    image: 'image/products/illyeen1.jpg',
    name: 'Platinum black punjabi Illyeen',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p19',
    image: 'image/products/illyeen2.jpg',
    name: 'Platinum light punjabi Illyeen',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p20',
    image: 'image/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
      stars: 4.5,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      'sports',
      'basketballs'
    ]
  },
  {
    id: 'p21',
    image: 'image/products/kitchen-paper-towels-30-pack.jpg',
    name: 'Kitchen paper towels 30 pack',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p22',
    image: 'image/products/knit-athletic-sneakers-gray.jpg',
    name: 'Knit athletic sneakers gray',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p23',
    image: 'image/products/knit-athletic-sneakers-pink.webp',
    name: 'Knit athletic sneakers pink',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p24',
    image: 'image/products/men-cozy-fleece-zip-up-hoodie-red.jpg',
    name: 'Men cozy fleece zip up hoodie red',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p25',
    image: 'image/products/men-golf-polo-t-shirt-blue.jpg',
    name: 'Men Golf polo T-Shirt',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p26',
    image: 'image/products/men-navigator-sunglasses-brown.jpg',
    name: 'Men navigatory sunglass brown',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p27',
    image: 'image/products/men-slim-fit-summer-shorts-gray.jpg',
    name: 'Men slim fit summer shorts gray',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p28',
    image: 'image/products/MensJoggers.jpg',
    name: 'Men slim fit Joggers black',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p29',
    image: 'image/products/non-stick-cooking-set-15-pieces.webp',
    name: 'Non-stick cooking set 15 pieces',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p30',
    image: 'image/products/plain-hooded-fleece-sweatshirt-yellow.jpg',
    name: 'Plain hooded fleece sweatshirt yellow',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p31',
    image: 'image/products/round-airtight-food-storage-containers.jpg',
    name: 'Round airtight food storage containers',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p32',
    image: 'image/products/round-sunglasses-black.jpg',
    name: 'Roun Sunglasses',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p33',
    image: 'image/products/sky-flower-stud-earrings.webp',
    name: 'Sky flower stud earrings',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p34',
    image: 'image/products/straw-sunhat.webp',
    name: 'Straw Sunhat',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p35',
    image: 'image/products/trash-can-with-foot-pedal-50-liter.jpg',
    name: 'Trash can with foot pedal',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p36',
    image: 'image/products/umbrella.jpg',
    name: 'Umbrella Blue sun protecot and rain protector',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p37',
    image: 'image/products/vanity-mirror-silver.jpg',
    name: 'Vanity mirror silver',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p38',
    image: 'image/products/women-beach-sandals.jpg',
    name: 'Women beach sandals',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p39',
    image: 'image/products/women-chunky-beanie-gray.webp',
    name: 'Women chunky beanie gray',
    rating: {
      stars: 4.5,
      count: 200
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p40',
    image: 'image/products/women-french-terry-fleece-jogger-camo.jpg',
    name: 'Women french terry fleece jogger camo',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
  {
    id: 'p41',
    image: 'image/products/women-knit-ballet-flat-black.jpg',
    name: 'Women knit ballete flat black',
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      'ketchen',
      'cookware'
    ]
  },
];
