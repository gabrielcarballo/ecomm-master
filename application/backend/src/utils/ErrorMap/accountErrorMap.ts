/* eslint-disable @typescript-eslint/naming-convention */
interface ErrorHash {
  [key: string]: number;
}

const errorHash: ErrorHash = {
  FIELDS_MISSING: 400,
  INVALID_FIELDS: 400,
};

const errorMap = (type: string) => errorHash[type] || 500;

export default errorMap;
