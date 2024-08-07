import products from '../components/Products/ProductData';

const FILE_KEY = 'data';
const CURRENT_USER_KEY = 'currentUser';

const users = [
  { email: 'user1@gmail.com', password: 'password1', items: [{ name: 'JANET CRAIG COMPACTA', quantity: 2 }] },
  { email: 'user2@gmail.com', password: 'password2', items: [] },
  // Add more users if needed
];

const initializeDatabase = () => {
  const db = { users: [], products };

  users.forEach(user => {
    const userItems = user.items.map(item => {
      const product = products.find(product => product.name === item.name);
      if (product) {
        return { ...item, price: product.price };
      } else {
        throw new Error(`Product ${item.name} not found in products array`);
      }
    });
    db.users.push({ ...user, items: userItems });
  });

  localStorage.setItem(FILE_KEY, JSON.stringify(db));
  return db;
};

const readFile = () => {
  const fileContent = localStorage.getItem(FILE_KEY);
  if (!fileContent) {
    return initializeDatabase();
  }
  return JSON.parse(fileContent);
};

const writeFile = (content) => {
  localStorage.setItem(FILE_KEY, JSON.stringify(content));
};

export const findUser = (email) => {
  const db = readFile();
  return db.users.find(user => user.email === email);
};

export const addUser = (user) => {
  const db = readFile();
  db.users.push({ ...user, items: [] });
  writeFile(db);
};

export const updateUser = (email, updatedUser) => {
  const db = readFile();
  const userIndex = db.users.findIndex(user => user.email === email);
  if (userIndex !== -1) {
    db.users[userIndex] = { ...updatedUser, email, password: db.users[userIndex].password };
    writeFile(db);
  }
};

export const getCurrentUser = () => {
  const userJson = localStorage.getItem(CURRENT_USER_KEY);
  return userJson ? JSON.parse(userJson) : null;
};

export const setCurrentUser = (user) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const initializeFile = initializeDatabase;
