import { httpGet } from "./http";

export function getSales() {
  return httpGet("/sales");
}

export function getTodaySales() {
  return httpGet("/sales/today");
}
