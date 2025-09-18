
# ShoppyGlobe API

This is the backend API for the ShoppyGlobe e-commerce application, built using Node.js, Express.js, and MongoDB. The API provides a set of endpoints for managing products, handling a shopping cart, and implementing user authentication.

## Features

  * **Product Management**: Fetch and view product listings.
  * **Shopping Cart**: Add, update, and remove items from a user-specific shopping cart.
  * **User Authentication**: Secure user registration and login using JSON Web Tokens (JWT).
  * **Error Handling**: Robust error handling for all API routes.
  * **Database Integration**: Data persistence using MongoDB.

## Getting Started

### Prerequisites

Make sure you have the following installed:

  * [Node.js](https://nodejs.org/)
  * [MongoDB](https://www.mongodb.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/Bhushannasre/ShoppyGlobal-Backend.git]
    
    ```
2.  Install the required Node.js packages:
    ```bash
    npm install
    ```

### Running the API

1.  Ensure your local MongoDB instance is running.
2.  Start the server using Nodemon for automatic restarts:
    ```bash
    npm start
    ```
    The server will run on `http://localhost:5000`.

## API Endpoints

All API routes are prefixed with `/api`.

### User Authentication

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/register` | Registers a new user with a username, email, and password. |
| `POST` | `/api/login` | Authenticates a user and returns a JWT token. |

### Products

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Fetches a list of all products. |
| `GET` | `/api/products/:id` | Fetches details of a single product by its ID. |

### Cart (Protected Routes)

These routes require a valid JWT in the `Authorization` header (`Bearer <token>`).

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/cart` | Adds a new product to the cart or updates the quantity of an existing item. |
| `PUT` | `/api/cart/:id` | Updates the quantity of a specific item in the cart. |
| `DELETE` | `/api/cart/:id` | Removes an item from the cart. |

## API Testing with ThunderClient

Here are screenshots of the API endpoints tested with ThunderClient, demonstrating their functionality and correct responses.

### User Registration (`POST /api/register`)

### User Login (`POST /api/login`)

### Fetching All Products (`GET /api/products`)

### Fetching a Single Product (`GET /api/products/:id`)

### Adding an Item to Cart (`POST /api/cart`)

### Updating a Cart Item (`PUT /api/cart/:id`)

### Deleting a Cart Item (`DELETE /api/cart/:id`)

### Accessing Protected Route Without Token (Example)


### Users Collection

### Products Collection

### Carts Collection

-----

## Author

Bhushan Nasre

