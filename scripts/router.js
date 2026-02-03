import { getSession } from "./storage/storage.js";

const publicRoutes = ["/login", "/register"];

export async function router(path) {
  const app = document.getElementById("app");
  const session = getSession();

  // if not session and isn't public...
  if (!session && !publicRoutes.includes(path)) {
    path = "/login";
  }

  if (session) {
    // user denied to admin views
    if (session.role === "user" && path === "/admin") {
      path = "/tasks";
    }

    // Admin no view users views
    if (session.role === "admin" && ["/tasks", "/tasks", "/profile"].includes(path)) {
      path = "/admin";
    }


  }

  const html = await fetch(`./views${path}.html`).then(r => r.text());
  app.innerHTML = html;
  //change routes
  if (path === "/login") import("../scripts/controllers/login.js");
  if (path === "/register") import("../scripts/controllers/register.js");
  if (path === "/tasks") import("../scripts/controllers/tasks.js");
  if (path === "/profile") import("../scripts/controllers/profile.js");
  if (path === "/admin") import("../scripts/controllers/admin.js");

}