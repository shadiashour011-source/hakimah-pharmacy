import { httpGet, httpDelete } from "./http";

export function getAllMedicines() {
  return httpGet("/inventory");
}

export function getFEFOList() {
  return httpGet("/inventory/fefo");
}

export function deleteMedicine(id: number) {
  return httpDelete(`/inventory/${id}`);
}

export function getAlerts() {
  return httpGet("/inventory/alerts");
}
