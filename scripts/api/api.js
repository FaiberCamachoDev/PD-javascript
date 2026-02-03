const API = "http://localhost:3000";

export async function apiGet(endpoint) {
    return fetch(API + endpoint).then(r => r.json());
}

export async function apiPost(endpoint, data) {
    return fetch(API + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function apiPut(endpoint, data) {
    return fetch(API + endpoint, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
    }).then(r => r.json());
}

export async function apiDelete(endpoint) {
    return fetch(API + endpoint, { method: "DELETE" });
}