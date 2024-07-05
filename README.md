### Team Responsibilities

- **Riri**: css resizing 
- **Parth**: About page, Products page, shopping cart UI
- **Anj**: backend 
- **Gaurav**: db

--- 

### Backlog

#### Front end
- Create a products page with filtering 
- Create a register/login page
- optimize css to handle resizing

#### Back end
- Fill mysql db with products and users
- develop a backend to retreive data from sql 

#### Infastructure
- domain routing
- write the meta tags

---

### DB Schema
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL
);

CREATE TABLE user_products (
    user_id INT,
    product_id INT,
    PRIMARY KEY (user_id, product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);


---

### API Endpoints
