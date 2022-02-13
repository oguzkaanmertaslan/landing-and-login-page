import axios from "axios";

const instance = axios.create({
  baseURL: "https://61d415838df81200178a8a66.mockapi.io",
});

const createUser = (newUser) => {
  return instance.post("/login/", newUser);
};
const getAllUsers = async () => {
  const response = await instance.get("/login");
  return await response.data;
};
const updateUser = (id, updatedPassword) => {
  return instance.put(`/login/${id}`, updatedPassword);
};
export { createUser, getAllUsers, updateUser };
