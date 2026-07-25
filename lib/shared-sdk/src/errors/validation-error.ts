import type { ZodIssue } from "zod";
import { AppError } from "./app-error.js";
import { ErrorCode } from "../constants/error-codes.js";

export type FieldError = {
  field: string;
  message: string;
};

export class ValidationError extends AppError {
  public readonly fieldErrors: FieldError[];

  constructor(issues: ZodIssue[] | FieldError[]) {
    const fieldErrors: FieldError[] = issues.map((issue) => {
      if ("path" in issue) {
        // ZodIssue
        return {
          field: issue.path.join(".") || "root",
          message: issue.message,
        };
      }
      return issue as FieldError;
    });

    super(
      ErrorCode.VALIDATION_ERROR,
      "Validation failed",
      422,
      fieldErrors
    );

    this.name = "ValidationError";
    this.fieldErrors = fieldErrors;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
