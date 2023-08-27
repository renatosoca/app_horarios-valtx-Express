import { BcryptService } from "../application";
import { BcryptController } from "./controllers/Bcrypt.controller";
import { BcryptRepository } from "./repositories";

const bcryptRepository = new BcryptRepository();
const bcryptService = new BcryptService(bcryptRepository);
export const bcryptController = new BcryptController(bcryptService);
