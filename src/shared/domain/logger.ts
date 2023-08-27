interface MessageWithContext {
  message: string;
  context: Record<string, unknown>;
}

type SimpleMessage = string;

export type Message = SimpleMessage | MessageWithContext;
