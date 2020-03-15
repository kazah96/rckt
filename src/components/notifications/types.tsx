import { ReactNode } from 'react';

export enum MessageType {
  Info,
  Warning,
  Error
}

export interface Message {
  id: string;
  content: string | ReactNode;
  type: MessageType;
}
