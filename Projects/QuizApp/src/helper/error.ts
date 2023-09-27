import { ObjectExpression } from "mongoose";

export default class ProjectError extends Error {
  private _status: number = 0;
  private _data: object | [] = {};

  get statuscode(): number {
    return this._status;
  }
  set statuscode(code: number) {
    this._status = code;
  }

  get data(): Object {
    // whenever write the data directly send her on object called getter method
    return this._data;
  }
  set data(errorData: object) {
    // if any one send the data if any error data send than sent as data called setter method
    this._data = errorData;
  }
}
