import axios from "axios";
const API = "http://localhost:3001";

// Submit form data
export async function Register(body) {
  const response = await axios({
    method: "post",
    url: `${API}/signup`,
    data: body,
  });
  return response;
}
