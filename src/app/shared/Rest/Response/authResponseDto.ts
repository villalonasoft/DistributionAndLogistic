import { Result } from "./result";

export interface AuthResponseDto {
  result: Result;
  token: string;
  type: string;
}
