# eshop

The project is aimed at developing from scratch REST API endpoints of various functionalities required for the web app Eshop. The application will interact with and store the data in the MongoDB database. Also, the project has to be implemented using Express.js and Node.js.


## Configuration 

Please configure the .env file with your own credentials before running the project. Replace the placeholders with your actual values:

```sh
PORT=8000
DB_URL=your_database_url
secret=jwt_secret_key
```

The 'ADMIN' user has to be provided in pre-setup data. The username for the admin user is 'admin',
the email is 'admin@upgrad.com' and the password is 'password'.

Configure it manually into mongodb database or 
<You can add it into database as user then change its role to "ADMIN">. Note: Use API enpoint /eshop/api/v1/auth/signup
```sh
{
  "_id": {
    "$oid": "64383b3ec33ee39c0f6885cb"
  },
  "userId": "admin",
  "email": "admin@upgrad.com",
  "firstName": "admin",
  "lastName": "admin",
  "password": "$2a$08$fo1mKTqe8I2hKZY2OBAnBeDlxllB5L7XQyHzCBqSnQSrrksHrIthy",
  "contactNumber": "9764589634",
  "role": "ADMIN",
  "createdAt": {
    "$date": "2023-04-13T17:26:22.150Z"
  },
  "updatedAt": {
    "$date": "2023-04-13T17:26:22.150Z"
  }
}
```

## Installation

