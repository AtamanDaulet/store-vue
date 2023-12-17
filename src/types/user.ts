export interface Token {
  token: string;
};

export interface TokenDTO {
  status: number;
  data?: Token;
}

export interface UserDTO {
  email: string;
}