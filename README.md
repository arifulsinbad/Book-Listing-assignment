## BOOK-LISTING-ASSIGNMENT

#### Live Link: https://book-listing-assignment-arifulsinbad.vercel.app

#### Application Routes:

##### USER

- api/v1/auth/signup (POST)

- api/v1/auth/signin (POST)

- api/v1/users (GET)

- api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database

- api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)

- api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

- api/v1/profile (GET)

##### CATEGORY

- api/v1/categories/create-category (POST)

- api/v1/categories (GET)

- api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database

- api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)

- api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

##### BOOKS

- api/v1/books/create-book (POST)

- api/v1/books (GET)

- api/v1/books/:categoryId/category (GET)

- api/v1/books/:id (GET)

- api/v1/books/:id (PATCH)

- api/v1/books/:id (DELETE)

##### ORDERS

- api/v1/orders/create-order (POST)

- api/v1/orders (GET)

- api/v1/orders/:orderId (GET)

- api/v1/order (GET - CUSTOMER)