this app requires [Node.js](https://nodejs.org/) v18+ to run.

Install the dependencies and devDependencies and start the server.

Before starting the server please ensure mongodb server is locally installed and running on the default port

```sh
cd eshop
npm install
npm run start or npm run dev
```

## API endpoints 
1. Sign up request
- The user registered by the user will have the role of 'USER' by default
```sh
POST /eshop/api/v1/auth/signup  
Sample request body: 
{
    "userId": "pratham06",
    "password": "Prathamesh@123",
    "firstName": "Prathamesh",
    "lastName": "Lakhapati",
    "email": "prathmeshlakhpati@gmail.com",
    "contactNumber": 9764941234
}

Sample response body 
{
    "_id": "643902bb7fc2c7f8702514f4",
    "firstName": "Prathamesh",
    "lastName": "Lakhapati",
    "email": "prathmeshlakhpati@gmail.com"
}
```

2. Sign in request
```sh
POST /eshop/api/v1/auth/signin  
Sample request body: 
{
    "email": "prathmeshlakhpati@gmail.com",
    "password": "Prathamesh@123",
}

Sample response body 
{
    "email": "prathmeshlakhpati@gmail.com",
    "name": "Prathamesh Lakhapati",
    "isAuthenticated": true,
    "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzkwMmJiN2ZjMmM3Zjg3MDI1MTRmNCIsInVzZXJJZCI6InByYXRoYW0wNiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjgxNDU3OTkyLCJleHAiOjE2ODE1NDQzOTJ9.uvZ1_KPdHEURyxjgmWB02l_Arwj-pWciUroaLjF3vP8"
}
```

3. Adding Shipping Address

```sh
POST /eshop/api/v1/user/shippingAddress

Sample request body: 

- Include the x-access-token field in the header of your request with the authentication token received after signing in.  
In this case, the token value is  
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzkwMmJiN2ZjMmM3Zjg3MDI1MTRmNCIsInVzZXJJZCI6InByYXRoYW0wNiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjgxNDU3OTkyLCJleHAiOjE2ODE1NDQzOTJ9.uvZ1_KPdHEURyxjgmWB02l_Arwj-pWciUroaLjF3vP8  

{
    "name": "Jagdish Deshmukh",
    "contactNumber": 9091929394,
    "street": "Wardha Road",
    "landmark": "Near VNIT",
    "city": "Nagpur",
    "state": "Maharashtra",
    "zipcode": "440010"
}

Sample response body: 
{
    "_id": "6439067a9e3a8391233bde88",
    "zipcode": 440010,
    "state": "Maharashtra",
    "street": "Wardha Road",
    "landmark": "Near VNIT",
    "city": "Nagpur",
    "contactNumber": "9091929394",
    "name": "Jagdish Deshmukh",
    "eshopUser": null,
    "createdAt": "2023-04-14T07:53:30.278Z",
    "updatedAt": "2023-04-14T07:53:30.278Z"
}
```

4. Search for products using query parameters 
```sh
GET /eshop/api/v1/products?category=electronics&direction=ASC&name=samsung&sortBy=price&pageNo=1&pageSize=5

Default values : 
      category = "",
      direction = "DESC",
      name = "",
      sortBy = "_id",
      pageNo = 1,
      pageSize = 5,

Sample request body : not required 

Sample response body: 
{
    "content": [
        {
            "_id": "64383c08c33ee39c0f6885de",
            "name": "Samsung Galaxy S21",
            "availableItems": 50,
            "price": {
                "$numberDecimal": "700.0"
            },
            "category": "Electronics",
            "description": "The Samsung Galaxy S21 is a flagship smartphone with a 6.2-inch AMOLED display, Snapdragon 888 processor, 8GB RAM, and 128GB storage. It also features a triple-camera setup with 12MP wide, 12MP ultrawide, and 64MP telephoto lenses, as well as a 10MP front-facing camera. The phone runs Android 11 with Samsung One UI 3.1 and has a 4000mAh battery with fast charging and wireless charging support.",
            "imageUrl": "https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-s21/gallery/in-galaxy-s21-5g-g991-sm-g991bzvdinu-388966505?$720_576_PNG$",
            "manufacturer": "Samsung",
            "createdAt": "2023-04-13T17:29:44.603Z",
            "updatedAt": "2023-04-13T17:29:44.603Z"
        },
        {
            "_id": "64383c2ac33ee39c0f6885e8",
            "name": "Samsung 55-Inch 4K Ultra HD Smart TV",
            "availableItems": 2,
            "price": {
                "$numberDecimal": "69999.0"
            },
            "category": "Electronics",
            "description": "Experience your favorite movies and TV shows like never before with this Samsung 4K Ultra HD Smart TV. With stunning picture quality and a range of smart features, it's the ultimate entertainment center.",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91wR4P%2BgNcL._AC_SL1500_.jpg",
            "manufacturer": "Samsung",
            "createdAt": "2023-04-13T17:30:18.198Z",
            "updatedAt": "2023-04-13T17:30:18.198Z"
        }
    ],
    "pageable": {
        "sort": {
            "sorted": true,
            "unsorted": false,
            "empty": false
        },
        "offset": 0,
        "pageNumber": 1,
        "pageSize": 5,
        "unpaged": false,
        "paged": true
    },
    "totalPages": 1,
    "totalElements": 2,
    "last": true,
    "size": 5,
    "number": 1,
    "sort": {
        "sorted": true,
        "unsorted": false,
        "empty": false
    },
    "numberOfElements": 2,
    "first": true,
    "empty": false
}
```

5. Get product categories 
```sh
GET /eshop/api/v1/products/categories

Sample request body : Not required

Sample response body :
[
    "Apparel",
    "Electronics",
    "Furniture",
    "Personal Care"
]
```

6. Get Product by Id
```sh
GET /eshop/api/v1/products/:productId

Sample request body : Not required but productId should be replaced with the product object id added into mongodb database
for example : /eshop/api/v1/products/64383b7fc33ee39c0f6885ce

Sample response body : 
{
    "_id": "64383b7fc33ee39c0f6885ce",
    "name": "Sony Alpha A7 III Mirrorless Camera",
    "availableItems": 13,
    "price": {
        "$numberDecimal": "169990.0"
    },
    "category": "Electronics",
    "description": "The Sony Alpha A7 III Mirrorless Camera is a versatile camera that comes with a full-frame sensor, a fast autofocus system, and 4K video recording capabilities. It has a 24.2-megapixel resolution and a wide ISO range of 100-51200. The camera is lightweight and easy to handle, making it perfect for travel photography.",
    "imageUrl": "https://www.bhphotovideo.com/images/images2500x2500/sony_ilce7m3_b_alpha_a7_iii_mirrorless_1391576.jpg",
    "manufacturer": "Sony",
    "createdAt": "2023-04-13T17:27:27.215Z",
    "updatedAt": "2023-04-13T18:29:58.055Z"
}
```

7. Save product into mongodb database 
```sh
POST /eshop/api/v1/products

- To save products into the database, only the admin has access.
- Therefore, use the admin ID that was configured at the beginning. (Please refer to the Configuration section for more information.)
- Include the x-access-token field in the header of your request with the authentication token received after signing in.

Sample request body : 
{
    "name": "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    "category": "Electronics",
    "price": 299.99,
    "description": "Experience the next level of silence with Sony WH-1000XM4 wireless noise cancelling headphones. These headphones feature industry-leading noise cancellation technology, exceptional sound quality, and smart listening features like adaptive sound control and voice assistant compatibility.",
    "manufacturer": "Sony",
    "availableItems": 10,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
}

Sample response body : 
{
    "name": "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    "availableItems": 10,
    "price": {
        "$numberDecimal": "300.0"
    },
    "category": "Electronics",
    "description": "Experience the next level of silence with Sony WH-1000XM4 wireless noise cancelling headphones. These headphones feature industry-leading noise cancellation technology, exceptional sound quality, and smart listening features like adaptive sound control and voice assistant compatibility.",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    "manufacturer": "Sony",
    "_id": "64390e9c9e3a8391233bde92",
    "createdAt": "2023-04-14T08:28:12.086Z",
    "updatedAt": "2023-04-14T08:28:12.086Z"
}
```

8. Update product details 
```sh
PUT /eshop/api/v1/products/:productId

- To update products into the database, only the admin has access.
- Therefore, use the admin ID that was configured at the beginning. (Please refer to the Configuration section for more information.)
- Include the x-access-token field in the header of your request with the authentication token received after signing in.

Sample request body : Do replace productId with the id we get after adding the product above.
In this case, the productId is 64390e9c9e3a8391233bde92.
{
    "price": "500"
}

Sample response body : 
{
    "_id": "64390e9c9e3a8391233bde92",
    "name": "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    "availableItems": 10,
    "price": {
        "$numberDecimal": "500"
    },
    "category": "Electronics",
    "description": "Experience the next level of silence with Sony WH-1000XM4 wireless noise cancelling headphones. These headphones feature industry-leading noise cancellation technology, exceptional sound quality, and smart listening features like adaptive sound control and voice assistant compatibility.",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    "manufacturer": "Sony",
    "createdAt": "2023-04-14T08:28:12.086Z",
    "updatedAt": "2023-04-14T08:32:45.804Z"
}
```

9. Delete product 
```sh
DELETE /eshop/api/v1/products/:productId

- To delete products into the database, only the admin has access.
- Therefore, use the admin ID that was configured at the beginning. (Please refer to the Configuration section for more information.)
- Include the x-access-token field in the header of your request with the authentication token received after signing in.

Sample request body : Not required, but do replace productId with the id we get after adding the product above.
In this case, the productId is 64390e9c9e3a8391233bde92.

Sample response body : 
{
    "message": "Product with ID - 64390e9c9e3a8391233bde92 deleted successfully!"
}
```

10. Place order or Create order 
```sh 
POST /eshop/api/v1/orders

- To place order, only the user has access.
- Therefore, use the user ID. If you don't have please create one by signing up.
- Include the x-access-token field in the header of your request with the authentication token received after signing in.

Sample request body : 
{
    "addressId": "64383a38c33ee39c0f6885c5", // Id of Delivery address
    "productId": "64383b7fc33ee39c0f6885ce", // Product Id
    "quantity": 2 // quantity of products to be ordered
}

Sample response body : 
{
    "_id": "6439122f9e3a8391233bde9a",
    "quantity": 2,
    "amount": 339980,
    "productId": {
        "_id": "64383b7fc33ee39c0f6885ce",
        "name": "Sony Alpha A7 III Mirrorless Camera",
        "availableItems": 11,
        "price": {
            "$numberDecimal": "169990.0"
        },
        "category": "Electronics",
        "description": "The Sony Alpha A7 III Mirrorless Camera is a versatile camera that comes with a full-frame sensor, a fast autofocus system, and 4K video recording capabilities. It has a 24.2-megapixel resolution and a wide ISO range of 100-51200. The camera is lightweight and easy to handle, making it perfect for travel photography.",
        "imageUrl": "https://www.bhphotovideo.com/images/images2500x2500/sony_ilce7m3_b_alpha_a7_iii_mirrorless_1391576.jpg",
        "manufacturer": "Sony",
        "createdAt": "2023-04-13T17:27:27.215Z",
        "updatedAt": "2023-04-14T08:43:27.934Z"
    },
    "shippingAddressId": {
        "_id": "6439067a9e3a8391233bde88",
        "zipcode": 440010,
        "state": "Maharashtra",
        "street": "Wardha Road",
        "landmark": "Near VNIT",
        "city": "Nagpur",
        "contactNumber": "9091929394",
        "name": "Jagdish Deshmukh",
        "eshopUser": "64382783e493ba2336f754b5",
        "createdAt": "2023-04-14T07:53:30.278Z",
        "updatedAt": "2023-04-14T07:53:30.278Z"
    },
    "userId": {
        "_id": "643902bb7fc2c7f8702514f4",
        "userId": "pratham06",
        "email": "prathmeshlakhpati@gmail.com",
        "firstName": "Prathamesh",
        "lastName": "Lakhapati",
        "password": "$2a$08$WIxGAZt.wpXGiz5JvTNvoulZgRZLIjJQtK/XcAGuUuq.64vNqYTEi",
        "contactNumber": "9764946063",
        "role": "USER",
        "createdAt": "2023-04-14T07:37:31.990Z",
        "updatedAt": "2023-04-14T07:37:31.990Z"
    },
    "orderDate": "2023-04-14T08:43:27.895Z",
    "__v": 0
}
```
