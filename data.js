import bcrypt from 'bcrypt';

const data = {
  users: [
    
    {
      name: 'Prüfer',
      email: 'pruefer@dhbw-heidenheim.de',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
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