module.exports = { Product, Review, searchProducts, sortProducts };

const idLength = 1000000000;
const reviewIdentifier = 'R-';
const productIdentifier = 'P-';
const numberOfCategoriesInRating = 4;

function Product({
    name,
    description,
    price,
    brand,
    sizes,
    activeSize,
    quantity,
    date,
    reviews,
    images
}) {
    this.id = getRandomID(idLength, productIdentifier);

    validateString(name, 'name');
    validateString(description, 'description');
    validateNumber(price, 'price');
    validateString(brand, 'brand');
    validateArray(sizes, 'sizes');
    validateString(activeSize, 'activeSize');
    validateNumber(quantity, 'quantity');
    validateDate(date);
    validateArray(reviews, 'reviews');
    validateArray(images, 'images');

    this.name = name;
    this.getName = function () {
        return this.name;
    }
    this.setName = function (newName) {
        validateString(newName, 'name');
        this.name = newName;
    }
 
    this.description = description;
    this.getDescription = function () {
        return this.description;
    }
    this.setDescription = function (newDesc) {
        validateString(newDesc, 'description');
        this.description = newDesc;
    }

    this.price = price;
    this.getPrice = function () {
        return this.price;
    }
    this.setPrice = function (newPrice) {
        validateNumber(newPrice, 'price');
        this.price = newPrice;
    }
    
    this.brand = brand;
    this.getBrand = function () {
        return this.brand;
    }
    this.setBrand = function (newBrand) {
        validateString(newBrand, 'brand');
        this.brand = newBrand;
    }

    this.sizes = sizes;
    this.getSizes = function () {
        return this.sizes;
    }
    this.setSizes = function (newSizes) {
        validateArray(newSizes, 'sizes');
        this.sizes = newSizes;
    }

    this.activeSize = activeSize;
    this.getActiveSizes = function () {
        return this.activeSize;
    }
    this.setActiveSizes = function (newActiveSizes) {
        validateString(newActiveSizes, 'ActiveSize');
        this.activeSize = newActiveSizes;
    }

    this.quantity = quantity;
    this.getQuantity = function () {
        return this.quantity;
    }
    this.setQuantity = function (newQuantity) {
        validateNumber(newQuantity, 'quantity');
        this.quantity = newQuantity;
    }

    this.date = date;
    this.getDate = function () {
        return this.date;
    }
    this.setDate = function (newDate) {
        validateDate(newDate, 'date');
        this.date = newDate;
    }

    this.reviews = reviews;
    this.getReviews = function () {
        return this.reviews;
    }
    this.setReviews = function (newReviews) {
        validateArray(newReviews, 'reviews');
        this.reviews = newReviews;
    }

    this.images = images;
    this.getImages = function () {
        return this.images;
    }
    this.setImages = function (newImages) {
        validateArray(newImages, 'images');
        this.images = newImages;
    }

    this.getReviewByID = function (reviewID) {
        return this.reviews.find(item => item.getId() === reviewID);
    }

    this.getImage = function (imageKey) {
        return imageNumber !== undefined ? this.images[imageNumber] : images[0];
    }

    this.addSize = function (newSize) {
        this.sizes.push(newSize);
    }

    this.deleteSize = function (sizeKey) {
        this.sizes.splice(sizeKey, 1);
    }

    this.addReview = function (newReview) {
        this.reviews.push(newReview);
    }

    this.deleteReview = function (reviewKey) {
        this.reviews.splice(reviewKey, 1);
    }

    this.getAverageRating = function() {
        let totalRating = 0;
        this.reviews.forEach(review => {
            totalRating += findAverageRatingOfOneReview(review.getRating());
        });
        return totalRating / this.reviews.length;
    }
}

function findAverageRatingOfOneReview(rating) {
    let sum = 0;
    Object.keys(rating).forEach(category => {
        sum += rating[category];
    });
    return sum / numberOfCategoriesInRating;
}

function Review({
    author,
    date,
    comment,
    rating
}) {
    this.id = getRandomID(idLength, reviewIdentifier);
    this.getId = function () {
        return this.id;
    }

    validateString(author, 'review author');
    validateDate(date);
    validateString(comment, 'review comment');
    validateAssociativeArray(rating, 'ratings')

    this.author = author;
    this.getAuthor = function () {
        return this.author;
    }
    this.setAuthor = function (newAuthor) {
        validateString(newAuthor, 'review author');
        this.author = newAuthor;
    }

    this.date = date;
    this.getDate = function () {
        return this.date;
    }
    this.setDate = function (newDate) {
        validateDate(newDate, 'review date');
        this.date = newDate;
    }

    this.comment = comment;
    this.getComment = function () {
        return this.comment;
    }
    this.setComment = function (newComment) {
        validateString(newComment, 'review comment');
        this.comment = newComment;
    }

    this.rating = rating;
    this.getRating = function () {
        return this.rating;
    }
    this.setRating = function (newRating) {
        validateArray(newRating, ' ratings');
        this.rating = newRating;
    }
}

function getRandomID(maxLength, productIdentifier) {
    return productIdentifier.charAt(0) + '-' + Math.floor(Math.random() * maxLength);
}

function validateString(value, propertyName) {
    if (typeof value !== 'string' || value.length === 0) {
        throw new Error(`Invalid ${propertyName}`);
    }
}

function validateNumber(value, propertyName) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0) {
        throw new Error(`Invalid ${propertyName} input`);
    }
}

function validateArray(value, propertyName) {
    if (!Array.isArray(value) || value.length === 0) {
        throw new Error(`Invalid input for the ${propertyName}.`);
    }
}

function validateAssociativeArray(value, propertyName) {
    if (typeof value !== 'object' || Array.isArray(value) || value === null) {
        throw new Error(`Invalid ${propertyName}. ${propertyName} must be an associative array (object).`);
    }
}

function validateDate(value) {
    if (!(value instanceof Date)) {
        throw new Error(`Invalid date imput.`);
    }
}

function searchProducts(products, search) {
    search = search.toLowerCase().replace(/[^\w\s]/gi, '').trim();
    let result = products.filter(product =>
        product
            .getName()
            .toLowerCase()
            .includes(search)
        ||
        product
            .getDescription()
            .toLowerCase()
            .includes(search)
    );
    return result;
}

function sortProducts(products, sortRule) {
    switch (sortRule) {
        case 'Name':
            return products.slice().sort((a, b) => a.getName().localeCompare(b.getName()));
        case 'Price':
            return products.slice().sort((a, b) => a.getPrice() - b.getPrice());
        case 'ID':
            return products.slice().sort((a, b) => a.id.localeCompare(b.id));
        default:
            throw new Error('The sort rule is not valid. Valid rules are: Name, Price and ID')
    }
}