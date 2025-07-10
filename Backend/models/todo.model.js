const pool = require('../Database/db'); // เชื่อมต่อฐานข้อมูล

const Todo = {
  // สร้าง Todo ใหม่
  create: async (title) => {
    try {
      const result = await pool.query(
        'INSERT INTO todos (title, completed) VALUES ($1, false) RETURNING *',
        [title]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error; // ส่งต่อข้อผิดพลาด
    }
  },

  // อ่าน Todo ทั้งหมด
  findAll: async () => {
    try {
      const result = await pool.query('SELECT * FROM todos ORDER BY id DESC');
      return result.rows;
    } catch (error) {
      console.error('Error finding all todos:', error);
      throw error;
    }
  },

  // อ่าน Todo ตาม id
  findById: async (id) => {
    try {
      const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      console.error('Error finding todo by id:', error);
      throw error;
    }
  },

  // อัปเดตชื่อหรือสถานะ todo
  update: async (id, title, completed) => {
    try {
      const result = await pool.query(
        'UPDATE todos SET title = $1, completed = $2 WHERE id = $3 RETURNING *',
        [title, completed, id]
      );
      return result.rows[0];
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  },

  // ลบ Todo
  delete: async (id) => {
    try {
      const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  },
};

module.exports = Todo;
