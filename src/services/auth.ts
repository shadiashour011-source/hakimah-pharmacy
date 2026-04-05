import { httpPost } from "./http";

export function login(data: any) {
  return httpPost("/auth/login", data);
}
