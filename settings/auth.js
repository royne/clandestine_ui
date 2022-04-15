import { BASE_URL, getUser } from './base'

const TOKEN_KEY = "CLAND_TOKEN";

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const deleteToken = () => localStorage.removeItem(TOKEN_KEY);

export async function login(credentials) {
  try {
    const formData = { email: credentials.email, password: credentials.password }
    const response = await fetch(`${BASE_URL}/user_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ auth: formData }),
    });
    const data = await response.json();
    setToken(data.jwt);
    const userData = await getUser();
    return userData
  } catch (error) {
    console.log(error);
  }
}

export default { setToken, getToken, deleteToken, login };
