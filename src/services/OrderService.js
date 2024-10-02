import axios from "axios";

const API_URL = "http://localhost:8081/orders";

export async function saveOrder(order) {
  return await axios.post(API_URL, order);
}

export async function getOrders() {
  return await axios.get(`${API_URL}`);
}

export async function getOrder(id) {
  return await axios.get(`${API_URL}/${id}`);
}

export async function udpateOrder(id, order) {
  return await axios.put(`${API_URL}/${id}`, order);
}

export async function deleteOrder(id) {
  return await axios.delete(`${API_URL}/${id}`);
}
