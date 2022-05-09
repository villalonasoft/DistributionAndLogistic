import { ErrorResponse } from "./errorResponse.model";

export class Response<T>{
data:T;
error:ErrorResponse;
}
