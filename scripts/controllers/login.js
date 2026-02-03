import { login } from "../auth/auth.js";
import { router } from "../router.js";

document.getElementById("goRegister").onclick = e => {
  e.preventDefault();
  router("/register");
};

document.getElementById("loginForm").onsubmit = async e => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = await login(email, password);

  if (!user) return alert("Invalid Credentials");

  router(user.role === "user" ? "/tasks" : "/tasks");
};