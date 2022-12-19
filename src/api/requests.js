import axios from "axios";
const bankAPI = axios.create({
  baseURL: "https://bank-api-oedo.onrender.com",
});

export const createUser = async (data) => {
  try {
    const { data: user } = await bankAPI.post("/users", data);
    console.log(user);
  } catch (error) {
    console.log(error);
    //console.error(error.message);
    //console.error(error.response.data);
  }
};
export const getAllUsers = async () => {
  try {
    const { data: users } = await bankAPI.get("/users");
    console.log(users);
  } catch (error) {
    console.log(error.message);
    console.error(error.response.data);
  }
};
export const createAccount = async (userPassportID, data) => {
  try {
    const account = await bankAPI.post(`/accounts/${userPassportID}`, data);
    return account;
  } catch (error) {
    console.log(error.message);
    console.error(error.response.data);
  }
};
export const loginAccount = async (accountID, accountPassword) => {
  try {
  } catch (error) {
    console.log(error.message);
    console.error(error.response.data);
  }
};
