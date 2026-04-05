import { httpGet, httpDelete } from "./http";

export function getSuppliers() {
  return httpGet("/suppliers");
}

export function deleteSupplier(id: number) {
  return httpDelete(`/suppliers/${id}`);
}
