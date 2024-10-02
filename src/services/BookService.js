import axios from "axios";

const API_URL = "http://localhost:8081/books";

export async function saveBook(book) {
  return await axios.post(API_URL, book);
}

export async function getBooks() {
  return await axios.get(`${API_URL}`);
}

export async function getBook(id) {
  return await axios.get(`${API_URL}/${id}`);
}

export async function udpateBook(id, book) {
  return await axios.put(`${API_URL}/${id}`, book);
}

export async function deleteBook(id) {
  return await axios.delete(`${API_URL}/${id}`);
}
