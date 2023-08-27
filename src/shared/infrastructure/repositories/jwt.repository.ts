
import { sign, verify } from "jsonwebtoken";
import { JWRRepository } from "../../domain";

export class inJWRRepository implements JWRRepository {

  generateJWT = (payload: any): string => {
    const { _id, name, lastName, userName, completeName, email } = payload;
    const jwtSecret: string = `${process.env.JWT_SECRET}`

    return sign({ _id, name, lastName, userName, completeName, email }, jwtSecret, {
      expiresIn: '6h'
    });
  }

  verifyJWT = (token: string) => {
    const jwtSecret: string = `${process.env.JWT_SECRET}`

    return verify(token, jwtSecret);
  }
}