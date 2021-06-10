const { Router } = require('express');
const { get } = require('../app');
const Order = require('../models/Order');

// export default Router.......
module.exports = Router() // app.post(....)
  .post('/api/v1/orders', async (req, res) => {
    try {
      const order = await Order.insert(req.params.quantity);
      res.send(order);
    } catch(err) {
      res.status(500).send(err);
    }
  })

// heartbeat route
// app.get('/', (req, res) => {
//   res.send('Famous Cats API');
// });

// app.get('/api/cats', async (req, res) => {
//   // use SQL query to get data...
//   try {
//     const data = await client.query(`
//       SELECT  c.id, c.name, type, url, year, lives,
//               is_sidekick as "isSidekick",
//               user_id as "userId",
//               u.name as "userName"
//       FROM    cats c
//       JOIN    users u
//       ON      c.user_id = u.id;
//     `);

//     // send back the data
//     res.json(data.rows); 
//   }
//   catch(err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });  
//   }
// });


  .get('/api/v1/orders', async (req, res) => {
    try {
      const order = await Order.select();
      res.send(order);
    } catch(err) {
      res.status(500).send(err);
    }
  });

// .put('/api/v1/orders/:id', async (req, res) => {
//   try {
//     const order = await Order.update(req.params.id);
//     res.send(order);
//   } catch(err) {
//     res.status(500).send(err);
//   }
// })











// class Dog {
//   name;
//   age;
//   weight;

//   constructor(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//   }

//   static legs() {
//     return 4;
//   }

//   sayName() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// // const spot = {
// //   name: 'spot',
// //   age: 5,
// //   weight: '20 lbs',
// // };
// const spot = new Dog('spot', 5, '20 lbs');
// spot.sayName();

// Dog.legs();
