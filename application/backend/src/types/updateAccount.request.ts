type UpdateAccountRequest = {
  currentName?:string
  name?:string;
  password?:string;
  email?:string;
  authorization: string;
};

export default UpdateAccountRequest;
