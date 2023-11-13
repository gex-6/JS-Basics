const { Product, Review, searchProducts, sortProducts } = require('./functionConstructors');

const productNames = [
    'Jordans', 'Adidas Boost', 'Puma Sneakers', 'Reebok Classic', 'New Balance', 'Converse All Star',
    'Vans Old Skool', 'Nike Air Max', 'Under Armour', 'Saucony Originals', 'Fila Disruptor', 'ASICS Gel-Lyte',
    'Brooks Running Shoes', 'Mizuno Wave Rider', 'Skechers Go Walk', 'Hoka One One', 'Salomon Speedcross', 'On Cloud',
    'Merrell Hiking Boots', 'Timberland Boots', 'Columbia Waterproof', 'The North Face', 'Keen Sandals', 'ECCO Golf Shoes',
    'Birkenstock', 'Dr. Martens', 'UGG Boots', 'Clarks Desert Boots', 'Bates Tactical', 'Carhartt Work Boots',
    'Caterpillar', 'Merrell Jungle Moc', 'Sorel Snow Boots', 'CROCS Clogs', 'Birkenstock Arizona', 'Bogs Rain Boots',
    'Chaco Sandals', 'Dansko Professional', 'Sanuk Yoga Mat', 'Teva Hurricane', 'Skechers DLites', 'Vibram FiveFingers',
    'Altra Running Shoes', 'Frye Cowboy Boots', 'K-Swiss Classic', 'Lacoste Sneakers', 'Sperry Boat Shoes', 'Crocs',
    'Adidas', 'Flop Flop'
];

const productDescriptions = [
    'Very comfortable and stylish shoes.',
    'Great for running and outdoor activities.',
    'Casual and versatile sneakers.',
    'Classic and timeless design.',
    'Perfect for all-day comfort.',
    'Iconic and popular shoe choice.',
    'Top-notch performance and cushioning.',
    'Durable and reliable footwear.',
    'Ideal for various sports and activities.',
    'Excellent support and fit.',
    'Fashionable and trendy.',
    'Quality materials and craftsmanship.',
    'Designed for serious runners.',
    'Superb cushioning and support.',
    'Walking made easy and comfortable.',
    'Trail-ready and adventure-friendly.',
    'Grippy and responsive outsole.',
    'Lightweight and breathable design.',
    'Hiking in style and comfort.',
    'Built to withstand tough conditions.',
    'Waterproof and insulated protection.',
    'Warm and cozy winter boots.',
    'Outdoor exploration gear.',
    'Comfortable for beach and water sports.',
    'Elevate your golf game.',
    'Classic and orthopedic support.',
    'Stylish and durable leather boots.',
    'Tactical and rugged.',
    'Work-ready and dependable.',
    'Tough and reliable construction.',
    'Work with confidence and comfort.',
    'Stylish and dependable.',
    'Quality and comfort combined.',
    'Tough and dependable footwear.',
    'Relax and unwind with style.',
    'Rainy days made comfortable.',
    'Versatile and durable sandal.',
    'Perfect for long hours on your feet.',
    'Comfort meets style.',
    'Ready for your outdoor adventures.',
    'Go from the mat to the street.',
    'Comfort and style for your feet.',
    'Minimalist and natural feel.',
    'Optimal performance and comfort.',
    'Ready for the trail and beyond.',
    'Western style and flair.',
    'Classic and timeless design.',
    'Elevate your sneaker game.',
    'Boat-ready and stylish.',
    'The last description'
];

const reviewAuthors = ['Alex', 'Jimmy', 'Anna', 'John', 'Emily', 'David', 'Olivia', 'Liam', 'Sophia', 'Noah'];
const reviewComments = [
    'Great product!',
    'Not satisfied with the quality.',
    'Awesome shoes.',
    'Terrible service.',
    'Best purchase ever.',
    'Disappointed with the price.'
];
const maxRating = 5;
const maxQuantity = 499;
const maxPrice = 100;

let products = [];
let reviewsArr = [];

for (let i = 0; i < 100; i++) {
    let review = new Review({
        author: reviewAuthors[Math.floor(Math.random() * reviewAuthors.length)],
        date: new Date(),
        comment: reviewComments[Math.floor(Math.random() * reviewComments.length)],
        rating: {
            service: Math.floor(Math.random() * maxRating) + 1,
            price: Math.floor(Math.random() * maxRating) + 1,
            value: Math.floor(Math.random() * maxRating) + 1,
            quality: Math.floor(Math.random() * maxRating) + 1
        }
    })
    reviewsArr.push(review);
}

for (let i = 0; i < 10; i++) {
    let product = new Product({
        name: productNames[i],
        description: productDescriptions[i],
        price: Number((Math.random()*maxPrice).toFixed(1)),
        brand: 'Nike',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        activeSize: 'M',
        quantity: Math.floor(Math.random() * maxQuantity) + 1,
        date: new Date(),
        reviews: [
            reviewsArr[Math.floor(Math.random() * reviewAuthors.length)],
            reviewsArr[Math.floor(Math.random() * reviewAuthors.length)],
            reviewsArr[Math.floor(Math.random() * reviewAuthors.length)],
            reviewsArr[Math.floor(Math.random() * reviewAuthors.length)]
        ],
        images: ['str1', 'str2', 'str3']
    })
    products.push(product);
}