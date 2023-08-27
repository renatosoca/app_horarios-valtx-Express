import { Request, Response } from "express";
import { UserService } from "../../application";

export class UserController {
  constructor(private readonly userService: UserService) { }

  authUser = async ({ body }: Request, res: Response) => {
    const { email, password } = body;

    try {
      const user = await this.userService.loginUser(email, password);
      if (!user) return res
        .status(400)
        .json({ statusCode: 400, message: 'Email o contraseña incorrectos', ok: false });

      return res.status(200).json({
        user,
      });
    } catch (error: any) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message ?? 'Ocurrio un error inesperado, intente mas tarde',
        ok: false,
      })
    }
  }

  createUser = async ({ body }: Request, res: Response) => {

    try {
      const user = await this.userService.createUser(body);
      if (!user) return res
        .status(400)
        .json({ statusCode: 400, message: 'El usuario yá existe', ok: false });

      return res.status(200).json({
        user,
      });
    } catch (error: any) {
      console.log(error.message)
      return res.status(500).json({
        statusCode: 500,
        message: error.message ?? 'Ocurrio un error inesperado, intente mas tarde',
        ok: false,
      })
    }
  }
}