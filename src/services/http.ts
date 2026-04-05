export const API_URL = "http://localhost:3000";

export async function httpGet(path: string) {
  const res = await fetch(`${API_URL}${path}`);
  return res.json();
}

export async function httpPost(path: string, body: any) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function httpDelete(path: string) {
  const res = await fetch(`${API_URL}${path}`, { method: "DELETE" });
  return res.json();
}
