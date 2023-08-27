import { inBcryptRepository } from "./repositories";
import { inJWRRepository } from "./repositories/jwt.repository";

export const bcryptRepository = new inBcryptRepository();
export const jwtRepository = new inJWRRepository();