import { router } from "../router.js";
document.getElementById("goDashboard").onclick = e => {
  e.preventDefault();
  router("/tasks");
};