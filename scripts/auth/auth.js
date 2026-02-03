import { apiGet, apiPost } from "../api/api.js";
import { saveSession } from "../storage/storage.js";

export async function login(email, password) {
    const users = await apiGet(`/users?email=${email}&password=${password}`);
    if (users.length === 0) return null;
    saveSession(users[0]);
    return users[0];
}

export async function register(user) {
    user.role = "user";
    return apiPost("/users", user);
}