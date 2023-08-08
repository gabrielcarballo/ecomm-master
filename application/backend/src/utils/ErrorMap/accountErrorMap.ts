/* eslint-disable @typescript-eslint/naming-convention */
interface ErrorHash {
  [key: string]: number;
}

const errorHash: ErrorHash = {
  FIELDS_MISSING: 400,
  INVALID_FIELDS: 400,
  'any.required': 400,
  'string.empty': 400,
  'string.min': 400,
  'string.max': 400,
  'string.email': 400,
};

const errorMap = (type: string) => errorHash[type] || 500;

export default errorMap;
