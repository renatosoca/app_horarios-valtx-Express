import { Message } from "./";

export interface Logger {
  info(message: Message): void;
  error(message: Message): void;
}
