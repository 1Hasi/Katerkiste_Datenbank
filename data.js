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
      name: 'Gucci Vase',
      bild: '/images/p1.jpg',
      preis: 100,
      beschreibung: 'sehr schöne luxus Vase',
    },
    
      {
      name: 'Merkels Hammer',
      bild: '/images/p2.jpg',
      preis: 1500,
      beschreibung: 'machtvolles politisches Instrument',
    },

    {
      
      name: 'Gaming PC',
      bild: '/images/p3.jpg',
      preis: 100,
      beschreibung: 'geeignet für Spiele der neusten generation',
    },
    {
      
      name: 'VW Polo Felgen R14',
      bild: '/images/p4.jpg',
      preis: 100,
      beschreibung: 'Kaum genutzte Felgen für VW Polo',
    },
  ],
};
export default data;