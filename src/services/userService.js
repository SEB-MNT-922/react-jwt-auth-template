const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;
import axios from "axios";

const index = async () => {
  try {
    // Change the fetch request so that it includes the Authorization header
    const res = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    const data = await res.data;

    if (data.err) {
      throw new Error(data.err);
    }

    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export { index };
