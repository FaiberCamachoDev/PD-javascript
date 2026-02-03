# CRUDTASK - Task Manager SPA

web aplication **SPA (Single Page Application)** for crud works, developed with **HTML**, **Tailwind CSS**, **JavaScript Vanilla** & **JSON Server** like fake API.

auth system, role control (**admin** & **user**) y operations CRUD about works.

---

## 📌 Technologys:

- HTML5 Semántico  
- Tailwind CSS  
- JavaScript Vanilla (ES Modules)  
- JSON Server  
- Arquitectura modular  
- SPA Routing (cliente)

---

## 🚀 Instalation

1. clone or download the project.
2. Install JSON-SERVER:

```bash
npm install -g json-server
Execute the server:

json-server --watch db.json --port 3000
open the file:

index.html
(using Live Server )

👤 Users
Admin:
{
  "email": "admin@mega.com",
  "password": "1234",
  "role": "admin"
}


🔐 Autenticación
Login by email & password

Sesión guardada en localStorage

Protección de rutas según rol

🧭 SPA routes
Route	Desc
/login	Inicio de sesión
/register	Registro
/tasks	user panel
/tasks	Crear tareas
/profile	profile user
/admin	admin panel
📝 Functions
user
Register

sign in

watch works

Create works

Edite work

delete works

watch profile

Administrador
Ver todos los usuarios

Ver todas las tareas
delete user

delete cards

⚙️ Arquitectura
SPA sin recargar página

own router

code module:

auth.js: login y registro

api.js: HTTP

router.js: navegación SPA

controllers: lógica por vista

🎨 Estilos
Tailwind CSS por CDN

Responsive

📄 data base(db.json)
{
  "users": [
    "tasks": []
  ],
  
}
✅ 
✔ SPA

✔ CRUD

✔ Module

✔ HTML semantic

✔ Vanilla JS

✔ Tailwind

✔ JSON Server

✔ Roles

✔ protect routes



👨‍💻 Autor
Desarrollado por:
Faiber Andres Camacho

Proyecto realizado como examen práctico de JavaScript SPA.