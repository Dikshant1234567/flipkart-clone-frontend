import axios from "axios";

// const Url = "http://localhost:8000";

const Url = "https://flipkart-clone-backend-6riv.onrender.com";

export const SinUpApi = async (data) => {
  try {
   return await axios.post(`${Url}/sinup`, data);
  } catch (err) {
    console.log("error in sinup api", err);
  }
};

export const LoginApi = async (data) => {
  try {
   return await axios.post(`${Url}/login`, data);
  } catch (err) {
    console.log("error while Login api", err);
  }
};
