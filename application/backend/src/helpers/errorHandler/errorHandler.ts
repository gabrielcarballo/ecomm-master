/* eslint-disable max-classes-per-file */
export class ErrorHandler extends Error {
  public readonly statusCode: number = 500;

  constructor(error: string, statusCode: number) {
    super(error);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ErrorHandler {
  constructor(error: string) {
    super(error, 400);
  }
}

export class NotFoundError extends ErrorHandler {
  constructor(error: string) {
    super(error, 404);
  }
}

export class UnauthorizedError extends ErrorHandler {
  constructor(error: string) {
    super(error, 401);
  }
}

export class ForbiddenError extends ErrorHandler {
  constructor(error: string) {
    super(error, 403);
  }
}

export class ConflictError extends ErrorHandler {
  constructor(error: string) {
    super(error, 409);
  }
}

export class InternalServerError extends ErrorHandler {
  constructor(error: string) {
    super(error, 500);
  }
}

export class ServiceUnavailableError extends ErrorHandler {
  constructor(error: string) {
    super(error, 503);
  }
}

export class UnprocessableEntityError extends ErrorHandler {
  constructor(error: string) {
    super(error, 422);
  }
}

export class TooManyRequestsError extends ErrorHandler {
  constructor(error: string) {
    super(error, 429);
  }
}
