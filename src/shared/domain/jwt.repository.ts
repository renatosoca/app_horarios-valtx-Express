
export interface JWRRepository {
  generateJWT: (payload: any) => string;
  verifyJWT: (token: string) => any;
}