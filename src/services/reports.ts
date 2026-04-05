import { httpGet } from "./http";

export function getDailyReport() {
  return httpGet("/reports/daily");
}

export function getMonthlyReport() {
  return httpGet("/reports/monthly");
}
