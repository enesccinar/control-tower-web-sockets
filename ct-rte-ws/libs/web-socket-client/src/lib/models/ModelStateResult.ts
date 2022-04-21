import { IResult } from './Result.js';

export interface IModelError {
  propertyPath: string;
  error: string;
}

export interface IModelSateResult<T> extends IResult<T> {
  errors: IModelError[];
}
