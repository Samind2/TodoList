import api from "./api";

const API_URL = "/todos";

// สร้าง Todo ใหม่
const createTodo = async (title) => {
  return await api.post(API_URL, { title });
};

// อ่าน Todo ทั้งหมด
const getAllTodos = async () => {
  return await api.get(API_URL);
};

// อัปเดต Todo ตาม id
const updateTodo = async (id, data) => {
  return await api.put(`${API_URL}/${id}`, data);
};

// ลบ Todo
const deleteTodo = async (id) => {
  return await api.delete(`${API_URL}/${id}`);
};

const TodoListService = {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo
};

export default TodoListService;
