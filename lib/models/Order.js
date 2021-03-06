
const pool = require('pool');

// 1. define the shape of our data
// 2. define methods to access that data (CRUD)
class Order {
  id;
  quantityOfItems;

  constructor(row) {
    this.id = row.id;
    this.quantityOfItems = row.quantity_of_items;
  }

  // static method
  // instance method
  static async insert(quantityOfItems) {
    const { rows } = await pool.query(
      'INSERT INTO orders (quantity_of_items) VALUES ($1) RETURNING *',
      [quantityOfItems]
    );

    // rows = [{ id: '1', quantity_of_items: 10 }]
    // { id: '1', quantityOfItems: 10 }
    return new Order(rows[0]);
  }

//altered methods to be more readable structure, easy on the eyes
static async select() {
    const { rows } = await pool.query(
      `SELECT *
       FROM orders  
       `);

    return new Order(rows);
  }


  static async update(id) {
    const { rows } = await pool.query(
      `UPDATE orders 
        SET (quantity_of_items) 
        WHERE id = $1 
        RETURNING *
      `,
      [id]
    )
    
    return new Order(rows[0]);
  }


  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM orders 
        WHERE id = $1 
        RETURNING *
      `,
      [id]
    );

    
    return new Order(rows[0]);
  }

module.exports = Order;