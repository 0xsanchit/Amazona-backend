import bcrypt from 'bcryptjs';

const data  = {
    users: [
        {
            name:'Sanchit',
            email:'admin@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name:'John',
            email:'customer@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin: false,
        },

    ],
    products: [
        {
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'../images/p1.jpg',
            price:120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            countInStock:0,
            description:'High Quality Product'
        },
        {
            name:'Adidas',
            category:'Shirts',
            image:'../images/p2.jpg',
            price:80,
            brand:'Nike',
            rating:5,
            numReviews:10,
            countInStock:1,
            description:'High Quality Product'
        },
        {
            name:'Fit Shirt',
            category:'Shirts',
            image:'../images/p3.jpg',
            price:100,
            brand:'Nike',
            rating:1.5,
            numReviews:12,
            countInStock:2,
            description:'High Quality Product'
        },
        {
            name:'Super Pant',
            category:'Pants',
            image:'../images/p4.jpg',
            price:90,
            brand:'Nike',
            rating:3.5,
            numReviews:15,
            countInStock:3,
            description:'High Quality Product'
        },
        {
            name:'Fit Pant',
            category:'Pants',
            image:'../images/p5.jpg',
            price:1200,
            brand:'Nike',
            rating:4.0,
            numReviews:20,
            countInStock:4,
            description:'High Quality Product'
        },
        {
            name:'Best Pant',
            category:'Pants',
            image:'../images/p5.jpg',
            price:1200,
            brand:'Nike',
            rating:4.4,
            numReviews:10,
            countInStock:5,
            description:'High Quality Product'
        },
    ]
}

export default data;