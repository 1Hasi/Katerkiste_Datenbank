import bcrypt from 'bcrypt';

const data = {
  users: [
    {
      name: 'Hasan',
      email: 'hajih.wwi20@student.dhbw-heidenheim.de',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Max',
      email: 'hettlerm.wwi20@student.dhbw-heidenheim.de',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Wein',
      bild: '/images/p1.png',
      preis: 100,
      beschreibung: 'dennis wein',
    },
    
    
    
  ],
};
export default data;