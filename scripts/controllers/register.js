import { register } from "../auth/auth.js";
import { router } from "../router.js";

document.getElementById("registerForm").onsubmit = async e => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let tasks = []

    await register({ name, email, password, tasks });
    router("/login");
};